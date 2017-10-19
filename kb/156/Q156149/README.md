---
layout: page
title: "Q156149: MSDLC32 May Not Receive All Packets in Heavy Traffic"
permalink: /kb/156/Q156149/
---

## Q156149: MSDLC32 May Not Receive All Packets in Heavy Traffic

	Article: Q156149
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs using the Microsoft 32-bit DLC protocol may not be able to connect to
	the host over the network, especially when first starting up.
	
	CAUSE
	=====
	
	If the client receives a large number of DLC packets in an extremely short
	period of time, the MSDLC32 protocol may be unable to dynamically allocate
	additional buffers quickly enough to successfully receive all incoming packets.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	When MSDLC32 initializes, it allocates a certain number of buffers
	(specifically, Read CCB2 buffers) for incoming DLC packets. Over time, as
	additional buffers are needed, they are allocated dynamically. In the original
	release of MSDLC32, the initial number of Read CCB2 buffers allocated is 16. In
	this update, that number is increased to 64. By allocating more buffers
	initially, the buffers are available to be used immediately, without the delay
	incurred with dynamic allocation. Additional buffers are dynamically allocated
	later as needed.
	
	This problem may occur in an environment using multiple DLC hosts with multiple
	routes to each host. In such environments, a very large number of packets may be
	received by the client nearly simultaneously in response to a single query.
	Under such high-stress situations, packets could be dropped during the time new
	buffers are being allocated to receive them.
	
	This problem is more likely to occur when first starting a DLC session, because
	the buffer pool typically grows during the course of normal usage to be
	sufficient to accommodate surges in received packets.
	
	Additional query words: attachmate 3270 sna
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
