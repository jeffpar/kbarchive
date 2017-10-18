---
layout: page
title: "Q142043: How To Configure MPR In An IPX Network"
permalink: kb/142/Q142043/
---

## Q142043: How To Configure MPR In An IPX Network

	Article: Q142043
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT IPX internal routing supports LAN to LAN routing, forwarding and
	NetBIOS packets propagation. IPX provides the addressing mechanism that allows
	packets to be delivered to a desired destination. The implementation of IPX by
	Windows NT Server 3.51 conforms to the Novell IPX Router specification.
	
	MORE INFORMATION
	================
	
	To enable IPX routing, you must install the IPX protocol and Routing Information
	Protocol (RIP) for IPX. The Service Advertising Protocol (SAP) agent installs
	automatically when you install RIP. IPX addresses, routes and switches
	information packets to move single packets from one location to another in an
	internetwork (with the assistance of RIP and SAP).
	
	To enable IPX routing in Windows NT:
	
	1. Select the NWLink IPX/SPX Compatible Transport in Installed Network Software
	  of Control Panel Network, and click Configure.
	
	2. In the NWLink IPX/SPX Protocol Configuration dialog box, select the Enable
	  RIP Routing check box. This is enabled by default.
	
	3. Choose the Manual Frame Type Detection option and select the frame type(s)
	  that applies to your network. Click Add for each frame type.
	
	4. Do not make any changes to the Internal Network Number, unless there is no
	  network number defined for the Windows NT Server segment. If the network
	  number is already defined, Windows NT Server automatically detects it during
	  the boot process. Use IPXROUTE.EXE to determine the network number of your
	  network adapter. For example, type the following:
	
	  "ipxroute config" (without the quotation marks)
	
	  NOTE: If there is no network number defined for the segment that the Windows
	  NT Server is connected to, then you must define an Unique Network Number for
	  that segment. For example, let's say you have a Windows NT Server 3.51 with
	  two network interface cards (NIC). The first NIC is connected to existing
	  Novell network, so you can leave the network number blank. Windows NT Server
	  auto-detects the network number for that segment. The second NIC is connected
	  to the Microsoft Network and currently there is no IPX network number defined
	  for this segment. You must then type in an unique network number for this
	  segment.
	
	5. Click OK and quit Network Settings.
	
	6. Shut down and restart Windows NT.
	
	Additional query words: prodnt novell
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
