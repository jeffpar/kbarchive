---
layout: page
title: "Q103698: File Manager Cannot Modify File/Directory Names Containing &quot;?&quot;"
permalink: kb/103/Q103698/
---

## Q103698: File Manager Cannot Modify File/Directory Names Containing &quot;?&quot;

	Article: Q103698
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows File Manager is unable to make any modifications (rename,
	change attributes, delete, move, and so forth) to a file or directory name that
	has a question mark (?) as the first character.
	
	NOTE: Microsoft Undelete for Windows, which ships with MS-DOS 6.0 inserts a
	question mark for the first letter of an undeleted file if no letter is given.
	This problem was corrected in MS-DOS version 6.2 and later.
	
	WORKAROUND
	==========
	
	You can rename or delete these files from an MS-DOS command prompt in Windows.
	(For more information on the REN and DEL commands, refer to your "Microsoft
	MS-DOS User's Guide.")
	
	If you use Microsoft Undelete for Windows and a directory name has a ? as the
	first character, do one of the following:
	
	- Use a third-party disk editor to rename the directory.
	
	- Format the drive to remove the directory name.
	
	- Run the ScanDisk utility (which ships with MS-DOS 6.2). ScanDisk locates
	  these directory names and makes them valid directories when all is complete.
	
	Additional query words: 3.10 error winfil scan disk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
