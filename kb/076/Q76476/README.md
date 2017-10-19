---
layout: page
title: "Q76476: General Information Regarding Dynamic-Link Libraries"
permalink: /kb/076/Q76476/
---

## Q76476: General Information Regarding Dynamic-Link Libraries

	Article: Q76476
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dynamic-link libraries (DLLs) are very useful tools in Windows programming. Many
	applications can use the code in a DLL, meaning that only one copy of the code
	is resident in the system. It is possible to update a DLL without changing
	applications that use the DLL, as long as the interface to the functions in the
	DLL does not change.
	
	This article provides some general information regarding DLLs.
	
	MORE INFORMATION
	================
	
	The small and medium memory models are the preferred memory models for Windows
	3.0 applications and DLLs. By default, the compact and large memory models
	create multiple data segments. These data segments are fixed in the memory space
	and cause difficulties for all applications running in Windows. Fixed segments
	in standard and enhanced modes can cause fragmentation of the heap. Because of a
	problem in Windows 3.0, all fixed segments are also page-locked, and can
	overburden the enhanced-mode virtual memory manager.
	
	In Windows 3.1 with the Microsoft C/C++ and later compilers, the large model is
	the preferred method since the problem with Windows 3.0 has been fixed in
	Windows 3.1.
	
	If an application requires the large memory model, a method can be used to
	unpage-lock the extra data segments of the DLL. For additional information on
	large-model programming, query on the following words in this Knowledge Base:
	
	  " large and model and protected " (without the quotation marks)
	
	However, if the language compiler used supports the large memory model with a
	single data segment, this method is not required.
	
	When compiling a DLL with the Microsoft C Compiler, specify the -Aw switch so
	that the code generator does not assume that the application's stack segment is
	equal to its data segment (SS != DS). The generated code will not automatically
	load DS at each module entry point. The -An switch should be used to specify
	near data, and the -As or -Al switch to specify near or far code, respectively.
	
	When writing code in DLLs, it is important to remember that SS != DS. This is an
	issue when an application function passes a pointer to one of its local
	variables to the DLL function. In Microsoft C, all near pointers are assumed to
	be relative to DS. The way to avoid problems is to either:
	
	- Use a function prototype declaring the parameter to be a FAR pointer.
	
	- Explicitly cast the parameter to FAR.
	
	When using Microsoft C run-time functions, specify the model independent
	functions; for example: _fmemcpy, _fmemset.
	
	The -Gw compiler switch generates the Windows prolog and epilog code. When a
	function is called, the prolog saves the current data segment on the stack. When
	memory moves in real mode, Windows "walks" the stack and changes the stored DS
	values to reflect the memory motion.
	
	The prolog code is not required when a DLL will be used only in protected mode.
	There are two restrictions when choosing not to use the -Gw switch in protected
	mode:
	
	1. Windows debuggers will not be able to properly provide stack trace
	  information.
	
	2. Exported functions must include the _loadds attribute in the declaration of
	  the function. The following is an example declaration:
	
	        BOOL FAR PASCAL _loadds ExportedFunction(VOID)
	
	DLL functions that will be called from applications should be declared with the
	FAR modifier because an intersegment jump is required from the application.
	Functions that are only called from within the DLL may be declared NEAR. The
	PASCAL or _cdecl calling conventions may be used as appropriate. Functions
	called from Windows must be declared using the PASCAL calling convention.
	
	When exporting _cdecl functions in the module definition (DEF) file, one must
	maintain the case of the function name and use an underscore prefix. For
	example:
	
	  EXPORTS
	     WEP                  @1  RESIDENTNAME
	     _ExportedFunction    @2
	
	A DLL is limited to one instance. The DATA SINGLE or DATA NONE statements can be
	used in the DEF file to specify that the DLL should have a data segment of its
	own or not. Because a DLL does not have a stack of its own, automatic variables
	are allocated from the stack of the calling application.
	
	DLLs can maintain data by using the local or global memory allocation routines.
	In most cases, memory allocated by GlobalAlloc is owned by the calling task.
	Global memory allocated by DLLs with GMEM_DDESHARE specified is owned by the
	DLL. When using local memory management functions, allocations are performed
	within the current data segment. Therefore, the handles returned from these
	calls are only valid when processed by the DLL.
	
	Naming the segments within the DLL, keeping segment size less than 16K and
	specifying the segment options PRELOAD, LOADONCALL, MOVEABLE, and DISCARDABLE,
	as appropriate, will ease memory requirements and simplify the task of the
	memory manager.
	
	There are three methods to access the functions in the DLL:
	
	1. List the names of the functions in the IMPORTS section in the application's
	  DEF file.
	
	2. Link the application to an import library generated from the DLL's DEF file
	  using the IMPLIB utility.
	
	3. Use the LoadLibrary and GetProcAddress functions to load the library and
	  retrieve a pointer to the function, respectively. This dynamic-dynamic
	  linking method is the most powerful.
	
	These methods are documented in Section 20.4.2 of the "Microsoft Windows Guide to
	Programming," pages 20-31 through 20-34.
	
	For additional information regarding linking DLL routines, please see page 178 of
	the Microsoft Visual C++ "C Language Reference".
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
