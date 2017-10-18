---
layout: page
title: "Q117358: Err Msg: An Error Occurred Trying to Initialize Video Adapter"
permalink: kb/117/Q117358/
---

## Q117358: Err Msg: An Error Occurred Trying to Initialize Video Adapter

	Article: Q117358
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As Windows 95 is loading, you receive the following error message:
	
	  An error occurred while trying to initialize the video adapter. Press any key
	  to continue.
	
	Pressing a key has no effect; however, CTRL+ALT+DEL does reboot the system.
	
	CAUSE
	=====
	
	This problem occurs if you are using an incompatible or incorrect Windows 3.1
	video driver.
	
	RESOLUTION
	==========
	
	To correct this problem, change your video driver back to the default Windows 95
	VGA setting. To do this, first restart your computer and press the F5 key when
	the "Starting Windows" message appears on your screen. This allows you to bypass
	your startup files and start Windows 95 in Safe mode.
	
	To change your video driver back to VGA:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Display icon.
	
	  NOTE: You can skip steps 1 and 2 if you click the desktop with the right
	  (secondary) mouse button and then click Properties.
	
	3. Click the Settings tab.
	
	4. Click the Change Display Type button, then click the Change button for the
	  Adapter Type.
	
	5. Click Standard Graphics Adapter (VGA), then click OK. When asked whether to
	  use the current driver or a new driver, click Current.
	
	MORE INFORMATION
	================
	
	If you want to use a high-resolution video driver with Windows 95, consult your
	video adapter manufacturer for the proper driver to use.
	
	Additional query words: err msg stealth viper fail-safe safe mode
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
