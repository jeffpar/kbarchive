---
layout: page
title: "Q124295: Unable to Install Windows NT 3.5 on IBM PS/2 56 8556"
permalink: kb/124/Q124295/
---

## Q124295: Unable to Install Windows NT 3.5 on IBM PS/2 56 8556

	Article: Q124295
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on an IBM PS/2 model 56 8556, the system may stop
	responding (hang).
	
	CAUSE
	=====
	
	This problem occurs when your computer is using older IBM PS/2 system software.
	The IBM PS/2 model 56 8556 shipped with system software that used $BOOT.IML and
	$0000000.IML. These files reside in the system partition (IBM's equivalent to a
	flash BIOS). The file dates are 12/10/91 and 12/7/91, respectively.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to the latest system software, or use files
	dated 6/10/93 or later. For additional information, contact IBM Technical
	Support at (800) 772-2227.
	
	The PS/2 computer discussed here is manufactured by IBM Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt lock up
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
