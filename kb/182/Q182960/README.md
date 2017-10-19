---
layout: page
title: "Q182960: XADM: Using EDBUTIL to Determine Which Logs Have Been Committed"
permalink: /kb/182/Q182960/
---

## Q182960: XADM: Using EDBUTIL to Determine Which Logs Have Been Committed

	Article: Q182960
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine which log files have been committed to the Priv.edb, Pub.edb, or
	Dir.edb file, you can use the EDBUTIL Utility to view the contents of the
	Edb.chk file.
	
	MORE INFORMATION
	================
	
	To dump the file to screen, perform an EDBUTIL /MK d:\EXCHSRVR\*\EDB.CHK | MORE
	where "d" is the drive letter and "*" denotes the appropriate directory (MDBDATA
	for the information store or DSADATA for the directory).
	
	The following information will be displayed:
	
	Microsoft(R) Exchange Server Database Utilities
	
	Version 5.0
	
	Copyright (C) Microsoft Corporation 1991-1996.  All Rights Reserved.
	
	Initiating FILE DUMP mode...
	     Checkpoint file: d:\exchsrvr\mdbdata\edb.chk
	
	     LastFullBackupCheckpoint (23,2112,6)
	     Checkpoint (45,451,20)
	     FullBackup (23,2112,6)
	     FullBackup time:3/6/1998 12:35:44
	     IncBackup (0,0,0)
	     IncBackup time:0/0/1900 0:0:0
	     Signature: Create time:2/27/1998 13:52:33 Rand:24842 Computer:
	     Env (Session, Opentbl, VerPage, Cursors, LogBufs, LogFile, Buffers)
	         (     68,    3400,    1440,    3400,      84,   10240,    2400)
	
	Operation completed successfully in 0.594 seconds.
	
	Take the first number (A) in the parentheses (A,B,C) for the Checkpoint field and
	convert it to hexadecimal. The hex number will be the file name of the first
	uncommitted log for the appropriate set of logfiles.
	
	Example:
	
	  Checkpoint (45,451,20) = EDB0002D.LOG
	
	This syntax applies for most other fields in the dump (LastFullBackupCheckpoint,
	FullBackup, IncBackup, and so on).
	
	Additional query words: CHK
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
