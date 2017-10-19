---
layout: page
title: "Q130651: PC-NFS and Client for Microsoft Networks Cannot Connect"
permalink: /kb/130/Q130651/
---

## Q130651: PC-NFS and Client for Microsoft Networks Cannot Connect

	Article: Q130651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95 computer running SunSoft's PC-NFS version 5.x and the Microsoft
	Client for Microsoft Networks may not be able to see shared resources on a
	PC-NFS server or an SMB server running the NetBEUI protocol.
	
	CAUSE
	=====
	
	This problem occurs because of a conflict between the NDISHLP.SYS driver used by
	VREDIR and the PCNFS.SYS driver supplied by SunSoft for their PC-NFS client. The
	conflict causes network packets to be forwarded incorrectly, so no packets are
	broadcast on the network.
	
	This problem affects only certain PCMCIA and Cabletron network adapters. The
	following network adapters are known to exhibit this behavior:
	
	- Xircom PCMCIA network adapters
	
	- IBM Ethernet PCMCIA network adapters
	
	- Cabletron Ethernet network adapters
	
	
	STATUS
	======
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
