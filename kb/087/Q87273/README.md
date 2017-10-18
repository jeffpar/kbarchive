---
layout: page
title: "Q87273: Err Msg: Access Denied. Make Sure the Disk Is Not Full or..."
permalink: kb/087/Q87273/
---

## Q87273: Err Msg: Access Denied. Make Sure the Disk Is Not Full or...

	Article: Q87273
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a directory or copy files in the Microsoft Windows 3.1
	File Manager, you may receive the following error message:
	
	  Access Denied. Make sure the disk is not full or write-protected.
	
	If you are using Windows 3.0, the following message appears:
	
	  Cannot create directory.
	
	CAUSE
	=====
	
	These error messages can occur when any of the following conditions exist:
	
	- There is a file in the current directory with the same name as the directory
	  that you are attempting to create. You can verify this with the File Manager
	  Search command.
	
	- You try to copy files and the destination path exceeds 63 characters.
	
	- You try to rename a file that is being used by an application that uses
	  SHARE.EXE or VSHARE.386.
	
	- You have 512 files in the root directory of the hard disk.
	
	RESOLUTION
	==========
	
	To work around these errors, rename the file or directory that you are
	attempting to create, or copy the files to another location. You may also be
	able to work around these errors if you remove unnecessary files from the root
	directory.
	
	MORE INFORMATION
	================
	
	You may encounter this error message if you try to create a directory whose path
	exceeds 63 characters. Windows follows the MS-DOS convention that limits the
	length of a subdirectory path to 63 characters.
	
	The maximum length of any subdirectory path cannot exceed 63 bytes, measured from
	the beginning of the first name to the end of the last name (excluding slashes
	in front or at the end of the PATH statement). MS-DOS function call 47H (Get
	Current Directory) requires a 64-byte buffer in memory to return the current
	directory path. The returned path is not preceded by a backslash, but it is
	terminated by a 0. Therefore, MS-DOS allows 32 nested levels if each
	subdirectory name is one letter long. If path exceeds 63 characters, an error
	message is displayed.
	
	Additional query words: 3.00 3.00a 3.10 3.11 copy copying Winword 6.0 Excel 4.0 5.0 PowerPoint err msg
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
