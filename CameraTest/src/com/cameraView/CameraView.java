package com.cameraView;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Bitmap.Config;
import android.graphics.BitmapFactory;
import android.graphics.PixelFormat;
import android.hardware.Camera;
import android.hardware.Camera.AutoFocusCallback;
import android.hardware.Camera.PictureCallback;
import android.hardware.Camera.PreviewCallback;
import android.hardware.Camera.ShutterCallback;
import android.os.Handler;
import android.os.Message;
import android.util.AttributeSet;
import android.util.Log;
import android.view.SurfaceHolder;
import android.view.SurfaceHolder.Callback;
import android.view.SurfaceView;

import com.Camera.CameraActivity;

public class CameraView extends SurfaceView implements Callback {

	SurfaceHolder mSurfaceHolder;
	Camera mCamera = null;

	Context mContext;
	private final int cameraId = 0;

	private Handler mHandler;
	
	private ShutterCallback shutter = new ShutterCallback() {

		public void onShutter() {

		}
	};

	public void setHandle(Handler handler) {
		mHandler = handler;
	}

	private PictureCallback raw = new PictureCallback() {

		public void onPictureTaken(byte[] data, Camera camera) {

		}
	};
	private PictureCallback jpeg = new PictureCallback() {
		public void onPictureTaken(byte[] data, Camera camera) {
			// TODO Auto-generated method stub
			try {
				Bitmap bm = BitmapFactory.decodeByteArray(data, 0, data.length);
				Log.i("length", "" + data.length);
				Log.i("data[0]", "" + data[0]);
				File file = new File("/sdcard/wjh.jpg");
				BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file));
				bm.compress(Bitmap.CompressFormat.JPEG, 100, bos); // 保存图片
				bos.flush();
				bos.close();
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
	};

	private PreviewCallback mPreviewCallback = new PreviewCallback() {

		public void onPreviewFrame(byte[] data, Camera camera) {
			if (data != null) {
				int imageWidth = mCamera.getParameters().getPreviewSize().width;
				int imageHeight = mCamera.getParameters().getPreviewSize().height;
				int RGBData[] = new int[imageWidth * imageHeight];
				decodeYUV420SP(RGBData, data, imageWidth, imageHeight); // 解码
				Bitmap bm = Bitmap.createBitmap(RGBData, imageHeight, imageWidth, Config.ARGB_8888);
				//bm = imageUtil.ImageUtil.toGrayscale(bm);// 实时滤镜效果 这时把图片变成黑白
				Message message = new Message();
				message.what = 1033;
				message.obj = bm;
				mHandler.sendMessage(message); // 显示图片
			}
		}
	};

	private AutoFocusCallback autoFocus = new AutoFocusCallback() {

		public void onAutoFocus(boolean success, Camera camera) {
			// TODO Auto-generated method stub

		}
	};

	/**
	 * 拍照
	 */
	public void tackPicture() {
		mCamera.takePicture(shutter, raw, jpeg);
		Handler handler = new Handler();
		handler.postDelayed(new Runnable() {
			public void run() {
				mCamera.startPreview();
				mCamera.autoFocus(autoFocus);
			}
		}, 1000);
	}

	/**
	 * 解码
	 * 
	 * @param rgb
	 * @param yuv420sp
	 * @param width
	 * @param height
	 */
	static public void decodeYUV420SP(int[] rgb, byte[] yuv420sp, int width, int height) {
		final int frameSize = width * height;

		for (int j = 0, yp = 0; j < height; j++) {
			int uvp = frameSize + (j >> 1) * width, u = 0, v = 0;
			for (int i = 0; i < width; i++, yp++) {
				int y = (0xff & ((int) yuv420sp[yp])) - 16;
				if (y < 0)
					y = 0;
				if ((i & 1) == 0) {
					v = (0xff & yuv420sp[uvp++]) - 128;
					u = (0xff & yuv420sp[uvp++]) - 128;
				}

				int y1192 = 1192 * y;
				int r = (y1192 + 1634 * v);
				int g = (y1192 - 833 * v - 400 * u);
				int b = (y1192 + 2066 * u);

				if (r < 0)
					r = 0;
				else if (r > 262143)
					r = 262143;
				if (g < 0)
					g = 0;
				else if (g > 262143)
					g = 262143;
				if (b < 0)
					b = 0;
				else if (b > 262143)
					b = 262143;

				rgb[i * height + height - j - 1] = 0xff000000 | ((r << 6) & 0xff0000) | ((g >> 2) & 0xff00) | ((b >> 10) & 0xff);
			}
		}
	}

	public void startCamera() {
		mCamera.startPreview();
	}

	public void stopCamera() {
		if (mCamera != null) {
			mCamera.stopPreview();
		}
	}

	public CameraView(Context context) {
		super(context);
		// TODO Auto-generated constructor stub
		mSurfaceHolder = getHolder();// 获得surfaceHolder引用
		mSurfaceHolder.addCallback(this);
		mSurfaceHolder.setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);// 设置类型
		mContext = context;
	}

	public CameraView(Context context, AttributeSet attrs) {
		super(context, attrs);
		mSurfaceHolder = getHolder();// 获得surfaceHolder引用
		mSurfaceHolder.addCallback(this);
		mSurfaceHolder.setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);// 设置类型
		mContext = context;

	}

	public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {

		Camera.Parameters parameters = mCamera.getParameters();// 获得相机参数
		parameters.setPreviewSize(width, height); // 设置预览图像大小
		parameters.setPictureFormat(PixelFormat.JPEG); // 设置照片格式
		// if (CameraActivity.ScreenOrient(CameraActivity.activity) ==
		// Configuration.ORIENTATION_LANDSCAPE) {
		// Log.i("横屏", "横屏");
		// mCamera.setDisplayOrientation(0);
		// } else if (CameraActivity.ScreenOrient(CameraActivity.activity) ==
		// Configuration.ORIENTATION_PORTRAIT) {
		// Log.i("素屏", "素屏");
		// mCamera.setDisplayOrientation(90);
		// }
		mCamera.setDisplayOrientation(CameraActivity.curDregree(cameraId));
		mCamera.setParameters(parameters);// 设置相机参数

		mCamera.startPreview();
		mCamera.autoFocus(autoFocus);
	}

	public void surfaceCreated(SurfaceHolder holder) {
		// TODO Auto-generated method stub
		if (mCamera == null) {
			mCamera = Camera.open(cameraId);// 开启相机,不能放在构造函数中，不然不会显示画面.
			mCamera.setPreviewCallback(mPreviewCallback);
			try {
				mCamera.setPreviewDisplay(holder);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public void surfaceDestroyed(SurfaceHolder holder) {
		// TODO Auto-generated method stub
		mCamera.stopPreview();// 停止预览
		mCamera.release();// 释放相机资源
		mCamera = null;
	}

}
