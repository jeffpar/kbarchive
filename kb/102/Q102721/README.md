---
layout: page
title: "Q102721: Err Msg: Windows NT Could Not Start Because the Following..."
permalink: /kb/102/Q102721/
---

## Q102721: Err Msg: Windows NT Could Not Start Because the Following...

	Article: Q102721
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows NT-based computer, you may receive the following
	error message:
	
	  Windows NT could not start because the following file is missing or corrupt:
	
	  \%winnt%\SYSTEM32\CONFIG\SYSTEMHardware Profile/Last Known Good menu
	
	CAUSE
	=====
	
	The System subkey of the HKEY_LOCAL_MACHINE hive in the registry is too large to
	fit into the allocated memory space. Often, this part of the registry is too
	large because services store a lot of information in their Parameters keys under
	the CurrentControlSet\Services key. The following services are known to store
	large amounts of data under this key under certain conditions:
	
	- Spooler (number of printers)
	- DHCP (number of reservations)
	- AT Scheduler (number of jobs)
	- DFS (number of shares)
	- Other and third-party services
	
	
	RESOLUTION
	==========
	
	
	The only resolution is to use an Emergency Repair Disk (ERD), or perform a
	reinstallation of Windows NT.
	
	After you have recovered the system from a backup or an ERD, you can either
	reduce the amount of data stored by a service or install the hotfix for the
	spooler service.
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Windows NT 3.5, 3.51
	--------------------
	
	Microsoft has confirmed that this is a problem in Windows NT 3.5 and 3.51.
	
	MORE INFORMATION
	================
	
	This issue may occur when something is writing too much data to the System
	subkey in the registry. The System subkey is designed exclusively for
	information that is necessary to boot the computer.
	
	Intel and ARC (RISC) systems have a design limit such that 16 MB of memory is
	available at this stage of the boot process. The System registry file has to
	share the 16 MB with the loader, kernel, HAL, and boot drivers. In some
	instances, the System subkey may be as large as 13 MB in size (or larger).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
