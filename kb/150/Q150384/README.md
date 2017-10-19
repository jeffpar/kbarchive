---
layout: page
title: "Q150384: Shared File Access Delayed If File Is Open"
permalink: /kb/150/Q150384/
---

## Q150384: Shared File Access Delayed If File Is Open

	Article: Q150384
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file on a Windows NT-based computer over the network and
	the file is open on another client computer with sharing restrictions, there is
	a delay of approximately one second before the sharing violation error message
	is returned. If the client application is accessing a number of files on the
	server, then this delay may become significant.
	
	NOTE: This behavior is not observed when accessing files on LAN Manager or
	Windows for Workgroups shares.
	
	CAUSE
	=====
	
	There is an optimization in the Windows NT Server service which delays returning
	a status to the client while it attempts to resolve the sharing violation
	internally.
	
	RESOLUTION
	==========
	
	Sometimes it may be preferable to disable this optimization. In order to do this
	it is necessary to make two registry additions which are detailed below.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe.)
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services \LanmanServer\Parameters
	
	3. Add the following:
	
	  Value Name: SharingViolationDelay
	  Data Type: REG_DWORD
	  Data: 0 (Default: 200)
	
	  and:
	
	  Value Name: SharingViolationRetries
	  Data Type: REG_DWORD
	  Data: 0 (Default: 5)
	
	4. Shut down and restart Windows NT.
	
	MORE INFORMATION
	================
	
	When the Server service receives a request for an already open file, it receives
	a sharing violation from the local server. It then waits for a short period
	before trying to access the file again. This process is repeated a number of
	times, internally to the server, in an attempt to resolve the problem before
	returning to the client.
	
	This feature is controlled by two registry values which are detailed below.
	
	- SharingViolationDelay
	
	  Default 200 (msec)
	
	  This is the time the server waits between retries. If too low, the server
	  receives multiple sharing violations. If too high, the Server Message Block
	  (SMB) response to the client might be delayed more than is necessary, thus
	  reducing performance.
	
	- SharingViolationRetries
	
	  Default 5
	
	  This is the number of times the server retries an SMB requested operation when
	  it receives a sharing violation from the local server's file system.
	  Operations affected include open, rename, and delete. This minimizes network
	  traffic because if the server can resolve the sharing violation locally, the
	  remote client need not retry the operation.
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
