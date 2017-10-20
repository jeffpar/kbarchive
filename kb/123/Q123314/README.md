---
layout: page
title: "Q123314: Frame Type Entries for NWLink Must Appear in Uppercase"
permalink: /kb/123/Q123314/
---

## Q123314: Frame Type Entries for NWLink Must Appear in Uppercase

{% raw %}

	Article: Q123314
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to compatibility issues with some versions of NetWare 3.x, the NWLink
	protocol code was developed in such a way that frame type entries appear in
	uppercase only in both the PROTOCOL.INI and NET.CFG files. This article lists
	the frame type entries for the NWLink protocol.
	
	MORE INFORMATION
	================
	
	To correctly modify network configurations, use the Network Setup program in
	Windows for Workgroups version 3.11. However, the two files can also be modified
	manually. When you do this, the modification of the frame type must conform to
	the uppercase specification made in the NWLink code. This means that both the
	frame variable and frame type values must appear in uppercase only.
	
	Valid Frame Type entries for Ethernet are:
	
	  ETHERNET_802.2
	  ETHERNET_802.3
	  ETHERNET_II
	  ETHERNET_SNAP
	
	Valid Frame Type entries for Token Ring are:
	
	  TOKEN_RING
	  TOKEN_RING_SNAP
	
	An example of a valid entry in PROTOCOL.INI and NET.CFG is:
	
	  FRAME=ETHERNET_802.2
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt 3.11 wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	

{% endraw %}
