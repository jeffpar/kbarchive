---
layout: page
title: "Q73035: Onboard System Memory Cache May Affect Profile Times"
permalink: kb/073/Q73035/
---

## Q73035: Onboard System Memory Cache May Affect Profile Times

	Article: Q73035
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for MS-DOS 
	- Microsoft Source Profiler for Windows 
	- Microsoft Source Profiler for OS/2 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	The Microsoft Source Profiler may display erratic execution times on any system
	with an Intel 80386 or 80486 processor that has a built-in memory cache. This is
	noted in the Operating-System Notes in the "Microsoft Source Profiler User's
	Guide" and in the Profiler online help. The only real workaround is to disable
	the cache, because there is no way to control what is cached and what is not
	cached.
	
	MORE INFORMATION
	================
	
	The erratic profile results are caused by the way a memory cache of this type
	operates. If code from the program being profiled is in the cache, the execution
	times will be less than normal. On the other hand, it's likely that the cache
	will be dominated by the Profiler itself, since the instructions from the
	Profiler's own code will usually be in the cache. This may then result in
	increased times for the program being profiled. Caching will also affect small
	programs more than large ones due to the successful hit rate in the cache.
	
	Because memory caching hinders accurate profiling, a system without a cache
	should be used while profiling to ensure the most reliable times. In any case,
	the overall effect of a cached system should be that it runs faster, so it
	should not be necessary to consider this net gain when profiling.
	
	Additional query words: 1.00 1.00a 1.20 1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch
	Version           : :
	
	=============================================================================
	
