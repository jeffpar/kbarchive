---
layout: page
title: "Q174951: Err Msg: Error Copying File Cannot Copy Config Access Is Denied"
permalink: /kb/174/Q174951/
---

## Q174951: Err Msg: Error Copying File Cannot Copy Config Access Is Denied

	Article: Q174951
	Product(s): Microsoft Windows NT
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Zero Administration Kit for Windows 95, you may
	receive one or more of the following error messages:
	
	   - Error Copying File
	  Cannot copy config: Access is denied
	  Make sure the disk is not full or write-protected and that the file is
	  not currently in use.
	
	- A failure occurred while copying Zero Administration Kit for Windows 95
	  components from the CD to the location you specified. Please check that
	  you have enough disk space prior to running Setup again.
	
	- Error Copying File
	  Cannot copy config: cannot create or replace. File does not exist.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The account that is logged on and is installing the Zero Administration Kit
	  for Windows 95, has insufficient permissions to the NETLOGON share or the
	  network share location for policy files that you specified during setup.
	
	- You do not have "full" access to the NETLOGON share folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the account or group (with at least change
	permissions) to the NETLOGON share or the network share specified during
	installation. For example, if the domain controller computer name is ALPHA, the
	network share location would be \\ALPHA\NETLOGON. On ALPHA, the default NETLOGON
	share would be located at:
	
	  %systemroot%\system32\repl\import\scripts.
	
	Add the appropriate permissions needed for the user or group installing Zero
	Administration Kit for Windows 95.
	
	NOTE: You can use this method, or you can set the NETLOGON share to "full"
	access.
	
	Additional query words: prodnt zak admin 0
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 1.00
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
