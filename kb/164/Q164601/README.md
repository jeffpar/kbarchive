---
layout: page
title: "Q164601: How to Enable PPTP Port for Network Monitor"
permalink: /kb/164/Q164601/
---

## Q164601: How to Enable PPTP Port for Network Monitor

	Article: Q164601
	Product(s): Microsoft Windows NT
	Version(s): 4.0 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Network Monitor in Systems Management Server version 1.2 or Network
	Monitor from the Windows NT Server version 4.0 compact disc, you will not be
	able to view Point-to-Point Tunneling Protocol (PPTP) or General Routing
	Encapsulation (GRE) packets. At the time these products were released, it was
	not known what port would be used for PPTP.
	
	MORE INFORMATION
	================
	
	To view PPTP and GRE packets, follow these steps:
	
	1. In the parsers directory created by Network Monitor, edit the Tcpip.ini file.
	
	2. In this file, find the [TCP_HandoffSet] section.
	
	3. At the bottom of this section, find:
	
	  5678 = PPTP
	
	4. Change 5678 to 1723.
	
	5. Save the file.
	
	When you run Network Monitor, you will now see PPTP session packets, and GRE
	packets initiated by PPTP.
	
	Additional query words: SMS netmon
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0 1.2
	Issue type        : kbhowto
	
	=============================================================================
	
