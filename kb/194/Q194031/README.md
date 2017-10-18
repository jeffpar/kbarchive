---
layout: page
title: "Q194031: XCON: MTA Queues Backup After MTA Logs 1133 State Check Warning"
permalink: kb/194/Q194031/
---

## Q194031: XCON: MTA Queues Backup After MTA Logs 1133 State Check Warning

	Article: Q194031
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Service Pack 1 for Microsoft Exchange Server 5.5, the Exchange
	Server message transfer agent's (MTA) queues may grow, and no messages will be
	delivered. If the priority of the messages in the queue is increased, or the MTA
	service is stopped and restarted, the queues may flush the messages. The
	following warnings will be logged in the event viewer:
	
	  Event: 1133
	  Source: MSExchangeMTA
	  Type: Warning
	  Catergory: X.400 Service
	  Description: A reliable transport service element (RTSE) error occurred
	  while processing an association with /O=ORGANIZATION/OU=SITE
	  /CN=CONFIGURATION/CN=CONNECTIONS/CN=X.400 CONNECTOR. The association
	  will be terminated and restarted if necessary. Current state 25.
	  Service type 5. Service flavor 20. Control block index 2004. [PLATFORM
	  RTSE 32 164] (12)
	
	  Event: 1293
	  Source: MSExchangeMTA
	  Type: Warning
	  Catergory: X.400 Service
	  Description: A remotely-initiated association from /O=ORGANIZATION
	  /OU=SITE/CN=CONFIGURATION/CN=CONNECTIONS/CN=X.400 CONNECTOR was
	  refused. The failure reason provider is 0 and the reason is 0. Control
	  block index 10. Type 1. [PLATFORM KERNEL 28 128] (12)
	
	CAUSE
	=====
	
	This is caused by a logic error in the Reliable Transfer Service Element (RTSE)
	connection recovery mechanism.
	
	
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
	  Dbserver.sch   5.5.2410.0
	  Dcprods.cat    5.5.2410.0
	  Ems_rid.dll    5.5.2410.0
	  Emsmta.exe     5.5.2410.0
	  Info4log.cfg   5.5.2410.0
	  Infodlog.cfg   5.5.2410.0
	  Infollog.cfg   5.5.2410.0
	  Infotlog.cfg   5.5.2410.0
	  Mtacheck.exe   5.5.2410.0
	  Mtamsg.dll     5.5.2410.0
	  P2.xv2         5.5.2410.0
	  X400om.dll     5.5.2410.0
	  X400omv1.dll   5.5.2410.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	
	Additional query words: crash route failure backups stalled stall
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
