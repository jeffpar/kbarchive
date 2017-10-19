---
layout: page
title: "Q196669: XCON: MTA Queue Length Can Show More Messages than in Queue"
permalink: /kb/196/Q196669/
---

## Q196669: XCON: MTA Queue Length Can Show More Messages than in Queue

	Article: Q196669
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) queue displayed in
	the Exchange Server Administrator program does not agree with the queue length
	displayed in Performance Monitor queue length for a specific connection
	instance.
	
	CAUSE
	=====
	
	The MTA is failing to update the Performance Monitor queue length for a
	MSExchangeMTA Connections Instance when you delete an object in the Exchange
	Server Administrator program MTA queue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2500.0
	  Dcprods.cat    5.5.2500.0
	  Ems_rid.dll    5.5.2500.0
	  Emsmta.exe     5.5.2500.0
	  Info4log.cfg   5.5.2500.0
	  Infodlog.cfg   5.5.2500.0
	  Infollog.cfg   5.5.2500.0
	  Infotlog.cfg   5.5.2500.0
	  Mtacheck.exe   5.5.2500.0
	  Mtamsg.dll     5.5.2500.0
	  P2.xv2         5.5.2500.0
	  X400om.dll     5.5.2500.0
	  X400omv1.dll   5.5.2500.0
	
	
	
	
	WORKAROUND
	==========
	
	The queue length can be reset to the correct number by restarting the MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
