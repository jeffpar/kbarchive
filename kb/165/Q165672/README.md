---
layout: page
title: "Q165672: Batch File Containing UNC Connection Fails When Run from PIF"
permalink: kb/165/Q165672/
---

## Q165672: Batch File Containing UNC Connection Fails When Run from PIF

	Article: Q165672
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to call a batch file from a .pif file containing a UNC path, you may
	receive "File not found," "Path not found," or other various error messages. If
	the batch file is run from a command prompt, it completes as expected.
	
	RESOLUTION
	==========
	
	Do not call the batch file from a .pif file. If this is not an option, use a
	mapped drive letter instead of a UNC path. There is currently no known
	workaround if a mapped drive letter cannot be used (for example, when you copy
	<what> to a shared printer).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5x and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
