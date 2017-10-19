---
layout: page
title: "Q195200: XADM: Premature MTA Fanout Inside a Site"
permalink: /kb/195/Q195200/
---

## Q195200: XADM: Premature MTA Fanout Inside a Site

	Article: Q195200
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Inside a multi-server site, a server may send multiple copies of a message to
	the bridgehead server. This may occur in the case of a multi-recipient message
	and a multi-connector bridgehead server: recipients being served by a different
	connector.
	
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
	  Dbserver.sch   5.5.2436.0
	  Dcprods.cat    5.5.2436.0
	  Ems_rid.dll    5.5.2436.0
	  Emsmta.exe     5.5.2436.0
	  Info4log.cfg   5.5.2436.0
	  Infodlog.cfg   5.5.2436.0
	  Infollog.cfg   5.5.2436.0
	  Infotlog.cfg   5.5.2436.0
	  Mtacheck.exe   5.5.2436.0
	  Mtamsg.dll     5.5.2436.0
	  P2.xv2         5.5.2436.0
	  X400om.dll     5.5.2436.0
	  X400omv1.dll   5.5.2436.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	Only one copy of such a message should be relayed inside the site until the
	message reaches the bridgehead server. It is then the bridgehead server's role
	to make copies for the different connectors.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
