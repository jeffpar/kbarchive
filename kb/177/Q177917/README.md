---
layout: page
title: "Q177917: Initializing a DLL Using DLLMain Optional Entry Point"
permalink: kb/177/Q177917/
---

## Q177917: Initializing a DLL Using DLLMain Optional Entry Point

	Article: Q177917
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Win32, all dynamic link libraries (DLLs) may contain an optional entry- point
	function (usually called DllMain) that is called for both initialization and
	termination. This gives you an opportunity to allocate or release additional
	resources as needed. Windows calls the entry-point function in four situations:
	process attach, process detach, thread attach, and thread detach.
	
	MORE INFORMATION
	================
	
	The DllEntryPoint function is an optional method of entry into a DLL. If the
	function is used, it is called by the system when processes and threads are
	initialized and terminated, or upon calls to the LoadLibrary and FreeLibrary
	functions.
	
	The body of your DLL entry-point function should perform only simple
	initialization tasks, such as setting up thread local storage (TLS), creating
	synchronization objects, and opening files. You must not call LoadLibrary in the
	entry-point function, because you may create dependency loops in the DLL load
	order. This can result in a DLL being used before the system has carried out its
	initialization code.
	
	Calling Windows functions other than TLS, synchronization, and file functions may
	result in problems that are difficult to diagnose. For example, calling User,
	Shell, COM, RPC, and Windows Sockets functions (or any functions that call these
	functions) can cause access violation errors, because their DLLs call
	LoadLibrary to load other system components.
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
