---
layout: page
title: "Q196664: XCON: MAD Consumes 100% CPU While Recalculating Routing"
permalink: kb/196/Q196664/
---

## Q196664: XCON: MAD Consumes 100% CPU While Recalculating Routing

	Article: Q196664
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
	
	An Administrator attempts to recalculate routing, but the action never finishes.
	The Mad.exe process is seen to be using approximately 100% of the CPU.
	
	CAUSE
	=====
	
	A logic error in the code which generates an ELSE leg of the Gateway Routing
	Table (GWART) causes the recalculation to loop.
	
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
	  Dbserver.sch   5.5.2510.0
	  Dcprods.cat    5.5.2510.0
	  Ems_rid.dll    5.5.2510.0
	  Emsmta.exe     5.5.2510.0
	  Info4log.cfg   5.5.2510.0
	  Infoblog.cfg   5.5.2510.0
	  Infodlog.cfg   5.5.2510.0
	  Infollog.cfg   5.5.2510.0
	  Infotlog.cfg   5.5.2510.0
	  Mtacheck.exe   5.5.2510.0
	  Mtamsg.dll     5.5.2510.0
	  P2.xv2         5.5.2510.0
	  X400om.dll     5.5.2510.0
	  X400omv1.dll   5.5.2510.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: RID GWART
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
