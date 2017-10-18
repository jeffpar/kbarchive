---
layout: page
title: "Q167044: Request From Perfmon Counter Can Cause Excessive Page Faults"
permalink: kb/167/Q167044/
---

## Q167044: Request From Perfmon Counter Can Cause Excessive Page Faults

	Article: Q167044
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Perfmon.exe either locally or remotely against the computer, a
	constant high rate of page faults may result (perhaps 75-120 page faults per
	second). Increasing the number of Perfmon sessions increases the number of page
	faults.
	
	CAUSE
	=====
	
	The manner in which Perfmon was requesting memory can cause a continuous loop if
	the performance counter requested a memory buffer that is over a certain size to
	communicate with Perfmon. Because this loop is continuously requesting new
	memory but is also releasing the earlier requested memory, the pagefile usage is
	not impacted. This behavior has not been reproduced using the performance
	counters that are included with Windows NT 4.0. This effect only concerns
	performance counters that request a larger memory buffer.
	
	
	RESOLUTION
	==========
	
	Remove the very large counters either from the registry or by "uninstalling" the
	DLL that contains the performance counters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
