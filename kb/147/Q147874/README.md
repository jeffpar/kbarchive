---
layout: page
title: "Q147874: Slow Performance Across Token Ring Source Routers with NetBEUI"
permalink: kb/147/Q147874/
---

## Q147874: Slow Performance Across Token Ring Source Routers with NetBEUI

	Article: Q147874
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network performance may be slow when you are using programs that repeatedly
	connect and disconnect from servers across a source routing bridge in a Token
	Ring environment.
	
	CAUSE
	=====
	
	When you are using the NetBEUI protocol on a Token Ring network, a NameQuery
	packet is broadcast several times without the source routing field set. If there
	is no response to half the possible name query requests, remaining requests are
	resubmitted with the source routing field set. This behavior was designed to
	reduce network traffic on the LAN. If a program repeatedly establishes
	connections and disconnects from servers across a source routing bridge, network
	performance is greatly reduced.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: router bridge wan netbios
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
