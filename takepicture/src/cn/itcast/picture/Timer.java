package cn.itcast.picture;

import android.os.Handler;

public class Timer {
	public Handler hdl; // timer to keep track of time elapsed
	public long secondsPassed, delayMilliSeconds; // Record the time & Delay time (ms)
	
	public Timer(long delay) {
		hdl = new Handler();
		secondsPassed = 0;
		delayMilliSeconds = delay;
	}

	public void startTimer(Runnable updateTimeElasped) {
		if (secondsPassed == 0) {
			hdl.removeCallbacks(updateTimeElasped);
			// tell timer to run call back after 1 second
			hdl.postDelayed(updateTimeElasped, 1000);
		}
	}

	public void stopTimer(Runnable updateTimeElasped) {
		// disable call backs
		hdl.removeCallbacks(updateTimeElasped);
		secondsPassed = 0;
	}
	
	// return whether the timer is running
	public boolean alive() {
		return secondsPassed > 0;
	}
	
}
