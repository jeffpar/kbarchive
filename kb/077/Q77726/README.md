---
layout: page
title: "Q77726: No Sounds when Starting Windows or Receiving Error Messages"
permalink: /kb/077/Q77726/
---

## Q77726: No Sounds when Starting Windows or Receiving Error Messages

	Article: Q77726
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No clock-alarm or error-message sounds are heard when starting up Windows with
	Multimedia Extensions.
	
	CAUSE
	=====
	
	The Warning Beep check box must be selected from Control Panel's Sounds icon. If
	Warning Beep is not selected, the special event sounds are not active.
	
	WORKAROUND
	==========
	
	Select the Sounds icon from Control Panel, and select the Warning Beep check
	box.
	
	If you are using Windows version 3.0 or 3.0a with Multimedia Extensions version
	1.0, you must reinitialize the WIN.INI file after the change. (In other words,
	after you have selected or cleared the check box, you must exit and then restart
	Windows for the changes to take effect.)
	
	Later versions of Windows have an option to restart Windows without exiting.
	
	Additional query words: win31 win30 3.00 3.10 1.00 MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin300 kbWin300a kbWin310 kbWinMultiX100
	Version           : WINDOWS:3.0,3.0a,3.1; :1.0
	
	=============================================================================
	
