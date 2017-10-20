---
layout: page
title: "Q129988: Required Frame Types for NetBEUI and TCP/IP-32 Protocols"
permalink: /kb/129/Q129988/
---

## Q129988: Required Frame Types for NetBEUI and TCP/IP-32 Protocols

{% raw %}

	Article: Q129988
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows for Workgroups version 3.11 on a Novell NetWare
	network using Novell's IPX/ODI drivers, you may receive the following error
	message when you try to log on to a Window NT domain or to browse network
	resources:
	
	  No Domain Server was available to validate your password. You were logged on
	  without password validation.
	
	  The list of servers for this workgroup is not currently available.
	
	CAUSE
	=====
	
	The NetBEUI network protocol requires the Ethernet_802.2 frame type. Removing
	this frame type from the NET.CFG file disables all network functionality if
	NetBEUI is the only installed network protocol.
	
	RESOLUTION
	==========
	
	To restore network functionality, add the Ethernet_802.2 frame type for the
	NetBEUI protocol or the Ethernet_II frame type for the TCP/IP-32 protocol in the
	NET.CFG file. The following example demonstrates a sample LINK DRIVER section of
	a NET.CFG file using the EXP16ODI MLID:
	
	     LINK DRIVER EXP16ODI
	        Frame Ethernet_802.3
	        Frame Ethernet_802.2
	        Frame Ethernet_II
	        Frame Ethernet_Snap
	
	Make sure that the first frame type listed in this section is the frame type used
	by the Novell NetWare server.
	
	MORE INFORMATION
	================
	
	When you run Network Setup, Setup automatically adds all four frame types to the
	NET.CFG file if it detects that the IPX/ODI drivers are loaded. If the
	Ethernet_802.2 frame type is missing from the NET.CFG file, either the ODI
	drivers were not loaded when you started Network Setup or the frame type was
	later deleted from the file.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
