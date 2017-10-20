---
layout: page
title: "Q135462: TCPIP-32 on Client with IPXODI Can Only Ping Itself"
permalink: /kb/135/Q135462/
---

## Q135462: TCPIP-32 on Client with IPXODI Can Only Ping Itself

{% raw %}

	Article: Q135462
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft's TCP/IP-32 stack on your computer running Windows
	for Workgroups 3.1x and the NetWare IPXODI real-mode stack, the client can PING
	itself, but attempts to PING other IP addresses result in "Request timed out"
	messages.
	
	CAUSE
	=====
	
	The NetWare client file, NET.CFG, does not contain entries for all of the four
	ethernet frame types or the two token-ring frame types.
	
	RESOLUTION
	==========
	
	Open the NetWare file, NET.CFG, with a text editor. Under the Link Driver
	section heading make sure all four frame types are specified. Make sure the
	first frame type listed is the primary frame type you use to connect to NetWare
	servers. For example:
	
	- If you have an Ethernet network:
	
	     Link Driver NE2000
	        Frame Ethernet_802.2
	        Frame Ethernet_802.3
	        Frame Ethernet_II
	        Frame Ethernet_SNAP
	     PORT 320
	
	     INT 5
	     MEM D0000
	
	     NetWare DOS Requester
	        FIRST NETWORK DRIVE = F
	
	  NOTE: By default Microsoft's TCP/IP-32 stack uses the ETHERNET_II Frame to
	  communicate on the network.
	
	-or-
	
	- If you have a Token-ring network:
	
	     Link Driver TOKEN
	        Frame Token-ring
	        Frame Token-ring_SNAP
	     PORT 320
	
	     INT 5
	     MEM D0000
	
	     NetWare DOS Requester
	        FIRST NETWORK DRIVE = F
	
	Additional query words: prodtcp32 3.11 wfw wfwg 32 tcpip win95x
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
