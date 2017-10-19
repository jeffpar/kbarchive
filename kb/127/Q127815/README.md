---
layout: page
title: "Q127815: NWLink IPX Frame Corruption in Token Ring Network"
permalink: /kb/127/Q127815/
---

## Q127815: NWLink IPX Frame Corruption in Token Ring Network

	Article: Q127815
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
	
	When you use the Windows NT IPX/SPX Compatible Transport protocol (NWLink) in a
	token ring network, frame corruption occurs. This results in a lost connection
	between a client and a server. A network trace reveals that the IPX header
	becomes corrupted, thus the client does not receive the data.
	
	If an SNA Server client is connecting to the SNA Server over IPX/SPX, this
	problem causes the SNA client to lose its LAN session to the server, leading to
	the loss of the user's SNA session.
	
	The following conditions must exist to encounter the problem:
	
	- Windows NT server running NWLink IPX.
	
	- Token Ring network with Source Routing Bridges.
	
	- Client sends request to Windows NT Server and the Server responds.
	
	- Original Frame gets lost on the net for some reason.
	
	- When the server retransmits the frame, the Token Ring source routing
	  information will be copied twice in the frame. It will overwrite the IPX
	  header.
	
	A slow WAN may be more prone to encounter this problem because they often drop
	frames. The problem only occurs during frame retransmission.
	
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
	
	Additional query words: prodnt Novell SPX Sockets
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
