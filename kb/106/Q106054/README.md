---
layout: page
title: "Q106054: SPX-Compatible Applications and Windows for Workgroups 3.11"
permalink: kb/106/Q106054/
---

## Q106054: SPX-Compatible Applications and Windows for Workgroups 3.11

	Article: Q106054
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the frame type being used on your Novell NetWare server is not set to
	Ethernet_802.3, SPX-compatible applications, such as RConsole, may not work
	correctly under Windows for Workgroups 3.11.
	
	For example, if you start the RConsole application, some servers may be missing
	from the list of servers to administer. This problem occurs if the server's
	frame type is set to Ethernet_II, Ethernet_802.2, or Ethernet_SNAP.
	
	CAUSE
	=====
	
	This problem occurs because the Windows for Workgroups server defaults to the
	802.3 frame type.
	
	RESOLUTION
	==========
	
	To correct this problem, choose the Network Setup icon and change the frame type
	for the Windows for Workgroups IPX/SPX-compatible protocol to the same frame
	type as the NetWare server.
	
	Additional query words: 3.11 novell network server tape backup util utility arcserve
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
