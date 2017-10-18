---
layout: page
title: "Q186573: Terminal Server Administrators Must Install Printer Drivers"
permalink: kb/186/Q186573/
---

## Q186573: Terminal Server Administrators Must Install Printer Drivers

	Article: Q186573
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Terminal Server client session is essentially a Windows NT Workstation
	session. If the Terminal Server client user wants to print to a shared printer
	on, for example, a computer running Windows 95 on the network, an appropriate
	printer driver will need to be installed on the Terminal Server computer. If
	not, when the Terminal Server client user tries to print to the shared printer,
	the client user will be prompted to install the printer driver. However,
	Terminal Server client users are typically not Terminal Server administrators.
	As with Windows NT Workstation, only administrators can install drivers. So, the
	Terminal Server client user will normally be unable to install the driver needed
	to print to the shared printer. A Terminal Server administrator will need to
	install the printer driver.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
