---
layout: page
title: "Q84860: Windows Err Msgs from Bad SYSTEM.INI Headings"
permalink: kb/084/Q84860/
---

## Q84860: Windows Err Msgs from Bad SYSTEM.INI Headings

	Article: Q84860
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup kbdisplay kbsound kberrmsg kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 displays the following error messages if a section heading
	is missing in the SYSTEM.INI file or if an incorrect character is before the
	left bracket ([) of a section heading:
	
	If the [boot] section is damaged or missing, the error message is:
	
	  error loading DISPLAY.DRV
	
	If the [386enh] section is damaged or missing, the error message is:
	
	  System initialization file required to run Windows in 386 enhanced mode is
	  incomplete. You need to run the Setup program again.
	
	If the [drivers] section is damaged or missing, the Events and Files in the Sound
	section of the Control Panel will not be available.
	
	To correct this problem, do the following:
	
	1. Open the SYSTEM.INI file in Notepad or another standard ASCII text editor.
	
	2. Locate the affected section heading.
	
	3. Press HOME to move the insertion point to the beginning of the line.
	
	4. Press SHIFT+END to select the entire line.
	
	5. Press DEL to delete the entire line. (It is recommended that the entire line
	  be removed to ensure complete removal of the corruption.)
	
	6. Retype the section heading and save the SYSTEM.INI file.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
