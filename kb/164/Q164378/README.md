---
layout: page
title: "Q164378: WinNT 4.0 SP2 or SP3 Atapi Does Not Support Ultra DMA Devices"
permalink: kb/164/Q164378/
---

## Q164378: WinNT 4.0 SP2 or SP3 Atapi Does Not Support Ultra DMA Devices

	Article: Q164378
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ATAPI devices adhering to the Ultra-DMA specification are not recognized as
	Ultra-DMA capable under Windows NT, and DMA support is not enabled.
	
	CAUSE
	=====
	
	The Microsoft Atapi.sys device driver needs to check new ultra DMA flags in
	Identify data, and enable DMA support on ultra DMA devices is required.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	-or-
	
	To resolve this problem, install the updated Atapi.sys driver. For this
	functionality to be available with the new Atapi.sys driver, the following post
	SP3 fix is also required. For your convenience, the English version of this
	post-SP3 hotfix has been posted to the following Internet location. However,
	Microsoft recommends that you install Windows NT 4.0 Service Pack 4 to correct
	this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/ide-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
