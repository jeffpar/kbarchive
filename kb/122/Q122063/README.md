---
layout: page
title: "Q122063: Explorer ErrMsg: Cannot Rename (or Find) the Specified File..."
permalink: kb/122/Q122063/
---

## Q122063: Explorer ErrMsg: Cannot Rename (or Find) the Specified File...

	Article: Q122063
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working in Windows Explorer, trying to rename, delete, or move a
	file that appears to have an underscore in its filename generates a file access
	error. For example, trying to rename a file generates the following error:
	
	  Error Renaming File
	
	  Cannot rename C:\file_: Cannot find the specified file. Make sure you specify
	  the correct path and filename.
	
	CAUSE
	=====
	
	This error occurs when the file includes extended ANSI characters that Windows
	Explorer does not recognize in its filename. Windows Explorer displays
	unrecognized characters as underscores. Some MS-DOS-based applications use
	extended ASCII characters (such as line-drawing characters) in filenames to
	protect important files from accidentally being changed in any way.
	
	RESOLUTION
	==========
	
	To rename, move, or delete the file, open an MS-DOS prompt, and make the changes
	from the command line using the appropriate ANSI characters. Consult the ANSI
	character set to determine which numeric code corresponds to the extended
	character in the filename.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
