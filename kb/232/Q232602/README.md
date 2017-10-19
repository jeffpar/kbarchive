---
layout: page
title: "Q232602: XCON: MTA Fails to Recover Associations After Network Problems"
permalink: /kb/232/Q232602/
---

## Q232602: XCON: MTA Fails to Recover Associations After Network Problems

	Article: Q232602
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
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may stop processing
	messages following disruption of network service and generates events similar to
	the following:
	
	  Event ID: 4284
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  Description: An error has occurred during connection/disconnection. Error
	  code=8511 [POP4 POP4 DOWN 4 179] (14)
	
	  Event ID: 4287
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  Description: An internal MTA error occurred. Contact Microsoft Product Support
	  Services. Error code=8640 [POP4 POP4 DOWN4 18] (14)
	
	  Event ID: 2035
	  Category: X.400 Service
	  Description: Lost connections to locality 0 (BASE POP4 DOWN(6)
	
	  Event ID: 1209
	  Category: X.400 Service
	  Description: Session error, invalid source LPI on received message. Invalid
	  LPI is 1-16-64 (PLATFORM KERNEL(19) Proc 62)
	
	After network connectivity is restored, the MTA may fail to resume message
	processing until the MTA service is restarted.
	
	CAUSE
	=====
	
	If your Exchange Server computer encounters a network disconnection or
	disruption while there are messages queued in the MTA for delivery, the MTA may
	fail to properly recover active associations.
	
	The time interval "n," in seconds, between the logged errors is equal to the
	number of seconds set in the X.400 Connector. To check this setting, open the
	property pages of the X.400 Connector, select the Override tab, in the
	Connection Retry Values frame, and read the Open Interval (sec) setting.
	
	As mail is queued to go across the WAN link, the X.400 Connector attempts to
	re-establish the connection every n seconds. Because the WAN connection is down,
	the MTA transport is not available; the MTA is logging these two events.
	
	These errors may also be caused by intermittent network problems such as a WAN
	connection being temporarily down. This does not necessarily indicate a problem
	with Exchange Server or the MTA.
	
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
	| Ems_rid.dll  | 5.5.2614.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2614.0 | 
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
	| Mtacheck.exe | 5.5.2614.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2614.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2614.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2614.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	MORE INFORMATION
	================
	
	After the fix is applied, association recovery should occur as expected and
	messages should flow after the network is restored.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175354 XCON: Repeated Event IDs, 4284, and 4287, Indicate Network Problem
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
