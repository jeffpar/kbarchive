---
layout: page
title: "Q112883: CONN: MACGATE Needs Separate Mappings for DATA and EXE"
permalink: kb/112/Q112883/
---

## Q112883: CONN: MACGATE Needs Separate Mappings for DATA and EXE

	Article: Q112883
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Successfully running MACGATE.EXE requires separate drives or drive mapping to
	the postoffice database (..\MAILDATA) and the executable directory (..\MAILEXE)
	containing the four MS-DOS executables needed by the Microsoft Mail Connection
	version 1.0b (MACGATE.EXE, MACGET.EXE, MACPUT.EXE, and IMPORT.EXE).
	
	When you run MACGATE.EXE, the executable directory must be the current
	directory.
	
	If you attempt to run MACGATE.EXE from a directory other than the executable
	directory or if you do not have a separate drive mapping for the data and
	executables you get an error similar to this:
	
	  Error running FFAPI program: No such file or directory
	  Bad parameter value. (110)
	  : 74
	  exiting on (date time) with status 74 (118)
	
	Or if the executable directory is pathed:
	
	  IMPORT.EXE not found. Check executable path or copy from distribution
	  diskette.
	  exiting on (date time) with status 81 (118)
	
	If you have only one drive mapping and try to run MACGATE.EXE with all other
	parameters and settings correct, your current directory would change to
	..\MAILDATA and you would get one of the above errors. For example,
	
	  M:\MAILEXE> macgate
	
	would result in one the above errors followed by:
	
	  M:\MAILDATA>
	
	
	Additional query words: 1.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	
