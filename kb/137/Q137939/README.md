---
layout: page
title: "Q137939: Shortcut to MS-DOS-Based Program Limited to 62 Characters"
permalink: kb/137/Q137939/
---

## Q137939: Shortcut to MS-DOS-Based Program Limited to 62 Characters

	Article: Q137939
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
	
	When you double-click a shortcut for an MS-DOS-based program, you may receive
	the following error message:
	
	  Cannot find the file '<Path>.' Make sure that the file exists on your
	  system and that the path and filename are correct.
	
	CAUSE
	=====
	
	Shortcuts for MS-DOS-based programs are stored in .pif files rather than in .lnk
	files. The maximum length for a command line in a .pif file is 62 characters. If
	the command line is longer than 62 characters, you receive the error message
	stated above.
	
	RESOLUTION
	==========
	
	To work around this limitation, use either of the following methods:
	
	- Reinstall the MS-DOS-based program to a folder with a shorter path, and then
	  create a shortcut to the new location.
	
	- Create a batch file in the Windows folder that runs the MS-DOS-based program,
	  and then create a shortcut to the batch file.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
