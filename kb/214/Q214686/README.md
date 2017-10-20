---
layout: page
title: "Q214686: XCON: MTA PerfMon Counters Continue to Count When 0 Messages"
permalink: /kb/214/Q214686/
---

## Q214686: XCON: MTA PerfMon Counters Continue to Count When 0 Messages

{% raw %}

	Article: Q214686
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	NEEDS SP1/2 IN APPLIES TO
	
	
	SYMPTOMS
	========
	
	When you use the Windows NT Performance counters for the MSExchangeMTA object
	with Oldest Message Queued counter and a specific instance, the counter may
	indicate a lapsed time for a queue that has no messages currently waiting.
	
	CAUSE
	=====
	
	The Microsoft Exchange message transfer agent (MTA) may not properly update the
	counter when the MTA is started, or after the last message has been deleted.
	
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
	| Dbserver.sch | 5.5.2510.0 | 
	+---------------------------+
	| Dcprods.cat  | 5.5.2510.0 | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2510.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2510.0 | 
	+---------------------------+
	| Info4log.cfg | 5.5.2510.0 | 
	+---------------------------+
	| Infodlog.cfg | 5.5.2510.0 | 
	+---------------------------+
	| Infollog.cfg | 5.5.2510.0 | 
	+---------------------------+
	| Infotlog.cfg | 5.5.2510.0 | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2510.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2510.0 | 
	+---------------------------+
	| P2.xv2       | 5.5.2510.0 | 
	+---------------------------+
	| X400om.dll   | 5.5.2510.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2510.0 | 
	+---------------------------+
	
	The fix can be applied to computers running Exchange Server 5.5 Service Pack 2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5, 5.5 Service Pack 1, and 5.5 Service Pack 2. This problem was first
	corrected in Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install Exchange Server 5.5, and send no messages.
	
	2. Start Performance Monitor, and select the MSExchangeMTA Connections object,
	  the Microsoft Private MDB instance, and Oldest Message Queued counter.
	
	-or-
	
	1. Start the MTA with a connector in which no messages are queued or to which no
	  messages will be routed.
	
	2. Start Performance Monitor, and select the MSExchangeMTA Connections object,
	  the <connector in step 1> the connector instance, and Oldest Message
	  Queued counter.
	
	The server will show a time elapsing for every queue without a message that has
	not experienced any message flow since the MTA has started.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
