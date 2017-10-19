---
layout: page
title: "Q171651: Running a Batch or Command File from Windows NT Explorer Fails"
permalink: /kb/171/Q171651/
---

## Q171651: Running a Batch or Command File from Windows NT Explorer Fails

	Article: Q171651
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a .bat or .cmd file from Explorer or by using the Run
	command on the Start menu, you see a command window open and then close
	immediately. If you could read the message it would say:
	
	  This command is not recognized as an internal or external command.
	
	The .bat or .cmd file will work fine if you open a command prompt window, go to
	the directory, and run the file.
	
	CAUSE
	=====
	
	The .bat or .cmd file is located in a directory that has one of the following
	characters in the directory name or a parent directory name:
	
	  @ & ^ ( )
	
	NOTE: If you use the Run command on the Start menu, the at symbol (@) does not
	cause this problem.
	
	RESOLUTION
	==========
	
	Change the parent directory name so that it does not use one of those
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: VDM dosapp prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
