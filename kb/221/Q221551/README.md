---
layout: page
title: "Q221551: XFOR: Fixed Length RFT Attachments Incorrectly Changed by OVVM"
permalink: /kb/221/Q221551/
---

## Q221551: XFOR: Fixed Length RFT Attachments Incorrectly Changed by OVVM

	Article: Q221551
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Revisable Text Format (RFT) documents that are saved in "Fixed" format will be
	unreadable when sent to Exchange Server by means of the OV/VM (PROFS) Connector.
	
	CAUSE
	=====
	
	This is because the OV/VM (PROFS) Connector incorrectly assumes that all RFT
	documents are in "Variable" format.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OV/VM (PROFS) Connector
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Lsvmhc.dll | 5.5.2567.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	If an RFT document is transferred from a personal computer into CMS and saved
	with RECFM of Variable on the CMS minidisk, stored in the OV/VM document
	database, and then sent to an Exchange Server mailbox, the document will be
	translated correctly. But if the RFT document is saved with RECFM of Fixed, then
	the document is unreadable when sent to an Exchange Server mailbox.
	
	Additional query words: RFT;document;conversion problem
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
