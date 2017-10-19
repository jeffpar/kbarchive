---
layout: page
title: "Q200401: SMS: Remote Control Uses TCP Instead of UDP"
permalink: /kb/200/Q200401/
---

## Q200401: SMS: Remote Control Uses TCP Instead of UDP

	Article: Q200401
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 1.2 uses User Datagram Protocol (UDP) for socket-based
	Remote Control sessions. UDP is a datagram-based protocol. It is an unreliable,
	or best-effort protocol that does not verify that packets are not received out
	of order, lost, or corrupted. Consequently, UDP-based Remote Control was prone
	to connectivity problems.
	
	With Systems Management Server 2.0, socket-based Remote Control now uses
	Transmission Control Protocol (TCP). TCP is a stream-oriented protocol. TCP
	breaks the transmission into smaller sizes, retransmits lost packets, reorders
	out of order packets, and filters any extra packets that might occur if the
	transmission is faulty. Consequently, TCP is more reliable than UDP.
	
	Remote Control performance across a wide area network (WAN) is improved in
	Systems Management Server 2.0 over 1.x when using sockets-based Remote Control
	because routers tend to give TCP packets a higher priority for transmission.
	
	Additional query words: prodsms ulitizes rc32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
