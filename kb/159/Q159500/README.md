---
layout: page
title: "Q159500: Using DLC and IPX Protocols May Corrupt Incoming Packets"
permalink: /kb/159/Q159500/
---

## Q159500: Using DLC and IPX Protocols May Corrupt Incoming Packets

	Article: Q159500
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use DLC and NWLINK protocols on Windows NT Server version 3.51,
	incoming DLC packets may become corrupted. The problem was observed on a
	multiprocessor IBM 720 computer with an IBM PCI ETHERNET adapter running Windows
	NT Server version 3.51 Service Pack 4, SNA Server and SMS 1.1.
	
	CAUSE
	=====
	
	In this case, SMS was generating local traffic (sending and receiving frames to
	itself) using UNC name over NWlink protocol. NWLink depends on the NDIS Wrapper
	or the NDIS MAC driver to provide loopback functionality. Consequently, frames
	are sent out on the wire and then received back in. Occasionally, under stress,
	incoming DLC frames were getting corrupted by the loopback nwlink data frames.
	
	RESOLUTION
	==========
	
	To work around this problem, install another protocol (TCP/IP or NetBEUI) using
	the Control Panel Network tool and make sure that NWLink is not the first
	protocol to bind to the Workstation service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: ipx
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbbug
	
	=============================================================================
	
