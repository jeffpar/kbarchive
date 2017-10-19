---
layout: page
title: "Q232586: XCON: X.400 MTA Logs &quot;Loop Detected&quot; Error Message"
permalink: /kb/232/Q232586/
---

## Q232586: XCON: X.400 MTA Logs &quot;Loop Detected&quot; Error Message

	Article: Q232586
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
	
	In some cases, a third-party X.400 message transfer agent (MTA) may log an error
	message similar to "Loop detected" when it receives a message from Exchange
	Server. The originator of the message will receive a non-delivery report (NDR).
	
	This behavior only occurs under very specific circumstances:
	
	- A message is sent from Exchange Server using the X.400 Connector. The
	  recipients in the message are taken from the user's Personal Address Book
	  (PAB) or are one-off addresses. At the same time, custom recipients exist for
	  these addresses in the Exchange Server global address list.
	
	- The message may contain multiple trace records in the X.400 P1 message
	  header, which are marked as "rerouted." This may cause the receiving MTA to
	  think there is a message loop.
	
	- The number of trace records in the P1 message header depends on the number of
	  recipients addressed. For example, if the message was sent to three
	  recipients, there will be three trace records.
	
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
	| Ems_rid.dll  | 5.5.2621.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2621.0 | 
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
	| Mtacheck.exe | 5.5.2621.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2621.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2621.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2621.0 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: word-wrap truncated deleted
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
