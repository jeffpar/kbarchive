---
layout: page
title: "Q123159: Windows NT 3.5 Computer with Intel Neptune PCI Chip Hangs"
permalink: /kb/123/Q123159/
---

## Q123159: Windows NT 3.5 Computer with Intel Neptune PCI Chip Hangs

	Article: Q123159
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw kbsetup kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 on a computer with the Intel Neptune
	82434 PCI Cache Memory Controller (PCMC) the system stops responding (hangs).
	
	CAUSE
	=====
	
	The call, IoAssignResources fails if the target PCI device and the driver's
	requested resource list do not request interrupt vectors and the BIOS doesn't
	assign an interrupt vector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt hal PCI hang boot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
