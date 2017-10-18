---
layout: page
title: "Q107174: PRB: Not Enough Space for Environment"
permalink: kb/107/Q107174/
---

## Q107174: PRB: Not Enough Space for Environment

	Article: Q107174
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows-based application is started, it fails to load. While running
	under the debug version of Windows, one or both of the following debug messages
	are displayed on the debug terminal:
	
	  LocalAlloc Failed
	
	  -or-
	
	  GlobalAlloc Failed
	
	Then, Windows generates the following unrecoverable application error (UAE): "Not
	enough space for Environment."
	
	CAUSE
	=====
	
	The initial size specified for the application's local heap in the DEF file is
	too small to contain the local allocation for the environment.
	
	RESOLUTION
	==========
	
	When the Windows loader loads an application, it also stores a copy of the
	MS-DOS environment strings (such as the PATH string, and so forth) in the
	application's DGROUP. In general, the space needed to store this environment
	table could be around 200 to 300 bytes, but it could vary depending on the
	environment variables in the system. The loader will try to allocate space for
	the environment table using LocalAlloc(), and this call will fail if there is
	not enough space in the local heap. In such a case, Windows automatically tries
	to expand the local heap by doing a Gloabal(Re)Alloc. Because the maximum size
	for the DGROUP is 64K, the GlobalAlloc will fail if the loader tries to grow the
	DGROUP beyond the 64K limit. This will happen when the size of the DGROUP is
	close to the limit of 64K and there is not enough space in the application's
	DGROUP for Windows to expand the local heap in it. In such a case, the
	application's DGROUP must be cleaned up to allow more space for the local heap.
	A few ways to do this are:
	
	- Reduce the application's stack size using the STACKSIZE statement in the DEF
	  file. A recommended stack size is between 5K and 10K. You can also determine
	  exactly how much stack space your application needs and use that optimized
	  value in your DEF file. For more information, query in the Microsoft
	  Knowledge Base on the following words:
	
	  " stack pStackMin " (without the quotation marks)
	
	
	- Move string constants from your DGROUP into string tables in a DEF file. Move
	  large static arrays from your DGROUP to dynamically allocated memory using
	  GlobalAlloc.
	
	- If Microsoft C/C++ or Visual C++ compiler is being used, some of the data
	  from the DGROUP can be moved into an extra data segment by using the /Gt
	  compiler option (refer to pages 522-523 of the Microsoft C/C++ "Environment
	  and Tools" manual). However, note that an application with multiple data
	  segments will be restricted to only one instance. For more information on
	  this problem, please query in the Microsoft Knowledge Base on the following
	  words:
	
	  " large model C/C++ " (without the quotation marks)
	
	
	Additional query words: no32bit 3.10 gpf gp-fault gp fault
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
