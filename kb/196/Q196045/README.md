---
layout: page
title: "Q196045: XCON: DRAS Connector Fails Connecting to Multiple Sites"
permalink: kb/196/Q196045/
---

## Q196045: XCON: DRAS Connector Fails Connecting to Multiple Sites

	Article: Q196045
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Dynamic RAS (DRAS) connector to connect to more than one remote
	site, the Microsoft Exchange Mail Transfer Agent (MTA) may stop responding
	(hang) and mail to the remote sites will not be delivered. This behavior may be
	accompanied by Event ID 51 messages in the Windows NT Application Event Log.
	
	Note that a DRAS connector to just one site does not exhibit the problem.
	
	CAUSE
	=====
	
	The synchronizationTable index for RAS threads was incorrect. Two RAS threads
	being started at the same time could potentially access the same RAS table index
	causing problems at different layers of the message transfer agent (MTA) stack.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2419.0
	  Dcprods.cat    5.5.2419.0
	  Ems_rid.dll    5.5.2419.0
	  Emsmta.exe     5.5.2419.0
	  Info4log.cfg   5.5.2419.0
	  Infodlog.cfg   5.5.2419.0
	  Infollog.cfg   5.5.2419.0
	  Infotlog.cfg   5.5.2419.0
	  Mtacheck.exe   5.5.2419.0
	  Mtamsg.dll     5.5.2419.0
	  P2.xv2         5.5.2419.0
	  X400om.dll     5.5.2419.0
	  X400omv1.dll   5.5.2419.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
