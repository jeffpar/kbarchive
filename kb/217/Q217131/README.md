---
layout: page
title: "Q217131: XCON: Link Remains Up After Urgent Message Overrides Schedule"
permalink: /kb/217/Q217131/
---

## Q217131: XCON: Link Remains Up After Urgent Message Overrides Schedule

	Article: Q217131
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server Version 5.5 Service Pack 1 introduced the ability to
	send an Urgent priority message over a scheduled link (X.400 or Dynamic RAS
	Connector) even if the schedule says that the link is closed. If a user sends an
	Urgent message over such a closed link, the message will be sent, but the link
	will then remain open instead of being closed when the association timeout
	expires (default 300s). This only happens if there is at least one low- or
	normal-priority message in the queue when the urgent message is sent; if the
	queue is empty, the link will be closed when the association times out.
	
	CAUSE
	=====
	
	The Message Transfer Agent (MTA) incorrectly assumed that as there were messages
	queued, the association timeout should be renewed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2555.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2555.0 | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
	+---------------------------+
	| Infoblog.cfg | N/A        | 
	+---------------------------+
	| Infodlog.cfg | N/A        | 
	+---------------------------+
	| Infollog.cfg | N/A        | 
	+---------------------------+
	| Infotlog.cfg | N/A        | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2555.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2555.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2555.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2555.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Packs 1 and 2. This problem was first corrected in Exchange
	Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
