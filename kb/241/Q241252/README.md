---
layout: page
title: "Q241252: VPN Tunnels - PPTP Protocol Packet Description and Use"
permalink: kb/241/Q241252/
---

## Q241252: VPN Tunnels - PPTP Protocol Packet Description and Use

	Article: Q241252
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Point-to-Point Tunneling Protocol (PPTP) packet types
	and formats used with Microsoft Windows NT 4.0 and Windows 2000.
	
	MORE INFORMATION
	================
	
	PPTP specifies a series of control messages sent between a client and a server,
	or between a server and a server. This article discusses the packets sent and
	received between two Routing and Remote Access Services (RRAS) servers to
	create, maintain, and disconnect a virtual private network (VPN) across a public
	network.
	
	The PPTP Control Message packet format is generally summarized as having the
	following form:
	
	+----------------------+
	| Media Header         | 
	+----------------------+
	| IP Header            | 
	+----------------------+
	| TCP Header           | 
	+----------------------+
	| PPTP Control Message | 
	+----------------------+
	
	The primary PPTP control message may take on a number of different tasks,
	including connection management, call management, error reporting, and
	Point-to-Point Protocol (PPP) session control. The message code for each type of
	PPTP control message is listed below.
	
	  Control Message                        Message Code
	
	  (Control Connection Management)
	
	  Start-Control-Connection-Request            1
	  Start-Control-Connection-Reply              2
	  Stop-Control-Connection-Request             3
	  Stop-Control-Connection-Reply               4
	  Echo-Request                                5
	  Echo-Reply                                  6
	
	  (Call Management)
	
	  Outgoing-Call-Request                       7
	  Outgoing-Call-Reply                         8
	  Incoming-Call-Request                       9
	  Incoming-Call-Reply                        10
	  Incoming-Call-Connected                    11
	  Call-Clear-Request                         12
	  Call-Disconnect-Notify                     13
	
	  (Error Reporting)
	
	  WAN-Error-Notify                           14
	
	  (PPP Session Control)
	
	  Set-Link-Info                              15
	
	Each of these PPTP control messages has a packet format that varies slightly. If
	you need to view the parameters of a particular control message, you can find
	the detailed description for each in Request for Comments (RF)C 2637. This RFC
	includes detailed descriptions of each control message and packet format, as
	well as state diagrams of a PPTP session.
	
	When you are troubleshooting PPTP issues, it may be helpful to know which packet
	types are usually present and in what order they generally appear. The following
	text is a capture of the summary statements for a PPTP session created between
	two RRAS servers using LAN-to-LAN routing. The summaries show the creation of a
	VPN tunnel, maintenance of a VPN tunnel, and deletion of a VPN tunnel. When you
	are reviewing a Network Monitor trace, you may not see this exact sequence, but
	you should be able to identify the key sequences involved (creation,
	maintenance, and deletion).
	
	PPTP Control Packet (1): Start Session Request (1)    10.10.10.1  10.10.10.10 
	PPTP Control Packet (1): Start Session Reply (2)      10.10.10.10 10.10.10.1  
	PPTP Control Packet (1): Outgoing Call Request (7)    10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Outgoing Call Reply (8)      10.10.10.10 10.10.10.1
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.1  10.10.10.10 
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.10 10.10.10.1  
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.1  10.10.10.10 
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.10 10.10.10.1  
	
	The above text represents the creation of the PPTP tunnel.
	
	PPTP Control Packet (1): Echo Request (5)             10.10.10.10 10.10.10.1
	PPTP Control Packet (1): Echo Reply (6)               10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Echo Request (5)             10.10.10.10 10.10.10.1
	PPTP Control Packet (1): Echo Reply (6)               10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Echo Request (5)             10.10.10.10 10.10.10.1
	PPTP Control Packet (1): Echo Reply (6)               10.10.10.1  10.10.10.10
	
	The above text represents the maintenance of the PPTP tunnel.
	
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Set Link Info (15)           10.10.10.10 10.10.10.1  
	PPTP Control Packet (1): Clear Call Request (12)      10.10.10.1  10.10.10.10 
	PPTP Control Packet (1): Call Disconnected Notify (13)10.10.10.10 10.10.10.1
	PPTP Control Packet (1): Stop Session Request (3)     10.10.10.1  10.10.10.10
	PPTP Control Packet (1): Stop Session Reply (4)       10.10.10.10 10.10.10.1 
	
	The above text represents the deletion of the PPTP tunnel.
	
	REFERENCES
	==========
	
	
	For more specific information about PPTP, please see RFC 2637.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
