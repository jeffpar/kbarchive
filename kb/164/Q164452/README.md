---
layout: page
title: "Q164452: Err Msg: Network Device Type Is Incorrect"
permalink: kb/164/Q164452/
---

## Q164452: Err Msg: Network Device Type Is Incorrect

	Article: Q164452
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a computer with an NE2000 network adapter and Novell's
	Client32 network client installed, you may receive the following error message
	when you try to log in to a Windows NT domain:
	
	  Microsoft Networking
	  Network device type is incorrect. Be sure you typed it correctly.
	
	CAUSE
	=====
	
	The NE2000 network adapter miniport driver conflicts with the OEM Service
	Release 2 (OSR2) Ndis.vxd.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Replace the network adapter with a different model.
	
	- Use the Microsoft Client for Microsoft Networks or the Microsoft Service for
	  NetWare Directory Services.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
