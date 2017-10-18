---
layout: page
title: "Q97442: Undelete for Windows Allows a &quot;?&quot; in a Directory Name"
permalink: kb/097/Q97442/
---

## Q97442: Undelete for Windows Allows a &quot;?&quot; in a Directory Name

	Article: Q97442
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Undelete for Windows to recover a directory, you can type
	a question mark "?" (without the quotation marks) as the first character of the
	new directory name. Since the question mark character is a wildcard in MS-DOS,
	none of the commands or programs provided with MS-DOS 6.0 (for example, RD,
	DELTREE, and MOVE) can delete or rename this newly recovered directory.
	
	If you run the CHKDSK command with an invalid directory name such as \?EST or
	\LPT1, an error message similar to the following is displayed:
	
	  Cannot CHDIR to C:\<directory name> tree past this point not processed
	
	where <directory name> is the directory name you typed.
	
	CAUSE
	=====
	
	If you use the wildcard prefix, Undelete creates a file or directory with the
	wildcard character in the name (for example, ?FILE.DOC), and none of the File
	Manager commands or programs provided with Microsoft Windows can work with it if
	it is a directory.
	
	WORKAROUND
	==========
	
	To work around this problem, use a third-party disk editing program, such Norton
	Utilities by Symantec or PC Tools by Central Point Software.
	
	NOTE: You can use the DEL command at the MS-DOS command prompt to delete the
	file. For example,
	
	  DEL ?FILE.DOC
	
	deletes the file ?FILE.DOC.
	
	WARNING: If your file has a single-character name and you use the wildcard
	character, the wildcard replaces the one-character file name (for example, 1.DOC
	becomes ?.DOC). In this case, you should not use the DEL command to delete the
	file as this command deletes all files with the same file extension. Use a
	third-party disk editing program to rename the file.
	
	Norton Utilities and PC Tools are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.00 diskedit diskfix de pctools
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
