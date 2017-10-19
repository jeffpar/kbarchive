---
layout: page
title: "Q184578: XADM: Online Backup Fails to Remove Log Files"
permalink: /kb/184/Q184578/
---

## Q184578: XADM: Online Backup Fails to Remove Log Files

	Article: Q184578
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The log files are usually deleted after you perform a full online backup. If the
	log files fail to be deleted, check the Application event log and look for the
	following event:
	
	  Event ID: 61
	  Source:   EDB
	  Type:     Error
	  Category: Logging/Recovery
	
	  Description: MSExchangeIS ((275) ) Unable to write a shadowed
	  header for file d:\exchsrvr\MDBDATA\edb.chk.
	
	CAUSE
	=====
	
	The problem occurs and the event is written in the event log because there is
	corruption in the .chk file.
	
	
	WORKAROUND
	==========
	
	To work around the problem, use the following steps:
	
	1. Stop all of the Exchange services.
	
	2. Move the .chk file out of the Mdbdata directory.
	
	3. Restart the services.
	
	Performing these steps causes the information store to play through all of the
	log files and then create a new .chk file. When the steps have been completed,
	perform a full online backup and the log files will be deleted.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q177773 XADM: Log Files Not Deleted After Full Backup
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
