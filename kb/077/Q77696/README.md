---
layout: page
title: "Q77696: &quot;Close Waveaudio&quot; Command Closes Open Waveaudio Device"
permalink: kb/077/Q77696/
---

## Q77696: &quot;Close Waveaudio&quot; Command Closes Open Waveaudio Device

	Article: Q77696
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows environment, the "close waveaudio" MCI command string
	used with mciSendString() no longer closes all open waveaudio devices. Using the
	MCI command string "close waveaudio" closes only the device opened as "open
	waveaudio".
	
	MORE INFORMATION
	================
	
	The previous behavior of the "close waveaudio" command string was to close all
	waveaudio devices in the system. This was considered "rude" behavior, because no
	application should be able to terminate another application's currently playing
	wave file. Therefore, this behavior was changed.
	
	An application can terminate only the wave files that it has opened. Inside the
	application, "close waveaudio" closes only the device opened as "open
	waveaudio," not a waveaudio device opened with the "type waveaudio" parameter as
	follows:
	
	  open c:\mmwin\mmdata\laser.wav type waveaudio alias myfile
	
	Therefore, a different approach is required to close all waveaudio devices in the
	application. Enumerate all waveaudio devices opened in that task and close them,
	as follows:
	
	  sysinfo waveaudio quantity open     returns <n>
	  sysinfo waveaudio name 1            returns name <1>
	  close name 1
	        .
	        .
	        .
	  sysinfo waveaudio name n            returns name <n>
	  close name n
	
	NOTE: It is not necessary to close all open waveaudio files to play another one.
	The restriction is that only one waveaudio file can be playing at once (assuming
	only one waveaudio output device).
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
