---
layout: page
title: "Q232713: XCON: Message Arrives with Blank To and From Fields"
permalink: /kb/232/Q232713/
---

## Q232713: XCON: Message Arrives with Blank To and From Fields

{% raw %}

	Article: Q232713
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
	
	An Exchange Server user receives a message in his or her Inbox, but the From and
	To fields are blank.
	
	CAUSE
	=====
	
	This behavior occurs in the following very specific scenario:
	
	1. An Outlook user on Exchange Server sends a message with an attachment to an
	  X.400 custom recipient through an X.400 Connector on which the "Remote
	  clients support Mapi" option is selected.
	
	2. The message arrives on a MARBEN X400 MTA and is read by a Microsoft Mail user
	  connected directly to the MARBEN server through a MAPI transport developed by
	  MARBEN.
	
	3. The MS Mail user reads the message then forwards it to an Outlook user on
	  Exchange Server.
	
	4. The message is delivered in the correct mailbox, but when the Outlook user
	  opens the message, the From and To fields are blank.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
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
	| Ems_rid.dll  | 5.5.2623.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2623.0 | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
	+---------------------------+
	| Infoblog.cfg | N/A        | 
	+---------------------------+
	| Infodlog.cfg | N/A        | 
	+---------------------------+
	| Infollog.cfg | N/A        | 
	+---------------------------+
	| Infoplog.cfg | N/A        | 
	+---------------------------+
	| Infotlog.cfg | N/A        | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2623.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2623.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2623.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2623.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: TNEF
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
