---
layout: page
title: "Q197363: XFOR: Messages Containing .PCX Attachments May Crash CCMC"
permalink: /kb/197/Q197363/
---

## Q197363: XFOR: Messages Containing .PCX Attachments May Crash CCMC

	Article: Q197363
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages containing .pcx attachments may cause a mail backlog or crash the
	cc:Mail Connector. An error 54 will also be logged in the Windows NT Application
	Event log.
	
	CAUSE
	=====
	
	This problem is caused because the cc:Mail Connector program is incorrectly
	tagging the .pcx attachments in the message as a fax, rather than as a file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2504.0
	  Ccmsg.dll   5.5.2504.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the fix, the cc:Mail Connector no longer marks all .pcx
	attachments as Fax.
	
	Additional query words: cc:mail, crash, backlog, PCX
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
