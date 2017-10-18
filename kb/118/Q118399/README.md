---
layout: page
title: "Q118399: UNC-Format Path Affects the DIR Command"
permalink: kb/118/Q118399/
---

## Q118399: UNC-Format Path Affects the DIR Command

	Article: Q118399
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a program item in Program Manager that points to a batch file on a
	remote server using a universal naming convention (UNC)-specified path and the
	batch file executes a DIR command followed by any parameter, when you start the
	program item, the following error message appears:
	
	  The system cannot find the file specified.
	
	After running the batch file, if you execute a DIR command with any parameter
	from the command line, you will receive the same error message.
	
	However, executing a DIR command on a remote directory using a UNC- specified
	path as follows does not return an error:
	
	  DIR \\<computer name>\<share name>\<directory>\<batch
	  file name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Listed below are examples of the program item command line, the contents of a
	batch file, and the result of selecting the program item.
	
	Program Item Command Line
	-------------------------
	
	  \\<machine name>\<share name>\<directory>\<batch file
	  name>
	
	Contents of Batch File
	----------------------
	
	echo off
	copy c:\winnt\system32\ras\modem.inf <UNC-format name addressed above>
	echo ..
	echo ..
	echo    Doing a directory to confirm file copy
	echo ..
	echo ..
	DIR *.inf
	echo ..
	echo    DONE
	pause
	
	Result Output
	-------------
	
	  \\<machine name>\<share name>\<directory>\<batch file name> >echo off
	
	       1 file(s) copied.
	..
	..
	
	  Doing a directory to confirm file copy
	
	..
	..
	The system cannot find the file specified.
	..
	
	  DONE
	
	Press any key to continue . . .
	
	Additional query words: prodnt p page w wide
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
