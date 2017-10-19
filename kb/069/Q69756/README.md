---
layout: page
title: "Q69756: Avoid Low-Level Operations in Windows Programs: Use DLLs"
permalink: /kb/069/Q69756/
---

## Q69756: Avoid Low-Level Operations in Windows Programs: Use DLLs

	Article: Q69756
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	
	In the Microsoft Windows environment, an application should perform
	only those operations specified by the Windows application programming
	interface (API). Specifically, a Windows-based application should not:
	
	1. Use processor I/O instructions.
	
	2. Issue software interrupts.
	
	3. Install interrupt handlers.
	
	These three operations should be done only in a Windows dynamic-link
	library (DLL).
	
	The Windows API has been designed to let programmers write applications in
	a hardware-independent fashion. However, some programmers may have noticed
	that the three operations mentioned previously can be performed from both
	Windows DLLs and applications.
	
	Therefore, it may be tempting to avoid coding these operations in a
	DLL, especially if the DLL's only purpose is to execute functions that
	seem to operate correctly in an application. However, Microsoft
	strongly recommends against this practice, for the following two
	reasons:
	
	1. Future Compatibility. Changes may be made to Windows in future versions such
	  that applications that perform these operations directly may not execute
	  reliably.
	
	2. Portability. Applications that perform these operations directly will be more
	  difficult to port to different hardware platforms (such as Windows running on
	  a different machine architecture).
	
	In summary, executing low-level operations from within a Windows-based
	application may, in a future version of Windows, produce unexpected
	results, generate unnecessary maintenance overhead, and have severe
	impact on the potential lifetime of that application. To avoid these
	problems, machine-specific functionality should be coded in a DLL.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
