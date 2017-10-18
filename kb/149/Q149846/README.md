---
layout: page
title: "Q149846: RPC Program Fails When Server Run Down Occurs"
permalink: kb/149/Q149846/
---

## Q149846: RPC Program Fails When Server Run Down Occurs

	Article: Q149846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbProgramming win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a multithreaded program that uses the RPC (Remote Procedure Call)
	API, or multiple RPC programs concurrently, one of the following error messages
	may occur:
	
	  - Invalid Handle
	
	  - RPC Failure
	
	When these error messages occur, the connection to the RPC server is lost.
	
	CAUSE
	=====
	
	These errors may occur when all the following conditions exist:
	
	- The RPC server is a DCE (Distributed Computing Environment) server running a
	  non-Microsoft operating system such as OS/2 or UNIX.
	
	- There are multiple RPC sockets (threads) being opened, either by a
	  multithreaded RPC client program, or by multiple RPC client programs.
	
	- At least one of the RPC threads has been idle long enough for the RPC server
	  to time out and automatically terminate (run down) the thread.
	
	Under these conditions, the Windows 95 RPC run-time libraries do not properly
	shut down the RPC connection when the server times out and calls its rundown
	procedures. Subsequent attempts to create a new RPC connection or access an
	existing connection fail, generating one of the error messages listed above.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Note that this symptom does not occur if Microsoft Windows NT is used as the RPC
	server, because Windows NT does not time out and call rundown procedures on the
	RPC connection as described above.
	
	A similar update for this issue also exists for Windows NT RPC clients. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151714 NT RPC Client May Fail Against DCE Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbProgramming win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
