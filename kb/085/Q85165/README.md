---
layout: page
title: "Q85165: Sound Blaster Err Msg: A Configuration or Hardware..."
permalink: /kb/085/Q85165/
---

## Q85165: Sound Blaster Err Msg: A Configuration or Hardware...

	Article: Q85165
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Microsoft Windows 3.1 with a Creative Labs Sound Blaster
	installed, you may receive the following error message when starting Windows:
	
	  A configuration or hardware problem has occurred. Use driver option in
	  Control Panel to re-configure the Sound Blaster driver.
	
	CAUSE
	=====
	
	This error can be caused by the following:
	
	- The sound card is not correctly configured. You can run the Sound Blaster
	  utility program, TEST-SBC.EXE (for standard Sound Blasters) or TEST-SBP.EXE
	  (for Sound Blaster Pros), to determine its current settings. Make sure the
	  Drivers option under Control Panel matches these settings.
	
	- The SNDBLST.DRV or SNDBLST2.DRV driver is damaged. Delete it and reinstall it
	  from Control Panel.
	
	- The SYSTEM.INI file is damaged or corrupted.
	
	Additional query words: 3.10 3.11 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
