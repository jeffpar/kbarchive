---
layout: page
title: "Q162657: Choosing Default Domain Name for RAS Client Authentication"
permalink: kb/162/Q162657/
---

## Q162657: Choosing Default Domain Name for RAS Client Authentication

	Article: Q162657
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	SUMMARY
	=======
	
	When Remote Access Clients connect to a Windows NT 4.0 Remote Access Server
	(RAS) computer without specifying a domain name, the local domain will by
	default be used to authenticate the username and password.
	
	A change has been made in Windows NT 4.0 Service Pack 3 that allows the
	administrator to specify the domain used to log on such users by setting a
	parameter in the registry. To set this parameter, complete the following steps:
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \RASMAN\PPP
	
	2. Choose Edit Value from the Edit menu and use the following information:
	
	  Value Name: DefaultDomain
	  Data Type: REG_SZ
	  Value: DomainName (not longer than 15 chars)
	
	3. Restart the computer for the new setting to take effect.
	
	
	Additional query words: prodnt logon login
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
