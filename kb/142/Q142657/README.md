---
layout: page
title: "Q142657: Data Corruption on Windows NT 4.0"
permalink: kb/142/Q142657/
---

## Q142657: Data Corruption on Windows NT 4.0

	Article: Q142657
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Data may become corrupted on systems running Windows NT 4.0.
	
	CAUSE
	=====
	
	This problem is caused by an incorrect comparison between a 32-bit value and a
	page table entry's (PTE's) page frame number, which, on 8086-based processors is
	20-bits. Every time Windows NT flushes the entire translation buffer (TLB), it
	increments a 32-bit counter. Every time Windows NT frees a set of system pages
	(for example, removing the mapping for a memory descriptor list [MDL]) the
	current value of the counter is stored into the PTE's page frame number field.
	When the PTE is reused, Windows NT compares the page frame number field to the
	current value in the counter, if they are equal, the TLB has not been flushed
	since this PTE was last used. If they are unequal, the PTE's virtual address can
	be reused without flushing it out of the TLB.
	
	The algorithm is designed to allow the counter to overflow which is why there is
	a compare for equality rather than for greater than. However, after the counter
	exceeds 20-bits (1,048,575), the compare always fails and TLB flushes are not
	done when necessary. The fix is to make the 32-bit counter also 20 bits.
	
	The reason this is sporadic is the fact that system PTEs are reused in a first in
	last out order (FILO). Hence, when there are ample system address ranges for
	mapping MDLs and there are various other operations that cause TLB flushes, by
	the time the PTEs are reused, a flush was already done. A Pentium Pro processor
	is more likely to encounter the problem because on a Pentium Pro, a context
	switch does not invalidate the TLB as it does on other 8086-based processors.
	
	RESOLUTION
	==========
	
	To work around this problem, obtain the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
