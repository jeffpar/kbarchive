---
layout: page
title: "Q196663: XCON: MTA Unable to Deliver NDR When Message Fails"
permalink: /kb/196/Q196663/
---

## Q196663: XCON: MTA Unable to Deliver NDR When Message Fails

{% raw %}

	Article: Q196663
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server 5.5 does not deliver the non-delivery report (NDR) to
	the original sender of the message if it encounters a message size limit on
	another server's message transfer agent (MTA) in certain circumstances.
	
	CAUSE
	=====
	
	The receiving server will generate a NDR for the message and send the report to
	the sending server, which will attempt to reroute the message after triggering
	the routing restricted value, eventually failing, and is then unable to complete
	delivery.
	
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
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: rerouting failing
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
