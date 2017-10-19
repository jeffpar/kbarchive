---
layout: page
title: "Q174863: DNS Name Queries Only Sent Through One Network Adapter"
permalink: /kb/174/Q174863/
---

## Q174863: DNS Name Queries Only Sent Through One Network Adapter

	Article: Q174863
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may be unable to locate and connect to some network resources when
	multiple network adapters are installed on the computer running Windows 95.
	
	For example, if Dial-Up Networking is used in conjunction with a Local Area
	Network (LAN), you may be unable to connect to resources on the LAN while a
	Dial-Up Networking connection is active.
	
	CAUSE
	=====
	
	When Windows 95 attempts to resolve a Transmission Control Protocol/Internet
	Protocol (TCP/IP) Domain Name Service (DNS) network name, only one network
	adapter is used to send the DNS name queries even though there may be more than
	one network adapter installed. Thus, DNS name queries for a resource on one
	network may be sent to the wrong network. The result is that the name is not
	known and cannot be resolved.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
