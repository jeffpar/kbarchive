---
layout: page
title: "Q125646: Computer with Intel Neptune PCI Chip Hangs on Warm Reboot"
permalink: kb/125/Q125646/
---

## Q125646: Computer with Intel Neptune PCI Chip Hangs on Warm Reboot

	Article: Q125646
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
	
	Your single processor computer using the Intel Neptune 82434 PCI Cache Memory
	Controller (PCMC) stops responding (hangs) when you perform a warm reboot
	running Windows NT version 3.5.
	
	CAUSE
	=====
	
	The BIOS incorrectly registers two CPUs.
	
	RESOLUTION
	==========
	
	The Hardware Abstraction Layer (HAL) file, HALMPS.DLL, has been updated to
	resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt hal hang boot
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
