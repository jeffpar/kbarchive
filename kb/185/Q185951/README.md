---
layout: page
title: "Q185951: Security Fix Prevents Account Operators from Managing Accounts"
permalink: /kb/185/Q185951/
---

## Q185951: Security Fix Prevents Account Operators from Managing Accounts

	Article: Q185951
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you install the Red Button security fix that was posted to Microsoft's FTP
	site, Account Operators are no longer able to administer domain accounts. When
	you attempt to access User Manager for Domains from any computer other than the
	primary domain controller (PDC), you get the following error message:
	
	  Access Denied. Do you want to select another domain to administer?
	
	MORE INFORMATION
	================
	
	The hotfix corrected the issue of users without administrative privileges being
	able to access the registry.
	
	The hotfix consisted of the executable Secfix_i.exe for Intel-based computers,
	and Secfix-a.exe for Alpha computers. The fix is installed by double-clicking
	the executable file. The installation created an $NtUninstallSecurityFix$
	directory that contained the following files:
	
	  Lsasrv.dll
	  Msv1_0.dll
	  Netui1.dll
	  Netui2.dll
	  Srv.sys
	  Srvsvc
	  Uninst.inf
	
	Although this directory was created, there is no way to uninstall the hotfix.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To restore the Accounts Operator's ability to manage domain accounts from
	machines other than the PDC, give Read privileges to the following registry key
	on the PDC:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers
	\winreg
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This problem is also corrected by installing Service Pack 3.
	
	Additional query words: SP3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
