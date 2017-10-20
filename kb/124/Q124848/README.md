---
layout: page
title: "Q124848: Adding an NDIS 3.1 Protocol Does Not Add Frame Type to NET.CFG"
permalink: /kb/124/Q124848/
---

## Q124848: Adding an NDIS 3.1 Protocol Does Not Add Frame Type to NET.CFG

{% raw %}

	Article: Q124848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NDIS 3.1 protocol that you added to Network Setup does not function
	properly.
	
	CAUSE
	=====
	
	If you add an NDIS 3.1 protocol to Windows 95 and you use ODI drivers, the
	appropriate frame type is not added to the NET.CFG file.
	
	RESOLUTION
	==========
	
	To correct this problem, manually add the appropriate frame type to the NET.CFG
	file.
	
	MORE INFORMATION
	================
	
	The Network Setup for Microsoft Windows for Workgroups 3.11 adds four frame
	types to the NET.CFG file:
	
	  FRAME ETHERNET_802.2
	  FRAME ETHERNET_802.3
	  FRAME ETHERNET_II
	  FRAME ETHERNET_SNAP
	
	When you install an NDIS protocol, it can find the frame type because it is
	already available. On some occasions, the behavior of Windows for Workgroups
	version 3.11 can block access to your Novell NetWare server.
	
	Rather than add all frame types to the NET.CFG file, Windows 95 requires that you
	add them manually.
	
	
	Additional query words: frametype
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
