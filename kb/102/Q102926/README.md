---
layout: page
title: "Q102926: PC DirSync: Invalid Import Filename Does Not Create Log"
permalink: kb/102/Q102926/
---

## Q102926: PC DirSync: Invalid Import Filename Does Not Create Log

	Article: Q102926
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import (IMPORT.EXE) utility included with versions 3.0 and 3.0b of Microsoft
	Mail for PC Networks includes an option to create a log of the Import process.
	If you specify an invalid path and filename, the file is not created and no
	error is given.
	
	CAUSE
	=====
	
	If you do not specify a filename, the Import utility will default to IMPORT.LOG.
	The output file is placed in the LOG directory of the Mail database. You can
	specify a directory and filename; however, if the specified directory is
	invalid, the IMPORT.EXE utility will run normally but will not create the log
	file and will not report an error.
	
	MORE INFORMATION
	================
	
	Sample Command Lines for IMPORT.EXE
	-----------------------------------
	
	Correct:
	
	  import admin -p<password> -f<filename> -l
	  import admin -p<password> -f<filename> -lm:\log\import.log
	  import admin -p<password> -f<filename> -lc:\import.log
	
	Incorrect:
	
	  import admin -p<password> -f<filename> -lm:\lgo\import.log
	
	Because LGO is not typically a valid directory in the Microsoft Mail database,
	this incorrect command line will fail.
	
	
	Additional query words: 3.00 3.00b export rebuild dirsync dir-sync directory synchronization
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
