---
layout: page
title: "Q168722: GSNW May Create an Unnecessary DependOnService to LanManSer"
permalink: /kb/168/Q168722/
---

## Q168722: GSNW May Create an Unnecessary DependOnService to LanManSer

	Article: Q168722
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have installed Gateway Services for NetWare (GSNW) on a computer running
	Windows NT Server 3.51 Service Pack 5 and Microsoft Exchange Server 4.0. NWLink
	is not an installed network protocol and there are no NetWare servers installed
	on the LAN.
	
	If GSNW is installed on the server under these conditions, you may notice that
	incoming mail may stop being delivered and the Windows NT server may begins to
	experience repeated, but dramatic slowdowns in performance.
	
	CAUSE
	=====
	
	GSNW sets up dependency with the Server Service (LanManServer). This dependency
	is documented in the following Microsoft Knowledge Base article:
	
	  Q123763 Share Names Displayed as DELETED in GSNW
	
	Any attempt to remove GSNW while the dependency exists will result in a warning
	message indicating that some services will no longer be available after removal.
	The services indicated are as follows:
	
	  Computer Browser
	  Directory Replicator
	  Net Logon
	  Server
	  Microsoft Exchange Directory
	  Microsoft Exchange Information Store
	  Microsoft Exchange Internet Mail Connector
	  Microsoft Exchange Message Transfer Agent
	  Microsoft Exchange System Attendant
	
	A search of the registry indicates that each of the Microsoft Exchange services
	depend on the System Agent, that in turn depends on the Server service. The
	other services noted in the warning message (that is, Computer Browser,
	Directory Replicator, and Net Logon) all depend upon the Server Service.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Perform the following steps to remove GSNW:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following registry key:
	
	     H_KEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer
	
	2. Remove the NWCworkstation entry from DependOnService.
	
	3. Shutdown and restart your computer.
	
	4. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	5. Click the Services tab, click Gateway Services for NetWare, click Remove, and
	  then click OK.
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbprb kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
