---
layout: page
title: "Q87451: PRB: 386MAX May Conflict with Profiler When Running PLIST"
permalink: kb/087/Q87451/
---

## Q87451: PRB: 386MAX May Conflict with Profiler When Running PLIST

	Article: Q87451
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.2,1.3
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for MS-DOS, versions 1.0, 1.2, 1.3 
	- Microsoft Source Profiler for Windows, versions 1.0, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	Profiling MS-DOS or Windows applications under 386MAX version 6.01 from Qualitas
	may hang the machine during execution of Microsoft Source Profiler versions 1.0,
	1.2, and 1.3 when running the PLIST command.
	
	CAUSE
	=====
	
	The problem is due to a clash in memory usage between PLIST and 386MAX version
	6.01 under some installations.
	
	RESOLUTION
	==========
	
	Removing the vgaswap statement from the 386MAX.PRO file in the 386MAX directory
	may solve this problem. If the problem persists or if a different problem
	arises, call Qualitas TECHnical Support at (301) 907-7400.
	
	Additional query words: 1.00 1.20 1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbSProfiler100 kbSProfiler130 kbSProfiler120 kbSProfiler100DOS kbSProfiler120DOS kbSProfiler130DOS
	Version           : :1.0,1.2,1.3
	
	=============================================================================
	
