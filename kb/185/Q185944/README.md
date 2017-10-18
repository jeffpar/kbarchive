---
layout: page
title: "Q185944: Stop 0x7B After Installing Windows NT on an ALR Evolution-V ST"
permalink: kb/185/Q185944/
---

## Q185944: Stop 0x7B After Installing Windows NT on an ALR Evolution-V ST

	Article: Q185944
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT on an ALR Evolution-V ST, the following error is
	encountered during startup:
	
	  STOP 0x0000007B (0xF9813BD8,0xC0000034,0x00000000,0x00000000)
	  INACCESIBLE_BOOT_DEVICE
	
	CAUSE
	=====
	
	The onboard IDE controller is not compatible with the Windows NT Atapi.sys
	driver included in Windows NT version 4.0.
	
	RESOLUTION
	==========
	
	Replace the Atapi.sys file with an updated version.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: IDE ATAPI ATDISK
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
