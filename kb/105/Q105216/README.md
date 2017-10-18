---
layout: page
title: "Q105216: Windows Err Msg: The Program Group File Has Been Modified"
permalink: kb/105/Q105216/
---

## Q105216: Windows Err Msg: The Program Group File Has Been Modified

	Article: Q105216
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you exit Windows 3.1 in 386
	enhanced mode:
	
	  Group File Error
	  The program group file has been modified by another program or user and will
	  be reloaded; try the operation again.
	
	Choosing the OK button has no effect; the only course of action is to reboot your
	machine.
	
	NOTE: This error has not been reproduced in standard mode.
	
	CAUSE
	=====
	
	This problem can be caused by either of the following:
	
	- Two groups with the same name exist in the [Groups] section of the
	  PROGMAN.INI file. For example:
	
	        [Groups]
	        Group9=c:\win\apps.grp
	        Group8=c:\win\apps.grp
	
	- Two groups with the same number exist in the [Groups] section of the
	  PROGMAN.INI file. For example:
	
	        [Groups]
	        Group7=c:\win\apps.grp
	        Group7=c:\win\main.grp
	
	RESOLUTION
	==========
	
	1. Exit Windows and open the PROGMAN.INI file in a text editor, such as MS-DOS
	  Editor.
	
	2. Remove any duplicate group name(s), and/or change any duplicate group
	  number(s) in the [Groups] section.
	
	3. Modify the ORDER= line in the [Settings] section so that there are no
	  duplicate or extra numbers.
	
	If there are no duplicate groups names or group numbers, rename the PROGMAN.INI
	file and then rebuild the file. For instructions on rebuilding the PROGMAN.INI
	file, query in the Microsoft Knowledge Base on the following words:
	
	  progman.ini and rebuild and groups and setup
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
