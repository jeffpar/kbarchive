---
layout: page
title: "Q182108: Availability of Windows Sockets 2.0 for Windows 95"
permalink: kb/182/Q182108/
---

## Q182108: Availability of Windows Sockets 2.0 for Windows 95

	Article: Q182108
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork dun msnets osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbDialUp
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the availability of Windows Sockets 2.0 for Windows 95.
	
	MORE INFORMATION
	================
	
	This release includes a new version of the Transmission Control
	Protocol/Internet Protocol (TCP/IP) stack and resolves the following WinSock
	issues:
	
	- Slow performance with some Internetwork Packet Exchange (IPX) programs.
	
	- An incompatibility with Microsoft Internet Explorer 4.0 that could cause a
	  page fault error message.
	
	- A problem with Internet Group Management Protocol (IGMP) version 2 support
	  that could cause programs to drop out of a multicast groups.
	
	This update consists of one file named W95ws2setup.exe. This file installs an
	updated TCP/IP stack, updated TCP/IP utilities, and updated WinSock 2
	components.
	
	New TCP/IP Features
	-------------------
	
	This release of Windows Sockets 2.0 for Windows 95 includes several features that
	improve network performance. These features include:
	
	- Support for TCP large windows (TCPLW) and time stamps
	
	- Support for selective acknowledgements
	
	- Support for fast retransmission and recovery
	
	- Support for DHCP release on shutdown
	
	- Support for DHCP decline
	
	- Support for per-adapter WINS servers
	
	For additional information about this update, please see the "Release Notes"
	document at the following Microsoft Web site. The update is also available at
	this site.
	
	http://www.microsoft.com/windows95/downloads/contents/wuadmintools/s_wunetworkingtools/w95sockets2/default.asp
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork dun msnets osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbDialUp 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
