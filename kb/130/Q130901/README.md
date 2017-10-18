---
layout: page
title: "Q130901: Frame Corruption in Retransmitted IPX Packet"
permalink: kb/130/Q130901/
---

## Q130901: Frame Corruption in Retransmitted IPX Packet

	Article: Q130901
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT IPX/SPX Compatible Transport protocol (NWLink),
	frame corruption may occur. This results in a lost connection between a client
	and a server. A network trace reveals that the IPX packet is corrupt (which is
	why the client does not receive the data). This problem can occur on both
	Ethernet and Token Ring networks.
	
	The following conditions must exist for the problem to occur:
	
	- The Windows NT server is running NWLink IPX.
	
	- The client sends a request to Windows NT server and the server responds.
	
	- The original frame gets lost on the network.
	
	A slow WAN may be more prone to encounter this problem because they often drop
	frames. The problem only occurs during frame re-transmission.
	
	RESOLUTION
	==========
	
	Upgrade to Windows NT version 3.51 or the latest U.S. Service Pack for Windows
	NT version 3.50.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5 and in Windows NT 3.51. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
