---
layout: page
title: "Q241110: &quot;Computer Name Not Found&quot; Using Performance Monitor"
permalink: /kb/241/Q241110/
---

## Q241110: &quot;Computer Name Not Found&quot; Using Performance Monitor

{% raw %}

	Article: Q241110
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to run Performance Monitor locally or to monitor a remote
	Windows NT-based computer, you may receive the following error message:
	
	  Computer name not found.
	
	CAUSE
	=====
	
	This error message can occur for any of the following reasons:
	
	- Client network connectivity problems
	
	- NetBIOS name resolution problems
	
	- Problems with registry permissions
	
	- Corrupted settings files for Performance Monitor
	
	RESOLUTION
	==========
	
	Check NetBIOS Name Resolution
	-----------------------------
	
	Check NetBIOS name resolution and network connectivity first by typing the
	following command at a command prompt
	
	  net view \\<computername>
	
	where <computername> is the computer to which you are trying to connect
	with Performance Monitor.
	
	Issue this command over the network and at the target computer. If the command
	works successfully and you see a list of the shared resources on the server, try
	the following method.
	
	Check Registry Permissions
	--------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Start Registry Editor (Regedt32.exe) and check the permissions on the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\Winreg
	
	Administrators should have full control by default.
	
	For additional information about modifying permissions, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q164018 Controlling Remote Performance Monitor Access to WinNT Servers
	
	Check or Replace Files
	----------------------
	
	1. In the %SystemRoot%\System32 folder, rename the Perfc009.dat file to
	  Perfc009.old. Rename the Perfh009.dat file to Perfh009.old.
	
	2. Copy the Perfc009.da_ and Perfh009.da_ files from the Windows NT 4.0 CD-ROM
	  to the %SystemRoot%\System32 folder on the local computer.
	
	3. At a command prompt, type the following lines in the %SystemRoot%\System32
	  folder, pressing ENTER after each line:
	
	  Expand.exe Perfc009.da_ Perfc009.dat
	  Expand.exe Perfh009.da_ Perfh009.dat
	
	NOTE: If replacing the Perfc009.dat file corrects the problem, you must reinstall
	your counters for any program that you have installed previously and want to
	monitor. Alternately, if you have a known good backup of this file you may be
	able to restore functionality by restoring the backup copy avoiding having to
	reinstall all of your counters.
	For additional information about Microsoft Exchange counters, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q156494 Restoring Lost Performance Counters for Exchange
	
	For additional information about Microsoft SQL Server counters, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q227662 SQL Performance Monitor Counters Missing
	
	Follow the steps in the "Problems with Performance Monitor Files" section.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
