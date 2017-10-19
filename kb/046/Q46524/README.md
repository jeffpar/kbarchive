---
layout: page
title: "Q46524: PRB: File Handles Cannot Be Shared Between Programs or DLLs"
permalink: /kb/046/Q46524/
---

## Q46524: PRB: File Handles Cannot Be Shared Between Programs or DLLs

	Article: Q46524
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
	
	Assume that there are two applications, A and B. Application A calls a
	Dynamic-Link Library (DLL) to open a file. The file pointer (FILE *pFile) is
	stored on the data segment of the DLL. Application A then calls a function in
	the DLL to read the record "n" of this file properly. However, if Application B
	calls the same function in the DLL to read the same record, the record appears
	as random characters.
	
	RESOLUTION
	==========
	
	File handles cannot be shared between applications or DLLs. Each application has
	its own file handle table. When an fopen() call is made, a file is taken out of
	the application's program segment prefix (PSP). For two separate applications to
	use the same file, each application must make its own fopen() call, file I/O
	calls, and fclose() call.
	
	Additional query words: 3.00 no32bi 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
