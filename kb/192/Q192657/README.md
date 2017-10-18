---
layout: page
title: "Q192657: XADM: Missing Transaction Log Yields &quot;Unable to Find the File&quot;"
permalink: kb/192/Q192657/
---

## Q192657: XADM: Missing Transaction Log Yields &quot;Unable to Find the File&quot;

	Article: Q192657
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you restore Microsoft Exchange Server from a tape backup and a required
	transaction log file is missing, the following error message is logged when you
	try to restart the server:
	
	  EventID:  1080
	  Source:   MSExchangeIS
	  Type:     Error
	  Category: Recovery
	  Description:
	  Unable to recover the database because error 0xc8000713 occurred after a
	  restore operation. Unable to find the file.
	
	CAUSE
	=====
	
	The event logged is accurate (a file is missing), but the Event ID 1080 message
	does not indicate which file is missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: ESE
	
	  File Name     Version
	  -----------------------
	  Ese.dll       5.5.2389.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	Ese.dll was changed to produce a more descriptive error message. After applying
	this hotfix, the following new error message will be seen:
	
	  EventID:  199
	  Source:   ESE97
	  Type:     Error
	  Category: Logging/Recovery
	  Description:
	  ((144) ) Transaction log file gap in sequence detected. Log file
	  Edb0000e.log and possibly subsequent log files are missing.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
