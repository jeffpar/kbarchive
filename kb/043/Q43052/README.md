---
layout: page
title: "Q43052: Windows Does Not Support OS/2 Family API Calls"
permalink: /kb/043/Q43052/
---

## Q43052: Windows Does Not Support OS/2 Family API Calls

	Article: Q43052
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows and Windows 95 do not support 16-bit Windows-based applications coded
	with OS/2 Family API (FAPI) calls.
	
	MORE INFORMATION
	================
	
	FAPI works in the following manner:
	
	1. The code contains references to OS/2 FAPI calls (such as DosOpen, DosRead,
	  and so on).
	
	2. When the program is loaded into OS/2 protected mode, the system loader
	  dynamically links the FAPI calls to the OS/2 system-services DLLs
	  (Dynamic-Link Libraries).
	
	3. When the program is loaded into real mode (MS-DOS or OS/2 compatibility box),
	  what actually gets loaded is a small program called the "FAPI Loader and
	  Linker." It is this program that loads the real code; it dynamically links
	  the FAPI calls to a special library of support routines that translate FAPI
	  calls into 80x86 code and MS-DOS interrupts (INT 21H Function xx).
	
	This process is also described on Page 251 of Gordon Letwin's book titled "Inside
	OS/2" (Microsoft Press, 1988).
	
	FAPI works well for programs that need to run in MS-DOS and OS/2 protected mode.
	The problem is that Windows uses the "New EXE Format" for programs, bypassing
	the standard MS-DOS entry point. For example, if a Windows program is run
	outside of Windows (in MS-DOS), the following message appears, and the program
	terminates:
	
	  This program requires Microsoft Windows
	
	MS-DOS is not responsible for this message; the Windows program itself is
	responsible. The way the Windows program works is very similar to OS/2: it uses
	dual entry points into the .EXE file. In MS-DOS, a short program that prints the
	above message runs; however, in Windows, a true Windows-based application runs
	using the other entry point in the .EXE file.
	
	Therefore, the problem is narrowed down to the following: if the FAPI Loader and
	Linker program is run using the standard MS-DOS .EXE file entry point, and
	Windows starts an application using a different entry point, the dynamic linking
	of the FAPI routines will not occur.
	
	Therefore, FAPI calls cannot be used in Windows-based applications.
	
	To avoid this problem, do the following:
	
	Instead of using low-level MS-DOS calls (INT 21H Function xx) in a Windows-based
	application and OS/2 API calls (DosRead, DosOpen, and so on) in a Presentation
	Manager (PM) application, use the C run-time I/O routines for all of these
	applications.
	
	This will work because the Microsoft C Compiler and the run-time libraries supply
	versions of the libraries that work in both OS/2 and MS-DOS. By moving C code to
	PM and to Windows, it will not be necessary to rewrite it, and the appropriate
	conversion routines will be supplied at link time.
	
	Be sure not to use high-level (stream) I/O routines in C with Windows; just use
	the low-level (handles) versions. This topic is discussed in Charles Petzold's
	book titled "Programming Windows" (Microsoft Press, 1988), and in other articles
	in the Microsoft Knowledge Base.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
