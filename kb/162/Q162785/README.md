---
layout: page
title: "Q162785: RPC Sample File Helloc.exe Requires Full Redirector"
permalink: kb/162/Q162785/
---

## Q162785: RPC Sample File Helloc.exe Requires Full Redirector

	Article: Q162785
	Product(s): Microsoft Windows NT
	Version(s): MS-DOS:3.0; NT:; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Win32 Software Development Kit (SDK), on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Win32 Software Development Kit (SDK) for Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If run from Microsoft Network Client 3.0, the RPC client sample file Helloc.exe
	fails with the following or a similar message:
	
	  RpcStringBindingCompose returned 0x0
	  pszStringBinding = ncacn_np:rxobot_serv[\\pipe\\hello]
	  RpcBindingFromStringBinding returned 0x0
	  Rpc Binding Handle = 3e5a0016
	  Calling the remote procedure 'HelloProc'
	  Print the string 'hello, world' on the server
	  Runtime reported exception 0x1b = 27
	  RpcStringFree returned 0x0
	  RpcBindingFree returned 0x0
	
	CAUSE
	=====
	
	Either the Network Client is running the Basic Redirector, or the logged on user
	cannot connect to the IPC$ directory on the server.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Run SETUP on the client and configure it to run the Full Redirector.
	
	-or-
	
	- Make sure that the user who is logged on at the client can perform the
	  following operation:
	
	  NET USE \\<server>\IPC$
	
	  NOTE: It is not necessary to make an IPC$ connection before running
	  Helloc.exe, but Helloc.exe will fail if either the client or the user is not
	  capable of making an IPC$ connection.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbZNotKeyword kbSDKSearch kbNetworkClientSearch kbWin32sSearch
	Version           : MS-DOS:3.0; NT:; WINDOWS:
	Hardware          : x86
	
	=============================================================================
	
