---
layout: page
title: "Q229643: XCON: 9156 Errors Occur After Applying Exchange 5.5 SP2"
permalink: /kb/229/Q229643/
---

## Q229643: XCON: 9156 Errors Occur After Applying Exchange 5.5 SP2

{% raw %}

	Article: Q229643
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 for Exchange Server 5.5, the following error
	messages may be found in the Event Viewer application log:
	
	  Event ID: 9156
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Resource
	  Description: A resource limit has been reached while attempting to open an
	  association. There are no free control blocks available for network type 1.
	  The configured count is 40. [BASE IL MAIN BASE 1 282] (10)
	
	After you receive this error message, the message transfer agent (MTA) may stop
	processing messages and require a restart of the service to get mail flowing
	again.
	
	CAUSE
	=====
	
	The MTA leaks control blocks. Under stress, or slow link conditions, this
	problem becomes apparent.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2590.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2590.0 | 
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
	| Mtacheck.exe | 5.5.2590.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2590.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2590.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2590.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The MTA uses one control block (CB) for each association (whether remotely or
	locally initiated). It also uses one CB to listen for incoming associations.
	
	The problem occurs when an association is active and waiting for a response to a
	Turn-Please Request, and the remote side sends an association recovery inbound.
	Because the association is still active, recovery handling does not work
	properly, and the upper layer CBs for the association are released (and
	eventually reused by other associations) while the lower layers remain unaware
	of this fact.
	
	Later, the lower layers get closed down and POP-4 sends a Close Request up to the
	Platform Kernel CB, which is now used by some other association. The Close
	Request is ignored so no Close Response is sent back and so the POP-4 CB is not
	closed down properly (or leaked).
	
	Much later on, an Open Request comes down from Platform from a Kernel CB, which
	matches the old partner of the leaked POP-4 CB. This causes the Open Request to
	be ignored by POP-4 as a Duplicate Open. The Open Request then gets passed on to
	the Winsock layer by the Base Open handling and is logged as a 9156 error.
	
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q193894 XCON: MTA Stops Processing Messages and Generates 9156 Events
	
	  Q166602 XCON: MTA Only Allows 64 TCP/IP or TP4 Connections
	
	Additional query words: 9156 restart mta exchange bridgehead slow link
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
