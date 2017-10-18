---
layout: page
title: "Q94171: WFWG: Using Lotus Notes with Novell Connectivity"
permalink: kb/094/Q94171/
---

## Q94171: WFWG: Using Lotus Notes with Novell Connectivity

	Article: Q94171
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	When using Lotus Notes with Microsoft Windows for Workgroups and running Novell
	NetWare connectivity, Notes may stop responding (hang) when trying to access the
	network.
	
	CAUSE
	=====
	
	By default, Lotus Notes uses LAN0 (Microsoft LANA0) to communicate over a LAN.
	When using Novell NetWare connectivity, MSIPX must always use LAN0 (Microsoft
	LANA0). Setting Lotus Notes to use LAN1 eliminates this conflict.
	
	WORKAROUND
	==========
	
	To correct this problem, set Notes to LAN1, as outlined below.
	
	1. Start Lotus Notes, but do not try to access anything.
	
	2. From the Options menu, choose Network Ports.
	
	3. Select LAN0 and disable it by clearing the Enable check box.
	
	4. Select LAN1 and select the Enable box.
	
	5. Exit and restart Lotus Notes.
	
	NOTE: This procedure works only if Lotus Notes is running on a Windows for
	Workgroups or a LAN Manager server using the NETBEUI protocol.
	
	For information about configuring Lotus Notes to run on Novell servers, query on
	the following in the Microsoft Knowledge Base:
	
	  Novell and NETBIOS
	
	The Lotus and Novell products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.11 crash freeze up lockup lock net ware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
