---
layout: page
title: "Q184063: Available Bytes Counter Definition is Incorrect in Perfmon"
permalink: kb/184/Q184063/
---

## Q184063: Available Bytes Counter Definition is Incorrect in Perfmon

	Article: Q184063
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The counter definition in Performance Monitor for the object Memory and counter
	Available Bytes incorrectly states that:
	
	  Available Bytes displays the size of the virtual memory currently on the
	  Zeroed, Free, and Standby lists. Zeroed and Free memory is ready for
	  use, with Zeroed memory cleared to zeros. Standby memory is memory
	  removed from a process's Working Set but still available. Notice that
	  this is an instantaneous count, not an average over the time interval.
	
	The counter definition should read as follows:
	
	  Available Bytes is the amount of physical memory available to processes
	  running on the computer, in bytes. It is calculated by summing space on
	  the Zeroed, Free, and Standby memory lists. Free memory is ready for
	  use; Zeroed memory is pages of memory filled with zeros to prevent later
	  processes from seeing data used by a previous process. Standby memory is
	  memory removed from a process's working set (its physical memory) on
	  route to disk, but is still available to be recalled.
	
	This information can be found in the Counters.hlp file, part of the Windows NT
	Workstation 4.0 Resource Kit.
	
	MORE INFORMATION
	================
	
	Available Bytes is correctly defined as Physical Memory in the following
	documents:
	
	Windows NT Workstation 4.0 Resource Kit: Part III, Chapter 12, Page 400
	
	  Available Bytes:
	  Description: How much memory is left for processes to allocate? This is
	  an instantaneous count, not an average.
	
	The Optimization and Tuning of Windows NT white paper by Scott B. Suhy:
	
	  The counter "Memory Available Bytes" displays the amount of free
	  physical memory. If this counter stays consistently below 4 MB, paging
	  is occurring and performance is less than optimal.
	
	Additional query words: help mem perf-mon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
