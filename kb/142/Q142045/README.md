---
layout: page
title: "Q142045: Remote Control Fails Over IPX Token-Ring Wide Area Network"
permalink: /kb/142/Q142045/
---

## Q142045: Remote Control Fails Over IPX Token-Ring Wide Area Network

	Article: Q142045
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ACC Nile router (with no filtering) is running IPX over a token-ring network
	(a non-NetWare network). Both a Systems Management Server and a Windows for
	Workgroups computer are using the IPX/SPX compatible transport protocol (NWLink)
	to communicate. However, if a Windows for Workgroups computer is not on the same
	ring as the Systems Management Server, remote control does not work. The Windows
	for Workgroups computer can properly connect to computers on the same, far side
	of the router, but cannot connect to computers across the router.
	
	NOTE: Although this article mentions an ACC Nile router running IPX over token
	ring, this symptom also applies to other routers.
	
	CAUSE
	=====
	
	This problem occurs because the Windows for Workgroups computer is not
	responding to the NBIPX Find Name requests sent by the Systems Management Server
	across the router. The Systems Management Server is not able to remote control
	or connect to the Windows for Workgroups computer.
	
	RESOLUTION
	==========
	
	To correct this problem, use an ACC Nile router command that changes the IPX
	network functional address to FFFFFFFFFFFF from the default token-ring address
	of C00000800000. The default address that the router port uses to send IPX
	broadcast packets in an ethernet network is FFFFFFFFFFFF.
	
	MORE INFORMATION
	================
	
	On the same side of the router, the Systems Management Server sends a request
	packet using the MAC destination address of FFFFFFFFFFFF to a Windows for
	Workgroups computer. However, the Systems Management Server across the router
	sends the MAC destination address of C00000800000, which the Windows for
	Workgroups computer on the other side of the router ignores. A Windows 95
	computer accepts either one of addresses.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
