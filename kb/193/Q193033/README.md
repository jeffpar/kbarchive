---
layout: page
title: "Q193033: Troubleshooting IPX Connectivity"
permalink: kb/193/Q193033/
---

## Q193033: Troubleshooting IPX Connectivity

	Article: Q193033
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW), you may experience slow performance, or you may not be able to
	connect to or browse other clients and servers running the IPX protocol.
	
	MORE INFORMATION
	================
	
	To troubleshoot the most frequent causes of this behavior, try the following:
	
	1. In Windows NT, go into Control Panel. Click Network, Protocol, NWLink
	  IPX/SPX, and Properties.
	
	2. If the Frame Type is set for "Auto," change it to force the computer to use
	  the same Frame Type and Network Number of Novell server.
	
	3. To determine the configured Frame Type and Network Number on the Novell
	  server, you can do one of two things. Either run the Novell utility,
	  RCONSOLE, remotely, and go to the System Prompt. Or, from the Novell server's
	  console, go to the System Prompt. Run the command CONFIG. You will get the
	  following results:
	
	  NOTE: Your Network numbers, server name and frame type may vary from those
	  shown below. This is only an example of what the Novell CONFIG command
	  displays.
	
	  RED_DOG:config
	
	        File server name: RED_DOG
	        IPX internal network number: 0FA41030
	        Intel EtherExpress(tm) 16
	        Version 2.26    May 20, 1993
	        Hardware setting: I/O Port 300h to 30Fh, Interrupt 5h
	        Node address: 00AA00342846
	        Frame type: ETHERNET_802.2
	        No board name defined
	        LAN protocol: IPX network 9D396800
	
	Notice the "Frame Type (Ethernet_802.2)" on your Novell server, and the "LAN
	Protocol: IPX Network 9D396800." You will use these numbers to configure the
	Windows NT computers.
	
	On a Computer Running CSNW
	--------------------------
	
	Go into Control Panel. Click Network, Protocol, NWLink IPX/SPX, and click
	Properties. In the field for Frame Type, choose the frame type that matches
	"Frame Type" on the Novell server. In the field for "Network Number," enter the
	number that matches the "IPX Network" number on the Novell server.
	
	On a Computer Running GSNW
	--------------------------
	
	Go into Control Panel. Click Network, Protocol, NWLink IPX/SPX, and click
	Properties. Choose the radio (option) button for Manual Frame Type Detection.
	Choose the ADD button. Choose the frame type that matches "Frame Type" on the
	Novell server. In the field for "Network Number," enter the number that matches
	the "IPX Network" number on the Novell server.
	
	1. Your trouble with slow performance or the inability to connect or browse
	  other clients and servers running the IPX protocol should disappear.
	
	2. If clients or servers are across a router, ensure that Type 20 Packets on the
	  router are enabled in both directions. Type 20 Packets are not enabled by
	  default on routers. Contact the router vendor for information on how to check
	  or manipulate this setting.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : winnt:3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
