---
layout: page
title: "Q135179: Cannot Copy File Whose Filename Begins with a Period"
permalink: /kb/135/Q135179/
---

## Q135179: Cannot Copy File Whose Filename Begins with a Period

	Article: Q135179
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy a file, if the source or destination is a long filename
	that starts with a period (.), you receive the error message "Path not found."
	
	Note that this problem occurs only if you supply a path to the source or
	destination file. For example,
	
	  copy c:\path\to\.source destdir
	
	or:
	
	  copy source c:\path\to\.dest
	
	CAUSE
	=====
	
	This problem occurs because Command.com assumes that any filename beginning with
	a period is a directory name, even though long filenames can begin with a
	period.
	
	RESOLUTION
	==========
	
	To work around this problem, use Windows Explorer to copy the file instead of
	typing a COPY command at an MS-DOS prompt. Or, copy the file using its short
	filename, and then rename the file.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
