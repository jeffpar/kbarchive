---
layout: page
title: "Q189224: TCP/IP Printing Service Hangs If Started Before Spooler Service"
permalink: /kb/189/Q189224/
---

## Q189224: TCP/IP Printing Service Hangs If Started Before Spooler Service

{% raw %}

	Article: Q189224
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 3, the TCP/IP Printing service stops
	responding (hangs) if it is started before the Spooler service is started. In
	addition, the Stop/Start button in the Services tool in Control Panel is
	unavailable when TCP/IP printing is selected and one or more of the following
	error messages may occur:
	
	  Could not start the TCP print server service on (servername)
	
	  Or
	
	  Error 2186: The service is not responding to the control function.
	
	CAUSE
	=====
	
	The TCP/IP Printing service depends on the Spooler service and may become
	nonresponsive when attempted to run without the spooler service running first.
	
	RESOLUTION
	==========
	
	You can work around this problem by starting the Spooler service prior to the
	TCP/IP Printing service.
	
	You can resolve this problem by adding the following registry key to the TCP/IP
	Printing service:
	
	WARNING: Using Registry Editor incorrectly can cause serous problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LPDSVC
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: DependOnService
	  Data Type:  REG_MULTI_SZ
	  Value:      Spooler
	
	4. Quit Registry Editor.
	
	When you stop the spooler service, it will also stop the TCP/IP Printing service.
	When you restart the TCP/IP Printing service, without starting the spooler
	service, it will start the spooler service first.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: sp3 UNIX hang
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
