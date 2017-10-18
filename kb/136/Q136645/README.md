---
layout: page
title: "Q136645: Cannot Boot from Server with Ungermann-Bass Network Adapter"
permalink: kb/136/Q136645/
---

## Q136645: Cannot Boot from Server with Ungermann-Bass Network Adapter

	Article: Q136645
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95-based computer using an Ungermann-Bass network adapter does not
	boot from a Microsoft Windows NT or Novell NetWare server.
	
	CAUSE
	=====
	
	Ungermann-Bass network adapters cannot switch from real mode to protected mode
	using the Microsoft Client for Microsoft Networks or the Microsoft Client for
	NetWare Networks to boot from a network server.
	
	RESOLUTION
	==========
	
	Use the Novell NETX or VLM client software to boot from a NetWare server. To
	boot from a Windows NT server, you must use a different network adapter that can
	switch from real mode to protected mode.
	
	Additional query words: nic ub
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
