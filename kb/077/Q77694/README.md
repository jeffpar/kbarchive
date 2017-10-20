---
layout: page
title: "Q77694: Setting the Amount of Memory for the Audio Data Buffer"
permalink: /kb/077/Q77694/
---

## Q77694: Setting the Amount of Memory for the Audio Data Buffer

{% raw %}

	Article: Q77694
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following five steps configure the amount of memory that the MCIWAVE driver
	for Microsoft Windows uses to buffer audio data during playback or recording:
	
	1. Run the Control Panel.
	
	2. Select the Drivers icon.
	
	3. Select the WaveAudio driver from the Installed Drivers list box.
	
	4. Double-click the following line in the Installed Drivers list box:
	
	  WaveAudio [MCI] Waveform Audio
	
	5. Scroll the "Seconds" scroll bar to the right or to the left and select a
	  buffer that stores between two and nine seconds of audio data, as desired.
	
	Alternately, modify the size of the buffer in the SYSTEM.INI file. The numeric
	parameter on the "WaveAudio" line in the [mci] section specifies the size of the
	buffer. The following is a sample of the SYSTEM.INI file:
	
	     [mci]
	     WaveAudio=mciwave.drv 4
	
	A four-second buffer is the default setting.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
