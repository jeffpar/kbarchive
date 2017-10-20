---
layout: page
title: "Q72884: Profiler Won't Profile DLLs That Are Freed, Then Reloaded"
permalink: /kb/072/Q72884/
---

## Q72884: Profiler Won't Profile DLLs That Are Freed, Then Reloaded

{% raw %}

	Article: Q72884
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for OS/2 
	- Microsoft Source Profiler for Windows 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	The Microsoft Source Profiler version can profile the first instance of any and
	all DLLs (dynamic-link libraries) in a Windows or OS/2 application, but it
	cannot continue to collect statistics for a dynamically loaded DLL that is freed
	and then reloaded.
	
	MORE INFORMATION
	================
	
	DLLs that are dynamically loaded with LoadLibrary() under Windows, or
	DosLoadModule() under OS/2, and that are freed and then reloaded, should not be
	profiled because the results will not be correct.
	
	Under Windows, this behavior can be observed by attempting to profile code that
	performs the following actions:
	
	1. Dynamically loads a DLL with LoadLibrary().
	
	2. Frees the DLL with FreeLibrary().
	
	3. Reloads the DLL again with LoadLibrary().
	
	Similarly, under OS/2, this behavior can be observed by attempting to profile
	code that performs these actions:
	
	1. Dynamically loads a DLL with DosLoadModule().
	
	2. Frees the DLL with DosFreeModule().
	
	3. Reloads the DLL again with DosLoadModule().
	
	There are currently no workarounds for this limitation. The ability to handle
	dynamically reloaded DLLs under Windows is being considered for a future version
	of the Profiler. There are no current plans for an OS/2 version that can handle
	dynamically reloaded DLLs due to the lack of a message from the operating system
	when a DLL has been freed.
	
	Additional query words: 1.10 1.20 1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
