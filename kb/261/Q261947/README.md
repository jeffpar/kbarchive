---
layout: page
title: "Q261947: XADM: How to Determine if Eseutil /p Has Been Run on a Database"
permalink: /kb/261/Q261947/
---

## Q261947: XADM: How to Determine if Eseutil /p Has Been Run on a Database

	Article: Q261947
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine if your database has been repaired by
	using the "Eseutil /p" command.
	
	MORE INFORMATION
	================
	
	To see if your database has been repaired by using the "Eseutil /p" command,
	dump the header using one of the following commands for the private information
	store:
	
	  ESEUTIL /mh x:\exchsrvr\mdbdata\priv.edb |more
	
	  -or-
	
	  ESEUTIL /mh x:\exchsrvr\mdbdata\pub.edb |more
	
	The output looks similar to the following example:
	
	  Microsoft(R) Windows NT(TM) Server Database Utilities
	  Version 5.5
	  Copyright (C) Microsoft Corporation 1991-1999. All Rights Reserved.
	
	  Initiating FILE DUMP mode...
	  Database: d:\exchsrvr\mdbdata\priv.edb
	
	  Format ulMagic: 0x89abcdef
	  Engine ulMagic: 0x89abcdef
	  Format ulVersion: 0x620,2
	  Engine ulVersion: 0x620,2
	  DB Signature: Create time:4/5/2000 17:48:52 Rand:769046 Computer:
	  cbDbPage: 4096
	  dbtime: 556457
	  State: Consistent
	  Shadowed: Yes
	  Last Objid: 184
	  Scrub Dbtime: 0
	  Scrub Date: 00/00/1900 00:00:00
	  Repair Count: 1
	  Repair Date: 2/20/2000 10:48:50
	
	If the database has not been repaired, the repair count is zero and the repair
	date is 1/1/1900 00:00.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
