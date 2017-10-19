---
layout: page
title: "Q149206: Networks That Are No Longer Supported with Windows 95"
permalink: /kb/149/Q149206/
---

## Q149206: Networks That Are No Longer Supported with Windows 95

	Article: Q149206
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following third-party networks are supported with Microsoft Windows and
	Windows for Workgroups version 3.1x, but are not supported with Windows 95:
	
	- 3COM 3+Open, 3+Share
	
	- AT&T StarLAN
	
	- Beame and Whiteside NFS
	
	- IBM OS/2 LAN Server
	
	- TCS 10-NET
	
	For support issues with these networks, please contact the network's manufacturer
	or vendor.
	
	MORE INFORMATION
	================
	
	IBM OS/2 LAN Server
	-------------------
	
	Windows 95 supports connectivity to IBM LAN Server computers using the Microsoft
	Client for Microsoft Networks and the appropriate protocol only. Connectivity is
	supported only with the following server versions:
	
	  1.2
	  1.3
	  1.3 CSD
	  2.0
	  3.0
	  4.0
	
	Basic connectivity is supported (such as connecting to shares and printers). The
	use of IBM's workstation client software with Windows 95 is not supported.
	
	For additional information, see the "IBM OS/2 LAN Server" topic in the Microsoft
	Windows 95 Resource Kit, or see the Readme.txt and Networks.txt files included
	with Windows 95.
	
	TCS 10-NET
	----------
	
	You may receive one of the following error messages if you attempt to start TCS
	10-NET with Windows 95:
	
	- Error 5735: Protocol Manager has reported that a network adapter cannot be
	  found.
	
	- Error 7361: IPX or NetBIOS must be running in order to load the network
	  services.
	
	Additional query words: tiara systems internex dca 3rd
	
	======================================================================
	Keywords          : kbnetwork kbpolicy 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
