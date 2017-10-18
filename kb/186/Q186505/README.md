---
layout: page
title: "Q186505: Terminal Server Client Taskbar Clock Not Enabled"
permalink: kb/186/Q186505/
---

## Q186505: Terminal Server Client Taskbar Clock Not Enabled

	Article: Q186505
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.1 Service Pack 1,3.5,3.5 SP1,3.5 SP2,3.5 SP3,3.51,3.51 SP1,3.51 SP2,3.51 SP
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server versions 3.1, 3.1 Service Pack 1, 3.5, 3.5 SP1, 3.5 SP2, 3.5 SP3, 3.51, 3.51 SP1, 3.51 SP2, 3.51 SP3, 3.51 SP4, 3.51 SP5, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a, 4.0 SP7 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 and Windows NT desktops normally include a clock on the Taskbar.
	However, the Terminal Server Client (whether 16-bit or 32-bit) does not show the
	clock by default. The clock is turned off because screen updates occur every
	minute, resulting in network traffic.
	
	If the clock is enabled on the Client, the Terminal Server computer will push a
	total frame of 113 bytes to the client. The client will acknowledge with a total
	frame of 60 bytes. Administrators wanting to enable the Taskbar clock function
	should factor an additional bandwidth usage of 173 bytes (1384 bits) for each
	minute for each client.
	
	MORE INFORMATION
	================
	
	To enable the clock, perform the following steps:
	
	1. Right-click on the Taskbar and select Properties.
	
	2. Select the Show Clock check box.
	
	Additional query words: service
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW351search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNTS351sp1 kbWinNTS351sp2 kbWinNTS351sp3 kbWinNTS351sp4 kbWinNTS351sp5 kbWinMEsearch kbWin95search kbWin98search kbWinNT310Search kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWinNTS310SP1 kbWinME kbWinNTS400SP7 kbWinNTS350SP1 kbWinNTS350SP2 kbWinNTS350SP3
	Version           : :2000,3.1,3.1 Service Pack 1,3.5,3.5 SP1,3.5 SP2,3.5 SP3,3.51,3.51 SP1,3.51 SP2,3.51 SP3,3.51 SP4,3.51 SP5,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.0 SP7
	Issue type        : kbinfo
	
	=============================================================================
	
