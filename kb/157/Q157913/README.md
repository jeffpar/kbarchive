---
layout: page
title: "Q157913: Services Set to Interact With Desktop May Fail to Start"
permalink: kb/157/Q157913/
---

## Q157913: Services Set to Interact With Desktop May Fail to Start

	Article: Q157913
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 09-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are several services that are configured to start with the interactive
	desktop. If a user logs on immediately after Windows NT starts and then
	immediately logs off, a service configured to interact with the desktop may fail
	to start. A message may appear that states:
	
	  The application failed to initialize because the window station is shutting
	  down.
	
	After you log on a second time, Service Control Manager (SCM) logs two events in
	the system event log:
	
	- ID 7009 Timeout (120000 milliseconds) waiting for service to connect.
	
	- ID 7000: The <service name> service failed to start due to the
	  following error:
	
	  The service did not respond to the start or control request in a timely
	  fashion.
	
	CAUSE
	=====
	
	After SCM calls CreateProcess to start the service process, it expects the
	service to connect to a named pipe provided by SCM. A service does this by
	calling StartServiceCtrlDispatcher early after startup.
	
	When a user logs off, the Win32 subsystem marks the window station as Pending
	Shutdown. If Kernel32.dll finds this flag, it does not load. The service process
	never gets to the point where it can register with SCM. SCM does not check for
	this situation and, therefore, logs the events mentioned above. SCM does not try
	to start the service again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	click the following article number to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	MORE INFORMATION
	================
	
	You can work around this problem by not logging off immediately after logging
	on.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  QQ327618 INFO: Security, Services and the Interactive Desktop
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
