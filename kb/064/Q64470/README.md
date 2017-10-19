---
layout: page
title: "Q64470: International Keyboard Layout Always Prompts for Disk"
permalink: /kb/064/Q64470/
---

## Q64470: International Keyboard Layout Always Prompts for Disk

	Article: Q64470
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the International icon from the Control Panel in Microsoft
	Windows 3.0, and change the keyboard layout to a non-U.S. country, you are
	prompted to insert a setup disk with the appropriate filename. You are prompted
	every time you change the layout to this country, even though the file has
	already been copied and is already in the WINDOWS directory. Typing the
	appropriate pathname to the file does not work correctly.
	
	This behavior does not occur when you change the keyboard layout back to U.S.
	
	WORKAROUND
	==========
	
	Open the SYSTEM.INI file and insert the appropriate filename after KEYBOARD.DLL
	in the [keyboard] section. This is easier for those in bilingual countries who
	change keyboard layouts often.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
