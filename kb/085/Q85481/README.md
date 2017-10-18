---
layout: page
title: "Q85481: Keyboard Problems in Windows 3.1"
permalink: kb/085/Q85481/
---

## Q85481: Keyboard Problems in Windows 3.1

	Article: Q85481
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are having keyboard-related problems in applications run from Microsoft
	Windows operating system version 3.1, then you may need to add MS-DOS's KEYB.COM
	command to your AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	Steps to Add KEYB.COM.
	----------------------
	
	1. Edit your AUTOEXEC.BAT file with a standard ASCII text editor, such as
	  Notepad.
	
	2. Add the following line if you are using MS-DOS versions 4.x or 5.0:
	
	  C:\DOS\KEYB US
	
	  The following line may be necessary if you are running MS-DOS 3.3:
	
	  C:\DOS\KEYB US,, C:\DOS\KEYBOARD.SYS
	
	  If the system does not seem to realize that a 101-key keyboard exists and you
	  are using MS-DOS 5, the following command will force enhanced keyboard
	  support:
	
	  C:\DOS\KEYB US /E
	
	  Note: In MS-DOS versions earlier than MS-DOS 3.3, the equivalent of KEYB US
	  does not exist.
	
	KEYB.COM replaces the ROM BIOS INT 09h keyboard interrupt handler with its own
	routine. This may allow handling of the keyboard in a manner that does not
	conflict with A20 handling.
	
	Additional query words: 3.1 3.11 3.10 himem.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
