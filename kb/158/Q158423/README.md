---
layout: page
title: "Q158423: WinNT 4.0 ERD Won't Allow Repair w/out Compact Disc Installed"
permalink: /kb/158/Q158423/
---

## Q158423: WinNT 4.0 ERD Won't Allow Repair w/out Compact Disc Installed

	Article: Q158423
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Emergency Repair Disk (ERD), there is no way to repair the
	registry or Boot.ini file without the installation CD being in the CD-ROM drive.
	
	CAUSE
	=====
	
	Changes to setup for Windows NT 4.0 introduced this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Setupdd.sys file on boot disk number 2 must be replaced with the Setupdd.sys
	file from the Service Pack in order to use the ERD on a Windows NT 4.0 system
	without a CD-ROM drive attached. Repair functionality will be limited to the
	ability to repair the registry, boot sector, and startup environment, just as in
	Windows NT version 3.51.
	
	Additional query words: ERD
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
