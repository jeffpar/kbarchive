---
layout: page
title: "Q156974: IBM 6611 Routers May Generate Invalid DHCP Frames"
permalink: /kb/156/Q156974/
---

## Q156974: IBM 6611 Routers May Generate Invalid DHCP Frames

	Article: Q156974
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Dynamic Host Configuration Protocol (DHCP) clients that are on the opposite
	side of an IBM 6611 router from their DHCP Server may receive one of the
	following error messages when they attempt to lease an IP address:
	
	Windows NT DHCP Client
	----------------------
	
	  The DHCP client could not obtain an IP address.
	  If you want to see DHCP messages in the future, choose YES, otherwise choose
	  NO.
	
	Windows 95 DHCP Client
	----------------------
	
	  This DHCP client was unable to obtain an IP network address from a DHCP
	  server.
	
	CAUSE
	=====
	
	Some versions of software for the IBM 6611 router create and forward invalid
	frames when the router is acting as an RFC 1542 BOOTP relay agent. Specifically,
	the frames are invalid because their IP header contains a Source IP Address of
	0.0.0.0, rather than the IP address of the router.
	
	These invalid frames are silently discarded by the Windows NT TCP/IP stack and
	are not passed to the DHCP service on the server.
	
	RESOLUTION
	==========
	
	To correct this problem, contact IBM and request an upgrade to the IBM 6611
	router software.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	MORE INFORMATION
	================
	
	Per section 4.2.2.11 of RFC 1812 (Requirements for IP Version 4 Routers), a
	Source IP Address of 0.0.0.0 "MUST NOT be used as a source address by routers,
	except the router MAY use this as a source address as part of an initialization
	procedure (for example, if the router is using BOOTP to load its configuration
	information)."
	
	In the situation described here, the IBM 6611 router is not in the process of
	determining its own configuration, and therefore, the frames it generates with a
	Source IP Address of 0.0.0.0 are invalid.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
