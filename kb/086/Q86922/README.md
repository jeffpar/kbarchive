---
layout: page
title: "Q86922: Using LINK 5.3 to Create Applications for Real Mode"
permalink: /kb/086/Q86922/
---

## Q86922: Using LINK 5.3 to Create Applications for Real Mode

	Article: Q86922
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	The Microsoft C/C++ Optimizing Compiler version 7.0 includes the Microsoft
	Segmented Executable Linker (LINK) version 5.3. By default, when LINK
	version 5.3 links an application for Microsoft Windows, the executable file
	is compatible only with protected mode.
	
	To override this default, specify the REALMODE directive in the
	application's module definition (DEF) file. Note that Windows 3.1 no longer
	supports real mode applications.
	
	The REALMODE directive is documented on page 617 of the "Microsoft C/C++
	Environment and Tools" version 7.0 manual.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
