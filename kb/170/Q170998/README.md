---
layout: page
title: "Q170998: Cannot Log in to Windows NT Domain Over Internet Connection"
permalink: /kb/170/Q170998/
---

## Q170998: Cannot Log in to Windows NT Domain Over Internet Connection

	Article: Q170998
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork win95 win98
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are connected to the Internet through an Internet service provider (ISP),
	you may not be able to log in to a Windows NT Domain, or use Microsoft
	Networking functionality to connect to another Windows NT-based or Windows
	95/98-based computer on the Internet. This may occur even though you may have
	been able to in the past.
	
	MORE INFORMATION
	================
	
	A number of ISPs have disabled User Datagram Protocol (UDP) ports 137 and 138
	and Transmission Control Protocol (TCP) port 139 on their routers to reduce
	network traffic and provide protection against out-of-band (OOB) data attacks on
	servers. Microsoft Networking components rely on these ports (especially TCP
	port 139) for NetBIOS communication.
	
	If you could previously use Microsoft Networking components over the Internet but
	no longer can, contact your ISP to determine if UDP ports 137 or 138 or TCP port
	139 has been disabled on the ISP's routers.
	
	NOTE: This method of connecting to a Windows NT domain over the Internet is not a
	secure configuration and is not recommended by Microsoft. However, you can use
	the Point-to-Point Tunneling Protocol (PPTP) as an alternative method for
	communicating with your network over the Internet. PPTP is a networking
	technology that supports multiprotocol virtual private networks (VPNs), enabling
	remote users to access corporate networks securely across the Internet. Using
	PPTP, remote users can use Windows NT Workstation, Windows 95/98, and other
	point-to-point protocol (PPP)-enabled computers to dial into a local Internet
	service provider to connect securely to their corporate networks using the
	Internet.
	
	REFERENCES
	==========
	
	For more information about TCP ports, see the following RFC:
	
	  RFC-1700: Internet Assigned Numbers
	
	For additional information about PPTP, see the following articles in the
	Microsoft Knowledge Base:
	
	  Q161410 How to Set Up a Private Network Over the Internet Using PPTP
	
	  Q154062 How to Set Up a Windows NT PPTP Client
	
	For additional information about problems connecting to computers running
	Microsoft Networking components over the Internet, see the following article in
	the Microsoft Knowledge Base:
	
	  Q142027 Troubleshooting NET USE Failure (When PING NetBIOS Name Works)
	
	For additional information about out-of-band data, see the following articles in
	the Microsoft Knowledge Base:
	
	  Q143478 Stop 0A in TCPIP.SYS When Receiving Out Of Band (OOB) Data
	
	  Q168747 Update to Windows 95 TCP/IP to Address Out-of-Band Issue
	
	For information about the types of network traffic created when you are using
	Microsoft Networking components (without PPTP), see the following article in the
	Microsoft Knowledge Base:
	
	  Q139608 SMB Traffic During Windows NT Domain Logon
	
	Additional query words: winnt
	
	======================================================================
	Keywords          : kbnetwork win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
