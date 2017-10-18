---
layout: page
title: "Q93476: Xircom Network Simplicity Adapters Not Supported with WFWG"
permalink: kb/093/Q93476/
---

## Q93476: Xircom Network Simplicity Adapters Not Supported with WFWG

	Article: Q93476
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Xircom Network Simplicity adapter with either of the Pocket
	Ethernet Adapter drivers included with Windows for Workgroups, the following
	error message is displayed when your system boots up:
	
	  Pocket Ethernet Adapter Address Eeprom Unreadable.
	  Press any key to continue...
	
	CAUSE
	=====
	
	The Xircom Network Simplicity series of network adapter cards are not supported
	with Windows for Workgroups. They are very similar to Xircom's Pocket Ethernet
	Adapters; however, they are not Network Driver Interface Specification (NDIS)
	certified, and do not work with either of the Pocket Ethernet Adapter drivers
	included with Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	The Network Simplicity adapters were developed for Novell NetWare Lite and are
	proprietary to Novell NetWare Lite.
	
	The Network Simplicity adapters can be identified by a "Network Simplicity" label
	on the case and "NS" on the end of the serial number.
	
	For additional information, contact Xircom technical support.
	
	The Novell and Xircom products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.0 1.00 3.1 3.10 3.11 LAN Manager LANman light err msg errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
