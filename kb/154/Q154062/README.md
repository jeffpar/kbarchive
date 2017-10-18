---
layout: page
title: "Q154062: How to Set Up a Windows NT PPTP Client"
permalink: kb/154/Q154062/
---

## Q154062: How to Set Up a Windows NT PPTP Client

	Article: Q154062
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents how to connect to a Point-to-Point Tunneling Protocol
	(PPTP) enabled server across the Internet, while connecting to a non-PPTP
	enabled Internet service provider (ISP).
	
	PPTP enables implementation of secure, multiprotocol Virtual Private Networks
	(VPNs) through public data networks such as the Internet. Through PPTP, it is
	possible for remote users to access their corporate networks and applications by
	dialing into the local ISP's Point of Presence (POP), instead of dialing
	directly into the company network. PPTP connects directly to the target server
	by creating a virtual network for each remote client, one that the Windows NT
	Server 4.0 administrator can monitor and manage like any other remote access
	port.
	
	MORE INFORMATION
	================
	
	Before you make a connection, in order to use PPTP to connect to a server
	securely across the Internet, the PPTP protocol must be loaded. To load the PPTP
	protocol, do the following:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. On the Protocols tab, add PPTP.
	
	3. After the protocol is loaded, Remote Access Service (RAS) is invoked. You
	  must add at least one VPN port as a port in the RAS setup interface.
	
	4. At this time, specify which protocols you want to run for that VPN port. You
	  can install up to 256 VPN ports. Each VPN can be connected to a network.
	
	5. Make sure that at least one VPN is configured for dial-out. One other
	  consideration is that you must know what protocol is used on the receiving
	  PPTP server, and select that protocol and configure it for the VPN port.
	
	6. Re-apply the last applied service pack.
	
	To make the connection, do the following:
	
	1. Assuming that you have a phone book entry for your ISP, create a phone book
	  entry for the PPTP server. The actual phone number is the name of the host or
	  an IP address. Using the IP address of the PPTP RAS server is ideal. There
	  may be name resolution considerations otherwise. Make sure that the Dial
	  Using dialog has a RASPPTPM VPN port assigned to it.
	
	2. Dial the ISP using the standard phone book entry created for the ISP. When
	  you have established a connection, dial the IP address or host name of the
	  computer.
	
	For additional information about routing, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q128647 Troubleshooting TCP/IP LAN and RAS Routing Issues
	
	  Q140859 TCP/IP Routing Basics for Windows NT
	
	Additional query words: prodnt sur tcpip netbeui ipx nwlink
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
