---
layout: page
title: "Q87346: FIX: PR1428 Illegal Breakpoint Error Profiling P-code"
permalink: /kb/087/Q87346/
---

## Q87346: FIX: PR1428 Illegal Breakpoint Error Profiling P-code

{% raw %}

	Article: Q87346
	Product(s): Microsoft Programming Utilities
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for OS/2, version 1.2 
	- Microsoft Source Profiler for MS-DOS, version 1.2 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	Running the Microsoft Source Profiler PROFILE command in the MS-DOS or Microsoft
	Windows operating system on an application that contains P-code causes the
	following error:
	
	  PROFILE: fatal error PR1428: A user-defined breakpoint was found at location
	
	CAUSE
	=====
	
	The fatal error PR1428 is generated because the P-code breakpoint instruction is
	implemented as Interrupt 03h, which cannot be profiled (as stated on pages 73
	and 75 of the Source Profiler "User's Guide" for version 1.2). Using Interrupt
	03h in an application conflicts with the way that the Source Profile itself uses
	Interrupt 03h.
	
	RESOLUTION
	==========
	
	To avoid this fatal error, profile the application after removing all the P-
	code from the profiled region.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Source Profiler
	version 1.2 for MS-DOS and Windows. This problem was corrected in Microsoft
	Source Profiler version 1.3.
	
	Additional query words: 1.20 1.30
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbSProfiler120DOS kbSProfiler120OS2
	Version           : :1.2
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
