---
layout: page
title: "Q82470: No System Event Sounds After Installing Sound Driver"
permalink: /kb/082/Q82470/
---

## Q82470: No System Event Sounds After Installing Sound Driver

{% raw %}

	Article: Q82470
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you can't hear any sounds after you install a new sound driver for Microsoft
	Windows, follow the troubleshooting steps in this article.
	
	MORE INFORMATION
	================
	
	1. Make sure the sound adapter works from MS-DOS.
	
	  Most sound adapters come with self-diagnostics programs. Run one if present
	  (for example, TEST-SBC.EXE or DIAGNOSE.EXE for Sound Blaster, TBTEST.EXE for
	  Thunderboard).
	
	2. Make sure that system sounds are enabled through the Control Panel.
	
	  Run the Sounds application. If the system sounds are unavailable, the sound
	  driver probably will need to be reinstalled. (Also note that MIDI-only
	  adapters cannot play wave files, for example, MPU-401 and LAPC1.)
	
	3. Make sure the wave files assigned to system events are present in the WINDOWS
	  directory. If a Custom installation of Windows was used, you may have decided
	  not to install the wave files. Check the WINDOWS directory for the following
	  wave files:
	
	  DING.WAV
	  CHORD.WAV
	  CHIMES.WAV
	  TADA.WAV
	
	  If these files are not present, they can be installed by running Windows Setup
	  from the Main group. From the Options menu, choose Add/Remove Windows
	  Components.
	
	  Only .WAV files can be used for system sounds.
	
	Additional query words: tshoot 3.10 sonic thunder wav soundblaster 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
