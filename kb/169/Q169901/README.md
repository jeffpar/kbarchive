---
layout: page
title: "Q169901: Perfmon: Processor Spikes on Multiprocessor Computer"
permalink: kb/169/Q169901/
---

## Q169901: Perfmon: Processor Spikes on Multiprocessor Computer

	Article: Q169901
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a multiprocessor computer, you may see periods where the processor usage
	percentage will spike to 100 percent and back to 0 percent. This spike may
	happen for an unspecified period of time and then it may return to normal. This
	spike will happen on all processors in the computer at the same time.
	
	CAUSE
	=====
	
	When Window NT queries a server for performance data, it uses a software timer
	that is shared among all the processors. On certain multiprocessor computers,
	this might report a time that is not properly synchronized with another
	processor. Therefore, the time counter occasionally becomes out of synch,
	causing the perfmon data to oscillate between a large positive and large
	negative number. This problem has only been seen, so far, on computers that are
	based on the Intel Multiprocessor Architecture.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For the fix to work correctly, it must be able to determine that it should use
	the 8254 chip to use as its base timer. On newer BIOS, there will be a table
	entry that the HAL will look at while initializing. On computers without a newer
	BIOS, you will have to add a /USE8254 to the appropriate line in the Boot.ini
	file.
	
	Additional query words: peak peaks spike
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
