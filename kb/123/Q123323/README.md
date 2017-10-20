---
layout: page
title: "Q123323: WINS Database May Default to USERS&#92;DEFAULT"
permalink: /kb/123/Q123323/
---

## Q123323: WINS Database May Default to USERS&#92;DEFAULT

{% raw %}

	Article: Q123323
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When you set up a Windows Internet Name Service (WINS) Administrator to run
	using an account other than the system account, the default database
	directory for the WINS.MDB file is USERS\DEFAULT instead of
	%SYSTEMROOT%\SYSTEM32\WINS, as the TCPIP.HLP file and Chapter 5 of the
	"Windows NT Server TCP/IP" guide imply.
	
	The WINS parameter for the path name of the WINS.MDB files is not in the
	Registry when WINS is set up.
	
	Regardless of the directory that the database is created in, you can set up
	the WINS Server to use another directory for the database. Use Registry
	Editor to enter the following subkey into the Registry
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	  Subkey Name = DbFileNm
	  Data Type = REG_EXPAND_SZ
	  Range = path name
	  Default = %SYSTEMROOT%\SYSTEM32\WINS\WINS.MDB
	
	to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Parameters
	
	If the WINS server is already active, use the Backup database function in
	WINS Administrator prior to making the change to the Registry. After you
	change the Registry, use the Restore database function as outlined in the
	"Windows NT Server TCP/IP" guide on page 139.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
