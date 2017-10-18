---
layout: page
title: "Q172650: Utility Returns Runtime Error when Run with AT command"
permalink: kb/172/Q172650/
---

## Q172650: Utility Returns Runtime Error when Run with AT command

	Article: Q172650
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run certain third-party utilities, such as DumpACL from
	Somarsoft, using the AT Scheduler in Windows NT 4.0, you may receive a Visual
	C++ runtime error or nothing will happen when the scheduled job runs.
	
	This problem does not exist under Windows NT 3.51.
	
	CAUSE
	=====
	
	Some utilities, like DumpAcl, make too many interactive API calls to be used
	under the Windows NT 4.0 AT Scheduler service.
	
	RESOLUTION
	==========
	
	Run the utility without using the AT Scheduler.
	
	MORE INFORMATION
	================
	
	DumpACL is a third-party product manufactured by Somarsoft, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: prodnt dump acl run time somersoft 3rd party produces
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
