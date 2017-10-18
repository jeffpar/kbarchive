---
layout: page
title: "Q216345: Error During SSD 2.10 or Earlier Installation on WinNT 4.0 SP4"
permalink: kb/216/Q216345/
---

## Q216345: Error During SSD 2.10 or Earlier Installation on WinNT 4.0 SP4

	Article: Q216345
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Compaq SSD 2.10 is installed on a computer running Windows NT 4.0 with
	Service Pack 4 installed, the following error may appear:
	
	  Installed Service Pack - The Service Pack installed on the system is not
	  currently supported on this version of setup. Please consult the help file
	  for more details.
	
	This error will only occur if either of the following options are selected during
	the SSD installation:
	
	- HAL and Kernel Upgrade/Downgrade
	
	- HAL Recovery Option
	
	CAUSE
	=====
	
	This error occurs because version 2.10 and earlier versions of the Compaq SSD
	are not aware of Microsoft's Service Pack 4 for Windows NT. Therefore, to
	complete the procedure correctly, HAL and Kernel Upgrade/Downgrade and the HAL
	Recovery Option must be performed manually.
	
	RESOLUTION
	==========
	
	Compaq is aware of this issue and has posted a workaround solution on its
	support Web site at the following URL:
	
	  http://www.compaq.com/support/techpubs/customer_advisories/em981202_cw02_1.html
	
	For additional information about upgrading the Windows NT HAL and Kernel when
	going from a uniprocessor to a multiprocessor computer, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q156358 How to Manually Add Support for a Second Processor
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: sp4 ssd upgrade nt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
