---
layout: page
title: "Q193221: XADM: Per-Entity MTA Counters Not Working After Upgrade"
permalink: kb/193/Q193221/
---

## Q193221: XADM: Per-Entity MTA Counters Not Working After Upgrade

	Article: Q193221
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55 exc55sp1
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to monitor the throughput of a system, the
	following counters do not work when you upgrade a server from Exchange Server
	version 4.0:
	
	- Receive msgs/sec
	
	- Send msgs/sec
	
	- Receive bytes/sec
	
	- Send bytes/sec
	
	CAUSE
	=====
	
	This issue is caused by a bug introduced in the message transfer agent (MTA) in
	versions 5.0 and 5.5.
	
	RESOLUTION
	==========
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2331.0
	  Dcprods.cat    5.5.2331.0
	  Ems_rid.dll    5.5.2331.0
	  Emsmta.exe     5.5.2331.0
	  Info4log.cfg   5.5.2331.0
	  Infodlog.cfg   5.5.2331.0
	  Infollog.cfg   5.5.2331.0
	  Infotlog.cfg   5.5.2331.0
	  Mtacheck.exe   5.5.2331.0
	  Mtamsg.dll     5.5.2331.0
	  P2.xv2         5.5.2331.0
	  X400om.dll     5.5.2331.0
	  X400omv1.dll   5.5.2331.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 2.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.0,5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
