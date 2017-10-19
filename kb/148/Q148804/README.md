---
layout: page
title: "Q148804: Err Msg: An Exception 0E Has Occurred in Rpcss.exe..."
permalink: /kb/148/Q148804/
---

## Q148804: Err Msg: An Exception 0E Has Occurred in Rpcss.exe...

	Article: Q148804
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you run a program that uses RPC
	(remote procedure calls):
	
	  An exception 0E has occurred in Rpcss.exe...
	
	CAUSE
	=====
	
	The Windows 95 RPC endpoint mapper service, Rpcss.exe, may not correctly handle
	reentrancy (more than one pending request). If the RPC endpoint mapper is
	concurrently accessed by two processes, or twice within one process, an invalid
	page fault (exception 0E) may occur in Rpcss.exe.
	
	This behavior is somewhat timing-dependent, and may not occur consistently on all
	computers.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Since this behavior is somewhat timing-dependent, debug versions of the program
	or Windows 95 may not exhibit this behavior at all.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
