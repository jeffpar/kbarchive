---
layout: page
title: "Q241813: 1106: SNMP Service Is Ignoring Extension Agent DLL W3pmib.dll"
permalink: /kb/241/Q241813/
---

## Q241813: 1106: SNMP Service Is Ignoring Extension Agent DLL W3pmib.dll

	Article: Q241813
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The following error message may be logged in the Event log:
	
	  Event log error:
	  Event ID: 1106 - Source: SNMP
	  The SNMP service is ignoring extension agent dll winnt\system32\w3pmib.dll
	  because the file missing or incorrectly configured.
	
	CAUSE
	=====
	
	This behavior can occur when the SNMP service tries to load the W3pmib.dll
	dynamic-link library (DLL), but cannot because the World Wide Web service
	(W3svc) has not yet started. The W3pmib.dll DLL requires the World Wide Web
	service (W3svc) to be running.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, add the World Wide Web service (W3svc) to the Depend On
	Service list for SNMP:
	
	1. Use Registry Editor (Regedt32.exe, not Regedit.exe) to open the following
	  key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNMP
	
	2. Double-click Depend on Service.
	
	3. Press ENTER to move to the next line (make sure that nothing is selected).
	
	4. Type "W3SVC" (without the quotation marks). Do not press ENTER.
	
	5. Click OK.
	
	6. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbProxyServSearch kbProxyServ200
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
