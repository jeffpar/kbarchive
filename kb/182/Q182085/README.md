---
layout: page
title: "Q182085: XCON: MTA Fails with 9405 Error Queue-Desc-Object (ID1)"
permalink: kb/182/Q182085/
---

## Q182085: XCON: MTA Fails with 9405 Error Queue-Desc-Object (ID1)

	Article: Q182085
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Microsoft Exchange Message Transfer Agent (MTA), the
	service may fail to start and the following error message appears in the Windows
	NT Application Log:
	
	  Event ID: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Queue-Desc-Object (ID 1) not found. [BASE MAIN BASE 1] (16)
	
	Additionally, running MTACHECK against the \mtadata directory will fail with a
	similar error message:
	
	  Error in Queue-Desc-Object (ID 1) initialization
	  Database contains serious errors and cannot be automatically repaired.
	
	CAUSE
	=====
	
	This error occurs when the file DB000001.DAT is missing from the
	exchsrvr\mtadata directory on the affected Exchange Server computer. Reasons for
	this file being lost are usually user intervention, file corruption, or hard
	disk corruption. This results in Windows NT automatically running a CHKDSK
	during the next startup and the corrupt file being deleted.
	
	WORKAROUND
	==========
	
	The MTADATA directory needs to be rebuilt. Consult the following Microsoft
	Knowledge Base article on rebuilding the MTADATA directory:
	
	  Q162384 XCON: How to Troubleshoot MTA Starting Failures
	
	MORE INFORMATION
	================
	
	Because DB000001.DAT is one of the MTA core static data files, it cannot just be
	copied from the Exchange Server CD-ROM. If DB000001.DAT is copied from the
	Exchange Server CD-ROM and the MTA is restarted, message data loss may occur.
	
	Additional query words: exception emsmta dat
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
