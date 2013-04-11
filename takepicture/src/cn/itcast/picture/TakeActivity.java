package cn.itcast.picture;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.util.Arrays;
import java.util.Scanner;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.PixelFormat;
import android.graphics.Bitmap.CompressFormat;
import android.graphics.Bitmap.Config;
import android.hardware.Camera;
import android.hardware.Camera.PictureCallback;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.Display;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.View.OnTouchListener;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class TakeActivity extends Activity {

	// show some debug information on screen
	public void debug(String desc) {
		TextView board = (TextView) this.findViewById(R.id.debug);
		board.setText(desc);
	}	
	
	// time-control
	private Timer timer = new Timer(250);
	private Runnable captureTimeElasped, replayTimeElasped;
	
	private static final String TAG = "TakeActivity";
    private SurfaceView surfaceView;
    private Camera camera;
    private boolean preview;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window window = getWindow();
    	requestWindowFeature(Window.FEATURE_NO_TITLE);//û�б���
    	window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);// ����ȫ��
    	window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);//����

        setContentView(R.layout.main);
        
        // set replay button
        Button rplBtn = (Button) this.findViewById(R.id.replayBtn);
        rplBtn.setOnClickListener(new Button.OnClickListener() {
        	public void onClick(View v) {
        		if (timer.alive()) return;
        		if (!initReplay()) return;
        		timer.startTimer(replayTimeElasped);
        	}
        });
        replayTimeElasped = new Runnable() {
        	public void run() {
        		long currentMilliseconds = System.currentTimeMillis();
        		timer.secondsPassed += timer.delayMilliSeconds;
        		if (!showNextReplay()) return;
        		timer.hdl.postAtTime(this, currentMilliseconds); // add notification
        		// notify to call back after 1 seconds
        		// basically to remain in the timer loop
        		timer.hdl.postDelayed(replayTimeElasped, timer.delayMilliSeconds);
        	}
        };
        
        Button cptBtn = (Button) this.findViewById(R.id.captureBtn);
        cptBtn.setOnTouchListener(new OnTouchListener() {
			@Override
			public boolean onTouch(View v, MotionEvent event) {
				switch (event.getAction()) {
				case MotionEvent.ACTION_DOWN:
	        		if (!timer.alive()) {
	        			timer.startTimer(captureTimeElasped);
	        			try {
	        				createFile("rec.txt");
	        			} catch (IOException e) {
	        				e.printStackTrace();
	        			}
	        		}
					break;
				case MotionEvent.ACTION_UP:
	    			if (timer.alive()) 
	    				timer.stopTimer(captureTimeElasped);
					break;
				}
				return true;
			}
		});
        
        surfaceView =(SurfaceView)this.findViewById(R.id.surfaceView);
        surfaceView.getHolder().setFixedSize(176, 144);	//���÷ֱ���
        /*��������Surface��ά���Լ��Ļ����������ǵȴ���Ļ����Ⱦ���潫�������͵��û���ǰ*/
        surfaceView.getHolder().setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);
        surfaceView.getHolder().addCallback(new SurfaceCallback());
        
        //��ʼ�� runnable
        captureTimeElasped = new Runnable() {
        	public void run() {
        		long currentMilliseconds = System.currentTimeMillis();
        		timer.secondsPassed += timer.delayMilliSeconds;
				camera.takePicture(null, null, new TakePictureCallback());
        		timer.hdl.postAtTime(this, currentMilliseconds); // add notification
        		// notify to call back after 1 seconds
        		// basically to remain in the timer loop
        		timer.hdl.postDelayed(captureTimeElasped, timer.delayMilliSeconds);
        	}
        };
    }
    
    private Scanner cin;
    // initialize replay resources
    private boolean initReplay() {
    	String Path = Environment.getExternalStorageDirectory().getAbsolutePath() + "/rec.txt";
    	try {
    		// whether file exists
    		File file = new File(Path);
    		if (!file.exists()) return false;
    		cin = new Scanner(new DataInputStream(new FileInputStream(file)));
    	} catch (Exception e) {
    		e.printStackTrace();
    		return false;
    	}
    	return true;
    }
    // if there is next picture, show it
    private boolean showNextReplay() {
    	try {
    		final int intLength = 4800;
    		int[] data = new int[intLength];
    		for (int i = 0; i < data.length; ++i) {
    		}
    	} catch (Exception e) {
    		e.printStackTrace();
    		return false;
    	}
    	return true;
    }
    
    private final class SurfaceCallback implements SurfaceHolder.Callback{

		@Override
		public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
			WindowManager wm = (WindowManager) getSystemService(Context.WINDOW_SERVICE);
			Display display = wm.getDefaultDisplay();
			Camera.Parameters parameters = camera.getParameters();
			parameters.set("orientation", "landscape");
			parameters.setPreviewSize(display.getWidth(), display.getHeight());//����Ԥ����Ƭ�Ĵ�С
			//parameters.setPreviewFrameRate(3);//ÿ��3֡
			parameters.setPictureFormat(PixelFormat.JPEG);//������Ƭ�������ʽ
			//parameters.set("jpeg-quality", 85);//��Ƭ����
			//parameters.setPictureSize(display.getWidth(), display.getHeight());//������Ƭ�Ĵ�С
			camera.setParameters(parameters);
			camera.startPreview();
			camera.autoFocus(null);
		}

		@Override
		public void surfaceCreated(SurfaceHolder holder) {
			try {
				camera = Camera.open();
				camera.setPreviewDisplay(surfaceView.getHolder());//ͨ��SurfaceView��ʾȡ������
				camera.startPreview();//��ʼԤ��
				preview = true;
			} catch (IOException e) {
				Log.e(TAG, e.toString());
			}

		}

		@Override
		public void surfaceDestroyed(SurfaceHolder holder) {
			if(camera!=null){
				if(preview) camera.stopPreview();
				camera.release();
			}
		}
    	
    }
    
    /*@Override
    public boolean onTouchEvent(MotionEvent event) {
    	switch (event.getAction()) {
    		case MotionEvent.ACTION_DOWN:
    			break;
    		case MotionEvent.ACTION_UP:
    			break;
    	}
    	return true;
    }*/

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if(camera!=null && event.getRepeatCount()==0){
			switch (keyCode) {
			case KeyEvent.KEYCODE_MENU:
				camera.autoFocus(null);//�Զ��Խ�
				break;

			case KeyEvent.KEYCODE_CAMERA:
			case KeyEvent.KEYCODE_DPAD_CENTER:
				camera.takePicture(null, null, new TakePictureCallback());
				break;
			}
		}
		return true;
	}
	
	public void showImage(Bitmap bitmap) {
		ImageView board = (ImageView) this.findViewById(R.id.show);
		board.setImageBitmap(bitmap);
	}
	
	// create a file (if not exists)
	String recPath;
	private void createFile(String fileName) throws IOException {
		String packageName = this.getPackageName();
		//recPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/Android/data/" + packageName + "/files/";
		recPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/";
		File dir = new File(recPath, fileName);
		if (!dir.exists()) {
			// create directories
			dir = new File(recPath);
			dir.mkdirs();
				
			// create high score file
			dir = new File(recPath, fileName);
			dir.createNewFile();
		}
		recPath += fileName;
		
		// clear the record file
		FileOutputStream fos = new FileOutputStream(recPath);
		fos.close();
	}
	
	// write pictures into file "rec.txt"
	private void recData(int width, int height, int data[]) {
		//Bitmap bitmap = Bitmap.createBitmap(data, width, height, Config.ARGB_8888);
		try {
			FileOutputStream fos = new FileOutputStream(recPath, true);
			String desc = Arrays.toString(data);
			fos.write(desc.getBytes());
			fos.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private final class TakePictureCallback implements PictureCallback{
		@Override
		public void onPictureTaken(byte[] data, Camera camera) {
			try {
				BitmapFactory.Options options = new BitmapFactory.Options();
				options.inSampleSize = 10;
				options.inJustDecodeBounds = false;
				Bitmap bitmap = BitmapFactory.decodeByteArray(data, 0, data.length, options);
				
				showImage(bitmap);
				int RGBData[] = new int[bitmap.getHeight() * bitmap.getWidth()];
				bitmap.getPixels(RGBData, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
				recData(bitmap.getWidth(), bitmap.getHeight(), RGBData);
				debug(" " + RGBData.length);
				
				/*long t1 = System.currentTimeMillis();
				int RGBData[] = new int[bitmap.getHeight() * bitmap.getWidth()];
				bitmap.getPixels(RGBData, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
				//debug(Long.toString(System.currentTimeMillis() - t1));
				t1 = 0;
				for (int i = 0; i < RGBData.length; ++i) t1 = Math.max(t1, (long) RGBData[i]);
				debug(Long.toString(RGBData[2]));*/
				
				/*File file = new File(Environment.getExternalStorageDirectory(), "save.jpg");
				FileOutputStream outStream = new FileOutputStream(file);
				bitmap.compress(CompressFormat.JPEG, 100, outStream);
				outStream.close();
				camera.stopPreview();
				camera.startPreview();//��ʼԤ��*/
			} catch (Exception e) {
				Log.e(TAG, e.toString());
			}
		}
	}
	
	
}