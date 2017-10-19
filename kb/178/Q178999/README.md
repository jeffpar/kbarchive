---
layout: page
title: "Q178999: XADM: Online Backup Fails with -1811 Errors"
permalink: /kb/178/Q178999/
---

## Q178999: XADM: Online Backup Fails with -1811 Errors

	Article: Q178999
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Online backup may fail with a -1811 error. More specifically, either the
	directory or the information store cannot be backed up.
	
	CAUSE
	=====
	
	A backup has failed previously for an unknown reason, and now a patch file is
	resident in either the dsadata directory or mdbdata directory.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Stop the Exchange Services.
	
	2. Back up the Exchange Server data.
	
	3. Remove all files from the dsadata directory or mdbdata directory on all
	  drives, except for the database file.
	
	4. Restart the Exchange Services.
	
	5. Attempt an online backup.
	
	MORE INFORMATION
	================
	
	You may also see these events:
	
	  ID: 15
	  Source: EDB
	  Description:  MSExchangeIS, 329, the database engine has stopped the
	  backup with error -1811.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
