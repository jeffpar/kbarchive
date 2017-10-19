---
layout: page
title: "Q163673: &quot;Exception 0E&quot; Using MSNDS Over Dial-Up Connection"
permalink: /kb/163/Q163673/
---

## Q163673: &quot;Exception 0E&quot; Using MSNDS Over Dial-Up Connection

	Article: Q163673
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks with the Microsoft
	Service for NetWare Directory Services (MSNDS) to connect to a NetWare network
	over a dial-up connection, a "Fatal Exception Error 0E" (Invalid Page Fault)
	error message may occur when you are browsing or connecting to NetWare
	resources.
	
	This symptom has been observed primarily when a Windows 95 client makes a Dial-Up
	Networking connection to a Novell NetWare Connect version 2.028 PPP server.
	
	CAUSE
	=====
	
	When you connect to certain Dial-Up Networking servers, the MSNDS client
	redirector may time out and resend a packet after freeing a network buffer
	needed to transmit the packet. When the Dial-Up Adapter driver attempts to
	access this buffer to retransmit the packet, an Invalid Page Fault error occurs.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Currently, this symptom has not been reported to occur with the Microsoft Client
	for NetWare networks (Bindery version) without the Microsoft Service for NetWare
	Directory Services (MSNDS) installed.
	
	
	Additional query words: NWC 2.0
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
