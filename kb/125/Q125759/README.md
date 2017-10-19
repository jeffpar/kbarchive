---
layout: page
title: "Q125759: Windows NT3.5 Improves Performance with Intel Neptune PCI Chip"
permalink: /kb/125/Q125759/
---

## Q125759: Windows NT3.5 Improves Performance with Intel Neptune PCI Chip

	Article: Q125759
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
	
	SUMMARY
	=======
	
	Microsoft has developed new Windows NT version 3.5 Hardware Abstraction Layer
	(HAL) Dynamic-Link Libraries (DLLs) that take advantage of Intel's new A1
	stepping of their Neptune 82434 PCI Cache Memory Controller (PCMC) chip. These
	new DLLs allow your PCI-based computer with A1 or greater stepping to achieve
	full operating performance.
	
	MORE INFORMATION
	================
	
	The A0 stepping of the Neptune 82434 PCMC chip had two routines, Read-
	Around-Write Enable and PCI-to-Memory Posting Enable, that did not function
	according to specification. This led to data corruption in random access files
	and occasionally in memory.
	
	
	Because BIOS updates to correct this problem were generally unavailable at the
	time of its release, Windows NT version 3.5 avoided potential data corruption by
	disabling these routines. However, this workaround resulted in a slight
	performance degradation.
	
	Intel has since introduced A1 stepping for their Neptune 82434 chip which
	resolves the data corruption problem. Consequently, Microsoft has modified
	Windows NT HAL to only disable these routines on A0 chips. Chips with A1 and
	greater steppings will function normally and achieve full operating
	performance.
	
	The new HAL is available in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
