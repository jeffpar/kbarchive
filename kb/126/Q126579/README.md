---
layout: page
title: "Q126579: Files Active After Termination of Recursive Batch File"
permalink: kb/126/Q126579/
---

## Q126579: Files Active After Termination of Recursive Batch File

	Article: Q126579
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a batch file that recursively copies the contents of a set of
	multiple text files to the original text file of the set, terminate the batch
	file, and attempt to rename the original text file of the set, the following
	error message appears:
	
	  The process cannot access the file because it is being used by another
	  process.
	
	If you attempt to modify the same file using a text editor, the following error
	message appears:
	
	  Out of memory
	
	WORKAROUND
	==========
	
	To rename or modify the original text file, close and restart the MS-DOS Command
	Prompt (CMD.EXE).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt notepad edit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
