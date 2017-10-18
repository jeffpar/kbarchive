---
layout: page
title: "Q74873: Device Conflict Error Message in 386 Enhanced Mode"
permalink: kb/074/Q74873/
---

## Q74873: Device Conflict Error Message in 386 Enhanced Mode

	Article: Q74873
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Microsoft Windows in 386 enhanced mode, you may receive the error
	message:
	
	  Device Conflict on [PORT]; Do you want [APPLICATION] to Take Control?
	
	One possible solution is to change the device contention setting within the
	Control Panel.
	
	MORE INFORMATION
	================
	
	Changing this setting forces Windows to resolve the device contention without
	displaying the error message.
	
	Steps to Change the Device Contention Setting
	---------------------------------------------
	
	1. Select the Control Panel icon from the Main Group.
	
	2. Select the 386 Enhanced icon.
	
	3. Choose the port on which the device contention error is occurring.
	
	4. Select Never Warn.
	
	5. Choose OK to exit.
	
	Additional query words: tshoot 3.0 3.00 3.1 3.10 3.11 wincomm win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
