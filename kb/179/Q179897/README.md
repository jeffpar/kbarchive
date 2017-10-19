---
layout: page
title: "Q179897: Memory Management Problems on Computers with Pentium Processors"
permalink: /kb/179/Q179897/
---

## Q179897: Memory Management Problems on Computers with Pentium Processors

	Article: Q179897
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 diskmem win95 kbHardware kbDiskMemorykbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run multiple programs (especially MS-DOS-based programs) on a
	Windows-based computer that has insufficient system memory (RAM) and contains an
	Intel Pentium Pro or Pentium II processor, information in memory may become
	unavailable or damaged, leading to unpredictable results. For example, copy and
	compare operations may not work consistently.
	
	
	CAUSE
	=====
	
	This behavior is an indirect result of certain performance optimizations in the
	Intel Pentium Pro and Pentium II processors. These optimizations affect how the
	Windows 95 Virtual Machine Manager (VMM) performs certain memory operations,
	such as determining which sections of memory are not in use and can be safely
	freed. As a result, the Virtual Machine Manager may free the wrong pages in
	memory, leading to the symptoms described earlier.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw osr2 diskmem win95 kbHardware kbDiskMemory kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
