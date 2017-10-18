---
layout: page
title: "Q187146: DCOM Clients Cannot Create Objects"
permalink: kb/187/Q187146/
---

## Q187146: DCOM Clients Cannot Create Objects

	Article: Q187146
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Distributed Component Object Model (DCOM) client programs that run inside
	Terminal Server sessions other than the console cannot create objects of classes
	implemented inside DCOM servers running as Terminal Server services.
	
	You may also receive occurrences of event ID 10010 from DCOM in the Event Viewer
	with the following description:
	
	  The server <clsid> did not register with DCOM within the required
	  timeout.
	
	  -or-
	
	You may also receive the following error message:
	
	  CoGetClassObject failed - Server Execution failed CO_E_SERVER_EXEC_FAILURE
	  0x80080005
	
	CAUSE
	=====
	
	This behavior is because those object classes are considered as user globals by
	DCOM and Terminal Server.
	
	However, DCOM and Terminal Server provide the ability to register DCOM classes as
	system globals. But, in the case of classes implemented in services, they should
	be considered as system globals, unless they had been explicitly registered as
	user globals.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To explicitly register a DCOM class as a system global, use the following steps:
	
	1. If it does not exist, create the following registry key:
	
	  HKLM\Software\Microsoft\Windows NT\CurrentVersion\Terminal
	  Server\Compatibility\CLSID
	
	2. Create a subkey with {CLSID} as its name, where the CLSID is the class
	  identifier of the DCOM class that is to be a system global. For example, a
	  subkey would be:
	
	  {41116C00-8B90-101B-96CD-00AA003B14FC}
	
	3. Under the above subkey, create fSystemGlobalClass as the value name with a
	  REG_DWORD type and set its value data to 1.
	
	Or, you can upgrade to Microsoft Windows 2000 Server with Terminal Services,
	which does not have the same restriction.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce this, use the DCOM sample named "ATLDRAW" provided with the ActiveX
	Template Library (ATL).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
