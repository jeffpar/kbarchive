---
layout: page
title: "Q234647: Windows 95/98 Clients Hang with &quot;Mprexe.exe Not Responding&quot;"
permalink: kb/234/Q234647/
---

## Q234647: Windows 95/98 Clients Hang with &quot;Mprexe.exe Not Responding&quot;

	Article: Q234647
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,7.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Windows 95 clients using Microsoft distributed file system (Dfs) or Windows 98
	clients may stop responding (hang) in any of the following situations:
	
	- Windows 95 Dfs clients or Windows 98 clients hang while logging on to a
	  Windows NT 4.0 domain controller that has a Dfs root share and SQL 7.0
	  installed.
	
	- After successfully logging on to a domain, Windows 95 Dfs clients and Windows
	  98 clients hang when trying to connect to or browse a Windows NT 4.0 domain
	  controller (or member server) that has a Dfs root share and SQL 7.0
	  installed.
	
	- Windows 95 Dfs clients or Windows 98 clients hang while logging on to a
	  Windows NT 4.0 domain controller, if the user has a logon script that maps a
	  drive to a Windows NT 4.0 domain controller (or member server) that has a Dfs
	  root share and SQL 7.0 installed.
	
	When a user is trying to log on, Windows 98-based computers may display Creating
	User Profiles and Loading System Policies dialog boxes, and then hang. If you
	press CTRL+ALT+DELETE, you see that Mprexe.exe is not responding.
	
	NOTE: This problem has also been observed in environments without SQL or Dfs; the
	problem was resolved using the solution listed above. Mprexe.exe may not be
	responding for many underlying reasons. This article addresses one possible
	solution.
	
	CAUSE
	=====
	
	SQL 7.0 installs the following key on the SQL server, which Windows 98 clients
	and Windows 95 Dfs clients cannot process correctly:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer\Parameters\MaxMpxCt
	
	This key has a REG_DWORD value of x1FF.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) on the Windows NT 4.0 server that has
	  the Dfs root share and SQL 7.0 installed.
	
	2. Locate the REG_DWORD x1FF value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer\Parameters\MaxMpxCt
	
	3. On the Edit menu, click DWORD, type "1FE" (without the quotation marks),
	  click Hex, and then click OK.
	
	4. Quit Registry Editor.
	
	5. Reboot the computer.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem does not affect Windows NT Workstation or Windows 95 clients that
	are not Dfs-aware.
	
	If you click Cancel at the domain logon prompt, you can log on locally.
	
	Other possible solutions include:
	
	- Move the Dfs root share to a member server or domain controller that does not
	  have SQL 7.0 installed.
	
	- Install the NWLINK protocol on all servers and clients.
	
	- If you stop the Netlogon service on the domain controller that is running Dfs
	  and SQL 7.0, you should be able to log on to the domain (provided that there
	  are other domain controllers that can be reached by the client) but unable to
	  browse the domain controller running Dfs and SQL 7.0.
	
	- Apply SQL Server 7.0 Service Pack 1 (SP1).
	
	
	Additional query words: freezes service rootshare stops hangs mprexe
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbSQLServSearch kbAudDeveloper kbWin95search kbWin98search kbSQLServ700 kbZNotKeyword3 kbWin98
	Version           : :4.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
