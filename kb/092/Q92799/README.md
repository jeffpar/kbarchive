---
layout: page
title: "Q92799: Configuring the Buffer Size Used by the MCIWAVE Driver"
permalink: /kb/092/Q92799/
---

## Q92799: Configuring the Buffer Size Used by the MCIWAVE Driver

{% raw %}

	Article: Q92799
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The [mci] section of the Windows SYSTEM.INI file contains the following line
	specifying the MCI waveform driver:
	
	       WaveAudio=mciwave.drv value
	
	where "value" is an integer between 2 and 9. This value is the number of seconds
	that MCIWAVE.DRV buffers audio data during playback or record. This value is
	directly related to the amount of memory that MCIWAVE.DRV allocates for the
	buffering. If there is no value listed, MCIWAVE.DRV uses the default value of
	4.
	
	Note: If you change the value on the WaveAudio line in the SYSTEM.INI file to a
	number outside the range 2 to 9, Windows uses the default value of 4.
	
	You can modify this setting in Control Panel using the procedure listed below.
	
	MORE INFORMATION
	================
	
	To change the buffer length setting, use the following steps:
	
	1. In the Control Panel window, choose the Drivers icon.
	
	2. Select MCI[Sound] from the list of installed drivers.
	
	3. Click the Setup button.
	
	4. The MCI Waveform Driver Setup dialog box appears. Set a value between 2 to 9.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
