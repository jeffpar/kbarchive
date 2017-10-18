---
layout: page
title: "Q155738: Application Coding Error Results in Error 10038 (WSAENOTSOCK)"
permalink: kb/155/Q155738/
---

## Q155738: Application Coding Error Results in Error 10038 (WSAENOTSOCK)

	Article: Q155738
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows sockets application may return error 10038 (WSAENOTSOCK) in response
	to various socket calls.
	
	CAUSE
	=====
	
	The Windows NT error "OBJECT_TYPE_MISMATCH" is mapped to Windows Sockets error
	"WSAENOTSOCK" by the Microsoft Winsock implementation. One possible cause of
	"OBJECT_TYPE_MISMATCH" error is an application written in such a manner as to
	close a given handle more than once. Errors are more likely to occur on
	multiprocessor computers.
	
	Application developers programming with the Win32 API set are instructed to be
	careful to close all of their handles when they are finished with them. However,
	if an application is written and linked with C runtime libraries, some of the C
	runtime code automatically cleans up resources such as handles to a thread. If
	the application developer closes a thread handle specifically, then calls
	_endthread() to terminate the thread, the _endthread routine also attempts to
	close the same handle. If the handle has been re-used at that point (by another
	thread), it will become an invalid thread and is likely to cause errors such as
	"INVALID_HANDLE" or "OBJECT_TYPE_MISMATCH."
	
	RESOLUTION
	==========
	
	Consult with the application vendor to determine whether there is a possibility
	of the same handle being closed twice.
	
	Additional query words: socket select 10038 wsaenotsock
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
