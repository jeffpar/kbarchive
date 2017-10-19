---
layout: page
title: "Q168487: Quota Advisor May Cause Clients to Drop Connections."
permalink: /kb/168/Q168487/
---

## Q168487: Quota Advisor May Cause Clients to Drop Connections.

	Article: Q168487
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Thirty minutes to an hour after your Windows NT server computer is started,
	clients start to have connectivity problems with the server. When accessing
	resources they may receive the error:
	
	  The remote computer is not available.
	
	-OR-
	
	Clicking on the server in Network Neighborhood may give the error:
	
	  remote computer is not accessible.
	
	Restarting the server temporarily resolves the problem, but it occurs again.
	
	You can still ping the server by name and/or TCP/IP address.
	
	After disabling the Quota Advisor services in Control Panel/Services, the errors
	still occur.
	
	CAUSE
	=====
	
	Quota Advisor may be the cause of the problem. There is a QAFilter device in
	Control Panel/Devices that also needs to be disabled. Uninstalling the software
	with the Uninstall program may not completely remove the software.
	
	The problem has been seen with Quota Advisor (build 77).
	
	RESOLUTION
	==========
	
	Disable the following services in Control Panel/Services:
	
	  QAPolicy
	  QAServer
	
	Disable the following device in Control Panel/Devices:
	
	  QAFilter
	
	MORE INFORMATION
	================
	
	To remove the software:
	
	- Run the Uninstall program for Quota Advisor.
	
	- Make sure the following registry keys are removed:
	
	  WARNING: Using Registry Editor incorrectly may cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	     HKEY_LOCAL_MACHINE\Software\Quinn
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\QAFilter
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\QAPolicy
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\QAServer
	
	The vendor says the latest version of Quota Advisor (build 78) will fix this
	problem.
	
	Quota Advisor is a third party product manufactured by W. Quinn Associates, Inc.,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: drop connections client prodnt
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	
	=============================================================================
	
