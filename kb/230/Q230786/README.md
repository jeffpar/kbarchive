---
layout: page
title: "Q230786: How to Enable RADIUS Port for Network Monitor"
permalink: /kb/230/Q230786/
---

## Q230786: How to Enable RADIUS Port for Network Monitor

	Article: Q230786
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Network Monitor in Systems Management Server version 1.2 or Network
	Monitor from the Windows NT Server version 4.0 compact disc, you are not able to
	view Remote Authentication Dial-In User Service (RADIUS) packets. Network
	Monitor in Systems Management Server version 1.2 or Network Monitor from the
	Windows NT Server version 4.0 compact disc does not parse RADIUS traffic.
	Network Monitor must be upgraded to Network Monitor version 2.0. After Network
	Monitor has been updated to version 2.0 and RADIUS is configured to use port
	1645 and 1646 for Authentication and Accounting, you are able to view RADIUS
	traffic in a Network Monitor trace. According to RFC 2026 the ports used by
	RADIUS have been changed to 1812 and 1813 for Authentication and Accounting,
	respectively.
	
	MORE INFORMATION
	================
	
	To view RADIUS packets using RFC-compliant ports 1812 and 1813:
	
	1. In the parsers directory created by Network Monitor, edit the Tcpip.ini file.
	
	2. In this file, find the [UDP_HandoffSet] section.
	
	3. At the bottom of this section, locate:
	
	  1645 = Radius
	  1646 = Radius
	
	4. Change 1645 to 1812 and 1646 to 1813.
	
	5. Save the file.
	
	When you run Network Monitor, you now see RADIUS session packets initiated by
	RADIUS.
	
	Additional query words: SMS netmon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
