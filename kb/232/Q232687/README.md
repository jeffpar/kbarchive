---
layout: page
title: "Q232687: XFOR: Cannot Send Messages to cc:Mail Recipients After Dirsync"
permalink: kb/232/Q232687/
---

## Q232687: XFOR: Cannot Send Messages to cc:Mail Recipients After Dirsync

	Article: Q232687
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
	
	After you perform directory synchronization (dirsync) between Lotus cc:Mail and
	Exchange Server, you may be unable to send a Simple Mail Transfer Protocol
	(SMTP) message to a Lotus cc:Mail recipient that was exported from the cc:Mail
	post office. The message remains in the outbound message queue, which prevents
	any other messages from being sent through the Exchange Connector for Lotus
	cc:Mail.
	
	CAUSE
	=====
	
	This problem occurs when Import.exe version 8.x is running on the Exchange
	Server computer. When you send a message through the SMTP service, the reply
	address is enclosed in square brackets ([ and ]). However, Import.exe version
	8.x does not support square brackets in addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Connector for cc:Mail
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ccmc.exe  | 5.5.2584.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: unregistered export ccmc stuck stop oneoff one-off
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
