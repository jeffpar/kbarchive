---
layout: page
title: "Q99326: Mouse Settings Are Lost When Quitting Windows"
permalink: /kb/099/Q99326/
---

## Q99326: Mouse Settings Are Lost When Quitting Windows

	Article: Q99326
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mouse settings may be lost when you quit Windows if you cannot write to the
	MOUSE.INI file.
	
	CAUSE
	=====
	
	Changes made in the Mouse dialog box of Control Panel or in Mouse Manager (for
	mouse driver version 9.0) are stored in the MOUSE.INI file. If you cannot write
	to this file, any new settings are lost when you quit Windows.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, check the following:
	
	- Run CHKDSK /F to ensure nothing is wrong with the file allocation table
	  (FAT).
	
	- Ensure that the MOUSE.INI file is not marked as read-only.
	
	- Ensure that the Set Mouse= statement in your AUTOEXEC.BAT file is accurate
	  and valid.
	
	- Search for multiple copies of the MOUSE.INI file. If there is a valid Set
	  Mouse= statement that points to a mouse directory, rename any duplicate
	  MOUSE.INI files that do not reside in that directory.
	
	  Usually, the proper MOUSE.INI file resides in the Mouse or Ballpt
	  subdirectory.
	
	Additional query words: 3.10 3.11 exit lost disappears
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
