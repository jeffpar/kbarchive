---
layout: page
title: "Q134402: Some TSRs Moved from Autoexec.bat to Winstart.bat During Setup"
permalink: /kb/134/Q134402/
---

## Q134402: Some TSRs Moved from Autoexec.bat to Winstart.bat During Setup

	Article: Q134402
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
	
	After installing Windows 95 on a computer running Btrieve, DaVinci Mail, or
	Microcom Carbon Copy, several terminate-and-stay-resident programs (TSRs) no
	longer appear in the Autoexec.bat file.
	
	Your programs still function properly and the TSRs load into memory.
	
	CAUSE
	=====
	
	Windows 95 removes the TSRs for these programs from the Autoexec.bat file and
	places them in the Winstart.bat file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows 95 moves the following TSRs to the Winstart.bat file:
	
	Btrieve:
	
	  Brequest.exe
	
	DaVinci Mail:
	
	  Mhsblink
	  Mhsalarm.exe
	  Wks_nb.exe
	
	Microcom Carbon Copy:
	
	  Doshost.exe
	  Dosker
	
	The Winstart.bat file is used to load TSRs that are required for Windows- based
	programs and are not needed in MS-DOS sessions. You should not use the
	Winstart.bat file for setting environment variables.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
