---
layout: page
title: "Q194750: XCON: Message Sticks in MTA Queue While Other Messages Flow By"
permalink: kb/194/Q194750/
---

## Q194750: XCON: Message Sticks in MTA Queue While Other Messages Flow By

	Article: Q194750
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you observe the message transfer agent (MTA) queues, a message may get
	stuck in the queue as other messages flow around this message. If the MTA is
	stopped and restarted, the message is delivered without error. Also, changing
	the priority of the message may also cause the message to be delivered.
	
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
	  Dbserver.sch   5.5.2427.0
	  Dcprods.cat    5.5.2427.0
	  Ems_rid.dll    5.5.2427.0
	  Emsmta.exe     5.5.2427.0
	  Info4log.cfg   5.5.2427.0
	  Infodlog.cfg   5.5.2427.0
	  Infollog.cfg   5.5.2427.0
	  Infotlog.cfg   5.5.2427.0
	  Mtacheck.exe   5.5.2427.0
	  Mtamsg.dll     5.5.2427.0
	  P2.xv2         5.5.2427.0
	  X400om.dll     5.5.2427.0
	  X400omv1.dll   5.5.2427.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	This behavior may be observed in environments where the Exchange Server computer
	is located on a network where the transport is very fast, and the Exchange
	Server computer is under a very high load. The following example may help:
	
	- Server1 and Server2 are two Exchange Server computers in the same site.
	
	- Server1 has messages in the MTA queue destined for Server2.
	
	The Server1 MTA connects to the Server2 MTA and begins to transfer mail. When
	this problem occurs, Server1 receives a response from the Server2 MTA to start
	sending the next message, but Server2 does not have control back from the
	Outbound RPC request. This causes Server1 to begin sending the next message
	before Server2 is ready. In this state, the message becomes stuck, and waits in
	the queue until it times out and is resent. Also, when Server1 queues back up
	enough that the threshold is reached, it spawns a second thread that connects to
	Server2 again on a different control block. This allows messages to flow around
	the message that appears stuck in the queue. This condition is a rare occurrence
	and this can only happen when the network transport is fast enough for this
	timing issue to be exposed.
	
	Additional query words: route failure backups stalled stall build
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
