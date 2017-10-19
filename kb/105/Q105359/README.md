---
layout: page
title: "Q105359: Filenames with Trailing Periods Not Found"
permalink: /kb/105/Q105359/
---

## Q105359: Filenames with Trailing Periods Not Found

	Article: Q105359
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to move, delete, copy, or rename a file whose name contains a
	trailing period (such as README.), you will receive one of the following error
	messages.
	
	If you are using File Manager:
	
	  File Manager cannot move <filename and path>: The system cannot find
	  the file specified. Make sure the correct path and filename are specified and
	  the network is started.
	
	If you are at a command prompt:
	
	  The system cannot find the file specified file.
	
	  -or-
	
	  Could not Find <filename and path>.
	
	CAUSE
	=====
	
	Windows NT cannot handle filenames with trailing periods. The only known way
	that Windows NT allows a file to have a trailing period is if the file was
	named/created by a Macintosh. In this case, the Windows NT Advanced Server must
	be running, or has run, Services for the Macintosh.
	
	Macintosh users can name a file with a trailing period. That file may then be
	copied to Windows NT Advanced Server, but Windows NT Advanced Server will not
	remove the period, nor will the name translation process to 8.3 take care of the
	problem.
	
	WORKAROUND
	==========
	
	The file should be renamed from a Macintosh, so that it does not contain a
	trailing period.
	
	To resolve this problem, upgrade to Windows NT Server version 3.5.
	
	STATUS
	======
	
	This problem was corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
