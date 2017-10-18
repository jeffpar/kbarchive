---
layout: page
title: "Q100319: Err Msg: 530...Home Directory Inaccessible"
permalink: kb/100/Q100319/
---

## Q100319: Err Msg: 530...Home Directory Inaccessible

	Article: Q100319
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an FTP (file transfer protocol) client logs into a Windows NT FTP Server,
	the following message is displayed:
	
	  530 User <username> cannot log in, home directory inaccessible.
	
	CAUSE
	=====
	
	This error message occurs when the home directory on the Windows NT FTP Server
	cannot be found.
	
	RESOLUTION
	==========
	
	To fix this problem:
	
	1. From the FTP Server machine, run Control Panel and choose Networks. Choose
	  FTP Server and then Configure to find out what directory is set to be the
	  home directory for the FTP service. If that directory does not exist on the
	  server, create it or change the path entry to reflect a directory that
	  already exists on the drive.
	
	2. Start the Server portion of Control Panel and choose Security to check the
	  permissions on the home directory. In order for users to log in, Allow Read
	  must be selected.
	
	NOTE: By default, an FTP client is validated against the local accounts database.
	To enable a Windows NT Server domain member (non-DC) to validate ftp clients
	against the domain accounts data base, you must add the DefaultLogonDomain
	parameter (value type REG_SZ) to the following registry key location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\FTPSVC\Parameters
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. To do this, run the Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the key:
	
	  \System\CurrentControlSet\Services\FTPSVC\Parameters
	
	3. Choose ADD VALUE from the Edit menu. Enter the value name as the name of the
	  domain you want to use for validation. The Data type is REG_SZ.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
