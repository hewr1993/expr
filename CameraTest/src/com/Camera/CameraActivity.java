package com.Camera;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.graphics.Bitmap;
import android.hardware.Camera;
import android.os.Bundle;
import android.os.Handler;
import android.view.Display;
import android.view.Surface;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;

import com.Filters.R;
import com.cameraView.CameraView;

public class CameraActivity extends Activity implements OnClickListener {
	/** Called when the activity is first created. */
	ImageView imageView;
	boolean isClicked = false;
	CameraView mCameraView;
	Button btn1, btn2, btn3;

	public static Activity activity = null;

	private Handler mHandler = new Handler() {
		public void handleMessage(android.os.Message msg) {
			if (msg.what == 1033) {
				Bitmap bitmap = (Bitmap)msg.obj;
				imageView.setImageBitmap(bitmap);
			}
		};
	};

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
				WindowManager.LayoutParams.FLAG_FULLSCREEN);
		
		setContentView(R.layout.main);
		
		activity = this;
		findView();
	}

	private void findView() {
		btn1 = (Button) findViewById(R.id.myButton1);
		btn2 = (Button) findViewById(R.id.myButton2);
		btn3 = (Button) findViewById(R.id.myButton3);
		imageView = (ImageView)findViewById(R.id.myImageView1);
		mCameraView = (CameraView) findViewById(R.id.mSurfaceView1);
		mCameraView.setHandle(mHandler);
		btn1.setOnClickListener(this);
		btn2.setOnClickListener(this);
		btn3.setOnClickListener(this);
	}

	public void onClick(View v) {
		// TODO Auto-generated method stub
		switch (v.getId()) {
		case R.id.myButton1:
			mCameraView.startCamera();
			break;
		case R.id.myButton2:
			mCameraView.stopCamera();
			break;
		case R.id.myButton3:
			mCameraView.tackPicture();
			break;
		default:
			break;
		}
	}

	public static int ScreenOrient(Activity activity) {
		
		int orient = activity.getRequestedOrientation();
		if (orient != ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE && orient != ActivityInfo.SCREEN_ORIENTATION_PORTRAIT) {
			// 宽>高为横屏,反正为竖屏
			WindowManager windowManager = activity.getWindowManager();
			Display display = windowManager.getDefaultDisplay();
			int screenWidth = display.getWidth();
			int screenHeight = display.getHeight();
			orient = screenWidth < screenHeight ? ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
					: ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
		}
		return orient;
	}

	public static int curDregree(int cameraId) {
		 android.hardware.Camera.CameraInfo info =
	             new android.hardware.Camera.CameraInfo();
	     android.hardware.Camera.getCameraInfo(cameraId, info);
	     int rotation = activity.getWindowManager().getDefaultDisplay()
	             .getRotation();
	     int degrees = 0;
	     switch (rotation) {
	         case Surface.ROTATION_0: degrees = 0; break;
	         case Surface.ROTATION_90: degrees = 90; break;
	         case Surface.ROTATION_180: degrees = 180; break;
	         case Surface.ROTATION_270: degrees = 270; break;
	     }

	     int result;
	     if (info.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
	         result = (info.orientation + degrees) % 360;
	         result = (360 - result) % 360;  // compensate the mirror
	     } else {  // back-facing
	         result = (info.orientation - degrees + 360) % 360;
	     }
	     return result;
	}
	@Override
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		System.exit(0);
	}

}