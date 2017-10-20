---
layout: page
title: "Q100635: INFO: Dynamically Loading Dynamic-Link Libraries in Windows NT"
permalink: /kb/100/Q100635/
---

## Q100635: INFO: Dynamically Loading Dynamic-Link Libraries in Windows NT

{% raw %}

	Article: Q100635
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the LoadLibrary() function in 16-bit Windows or in OS/2, the
	operating system loads the specified Dynamic-Link Library (DLL) only once.
	Therefore, the DLL has the same address in every process. However, dynamic
	loading of DLLs works differently in Windows NT.
	
	The operating system loads a DLL separately for each process because each
	application has its own address space in Windows NT; the address space is shared
	in 16-bit Windows and in OS/2. Because the operating system must map pages into
	the address space for each process, the DLL may be loaded at different addresses
	in different processes. The memory manager optimizes loading DLLs such that if
	two processes share the same pages from the same DLL image, they share the same
	physical memory.
	
	Each DLL has a preferred base address, specified at link time. If the address
	space range from the preferred base address to the base address plus the image
	size is not available, then the operating system loads the DLL somewhere else in
	memory and applies fixups to its addresses. There is no method to specify the
	load address at load time.
	
	To summarize, the system performs the following steps at load time:
	
	1. Examines the image and determines its preferred base address and required
	  size.
	
	2. Finds the address space required and maps the image, copy-on-write, from the
	  file.
	
	3. Applies internal fixups if the image is not at its preferred base address.
	
	4. Fixes up all dynamic link imports by placing the correct address for each
	  imported function into the appropriate entry of the Import Address Table.
	  This table stores 32-bit addresses contiguously; to store up to 1024 imported
	  functions requires it to dirty only one page of memory.
	
	MORE INFORMATION
	================
	
	The pages that contain code are shared, using a copy-on-write protection scheme.
	Copy-on-write means that a page is read-only; however, if a process writes to
	the page and access violation does not occur. Instead, the memory manager makes
	a private copy of the page for the application's use and allows the write to
	proceed. For example, if two processes start from the same .EXE file, each
	process initially has all pages mapped from the .EXE file copy-on-write. As the
	two processes proceed to modify pages, each one receives a private copy of the
	modified pages. The memory manager is free to optimize unmodified pages and to
	map the same physical memory into the address space of both processes. Modified
	pages are swapped to and from the page file instead of the .EXE file.
	
	Two types of fixups are available. The first is used for the address of an
	imported function. According to the Portable Executable specification, this type
	of fixup is stored in the Import Address Table (IAT), an array of 32-bit
	function pointers, one for each imported function. The IAT has its own page or
	pages because it is always modified. A call to an imported function is actually
	an indirect call through the appropriate entry in the IAT. When an image is
	loaded at its preferred base address, imported function fixups are the only
	fixups required.
	
	Note that an optimization is available whereby each import library exports a
	32-bit number that corresponds with each function in addition to any name or
	ordinal number. This serves as a "hint" to speed the fixups performed at load
	time. If the hints in the application and in the loaded DLL do not match, the
	loader performs a binary search based on the function name.
	
	The other fixup type is required for references to code or data in the image when
	the image is loaded somewhere other than at its preferred base address. When the
	memory manager removes a page from memory, it checks to see of the page has been
	modified. If not, the page retains its copy-on-write mapping and it can be
	discarded from memory. Otherwise, it must be written to the page file so the
	modified page can be recovered from the page file rather than from the
	executable image file.
	
	Even if an application calls LoadLibrary() for a DLL more than once, the DLL
	entry point, DllMain(), is called only once and only one DLL_PROCESS_ATTACH
	entry is created. Similarly, if the application calls FreeLibrary() more than
	once, DLL_PROCESS_DETACH occurs only for the call in which the DLL reference
	count returns to zero.
	
	Global instance data for the DLL is stored on a per-process basis (only one data
	set per process). If it is necessary to store global instance data for each
	LoadLibrary() call performed in one process, consider using thread local storage
	(TLS) as an alternative. If you use multiple threads of execution, TLS provides
	unique data storage for each ThreadID value. This process requires very little
	overhead for the DLL; it must only create a global TLS index at process
	initialization. At thread initialization, use GlobalAlloc(), HeapAlloc(),
	LocalAlloc(), functions in the C run-time library, or another method to allocate
	a block of memory and call the TlsSetValue() function to store a pointer to the
	memory using the global TLS index value. Win32 internally stores each thread's
	pointer indexed by TLS index and ThreadID to provide thread-specific storage.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :1.0,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
