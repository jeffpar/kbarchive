---
layout: page
title: "Q117393: Can't Execute Utilities with POSIX Shell (SH.EXE)"
permalink: /kb/117/Q117393/
---

## Q117393: Can't Execute Utilities with POSIX Shell (SH.EXE)

	Article: Q117393
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1; :3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From the POSIX Shell (SH.EXE), you may not be able to run any of the POSIX
	utilities.
	
	CAUSE
	=====
	
	In the POSIX subsystem the path and executable name must be completely
	specified. For example, if the file, LS.EXE is in the current directory, but
	that directory is not in the path, to execute the file, you must type:
	
	  .\LS.EXE
	
	NOTE: The POSIX subsystem is case sensitive.
	
	WORKAROUND
	==========
	
	Binary files executed within the POSIX shell must be in a directory identified
	in the PATH statement. Use the PATH command to add the appropriate directory to
	the path environment variable before you execute the POSIX shell.
	
	- or -
	
	Specify the complete path (case sensitive) at the POSIX command line.
	
	NOTE: See Q100625 for more information on POSIX and case sensitivity.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1; :3.1
	
	=============================================================================
	
