---
layout: page
title: "Q171351: Loopback Send/Receive Over IPX/SPX May Not Work Under Stress"
permalink: kb/171/Q171351/
---

## Q171351: Loopback Send/Receive Over IPX/SPX May Not Work Under Stress

	Article: Q171351
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, the IPX/SPX-compatible protocol (NWLINK) may not successfully
	send and receive data under the following conditions:
	
	- The same computer is both the sender and receiver of the data.
	
	- A large amount of data is being sent in a continuous stream.
	
	- The network adapter (NDIS) driver does not provide loopback functionality.
	
	Symptoms of this problem may include:
	
	- The data transfer never finishes. This is the most common symptom.
	
	
	- The computer may restart. This occurs rarely, and only if a large block of
	  data is being transferred.
	
	
	- The computer may stop responding (hang), requiring a cold boot (power- off or
	  reset). This occurs rarely, and only if a large block of data is being
	  transferred.
	
	
	CAUSE
	=====
	
	Loopback packets (in which the source and destination addresses are the same)
	are not recognized and handled internally by NWLINK. Instead, they are passed to
	the network adapter driver. If the network adapter driver does not recognize and
	handle loopback packets, the packet is sent out on the network wire. Under
	continuous stress of this type, and under certain timing conditions, the
	symptoms listed above may occur.
	
	RESOLUTION
	==========
	
	This condition may occur when you are running a program designed to test data
	throughput over IPX/SPX (including WinSock over IPX/SPX). We recommend that such
	tests be conducted between two separate computers, instead of on one computer in
	loopback mode. This not only avoids the problems mentioned here, but also
	returns more meaningful results.
	
	You can also work around this problem by using a network adapter driver that
	handles loopback packets internally without transmitting them on the network
	medium. For information about whether a particular network adapter driver
	handles loopback packets internally, contact the vendor of your network
	adapter.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about issues related to loopback operations with
	NWLINK, please see the following articles in the Microsoft Knowledge Base:
	
	
	
	  Q127054 Loopback Functionality Does Not Work with Miniport Drivers
	
	  Q124648 DC21040 Causes Windows NT 3.5 to Stop Responding (Hang)
	
	
	======================================================================
	Keywords          : kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
