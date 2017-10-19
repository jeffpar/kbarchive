---
layout: page
title: "Q175647: Event ID: 1011 Missing Library File Dfsinstr.dll"
permalink: /kb/175/Q175647/
---

## Q175647: Event ID: 1011 Missing Library File Dfsinstr.dll

	Article: Q175647
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, System Logs generate the following event:
	
	  Event ID: 1011
	  Source: Perflib
	
	  The library file "dfsinstr.dll" specified for the "dfs" service could
	  not be opened. Performance data for this service will not be available.
	  Status code is data DWORD 0.
	
	RESOLUTION
	==========
	
	Upgrade to Directory File System (DFS) version 4.1. When you upgrade, it removes
	the registry entries that cause this message to show up in the event log.
	
	MORE INFORMATION
	================
	
	To verify the version of your Windows NT Directory File System (DFS)
	installation, perform the following steps:
	
	1. In Windows NT Explorer, right-click the Dfsadmin.exe file (or any file
	  located in systemroot\system32\Dfs matching Dfs*.exe, Dfs*.sys, or Dfs*.dll).
	
	2. Click Properties, and then click the Version tab. The file version displayed
	  should be 4.10.
	
	Note: The original Directory File System (DFS) Version 4.0 has a file version
	mask of 5.00.14xx.1.
	
	The log entries are informational.
	
	For more information about Directory File System (DFS), see the Microsoft
	Internet web site at:
	
	http:/www.microsoft.com/
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
