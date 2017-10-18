---
layout: page
title: "Q11509: Definition of Different Types of Libraries in Windows"
permalink: kb/011/Q11509/
---

## Q11509: Definition of Different Types of Libraries in Windows

	Article: Q11509
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three different types of libraries used in Windows. These three types
	of libraries are defined as follows:
	
	1. Object libraries are produced by LIB.EXE, and consist of Intel object code;
	  for example, SWLIBC.LIB (the W implies the objects were compiled using
	  Windows prolog conventions).
	
	  Object libraries, which are sometimes more accurately called static link
	  libraries, are the libraries that contain object code. These libraries are
	  used at link time to resolve statically linked calls.
	
	2. DLLs (Dynamic-Link Libraries) are produced by IMPLIB.EXE and LIB.EXE, and
	  contain dynamic-link records derived from GDI.DEF, USER.DEF, and KERNEL.DEF.
	  They also contain the Windows startup routine, WINSTART.OBJ, and any routines
	  necessary to override C run-time functions (for example, calloc and malloc);
	  that is, Windows-specific run-time functions.
	
	  NOTE: The term Dynamic-Link Library or DLL is usually used to describe the
	  actual Windows executable that implements a particular API.
	
	  The term import library is usually used to describe the product of the IMPLIB
	  utility. This library is used to resolve references to DLL exports at the
	  time the application is linked.
	
	3. Executable libraries are produced by the Microsoft linker program (LINK.EXE),
	  and use the keyword LIBRARY in the .DEF file. They contain sharable Windows
	  code, for example, GDI.EXE, USER.EXE, or KERNEL.EXE.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
