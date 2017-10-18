---
layout: page
title: "Q216169: How to Change the Default Event Viewer Log File Location"
permalink: kb/216/Q216169/
---

## Q216169: How to Change the Default Event Viewer Log File Location

	Article: Q216169
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Event Viewer tool maintains three log files containing the System,
	Application, and Security event messages. However, the Event Viewer tool may not
	be able to write event messages to one of these log files if there is no disk
	space available. To increase the disk space that can be used for these log
	files, you can modify their default location.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To modify the location of the Event Viewer log files:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click "HKEY_LOCAL_ MACHINE on Local Machine".
	
	   - For the System log:
	
	     a. Click the System\CurrentControlSet\Services\EventLog\System folder, and
	        then double-click the FILE value.
	
	     b. Type the new drive and path in the String box, include the file name
	        \SysEvent.Evt, and then click OK. The default path is
	        %SystemRoot%\System32\Config\SysEvent.Evt
	
	   - For the Application log:
	
	     a. Click the System\CurrentControlSet\Services\EventLog\Application
	        folder, and then double-click the FILE value.
	
	     b. Type the new drive and path in the String box, include the file name
	        \AppEvent.Evt, and then click OK. The default path is
	        %SystemRoot%\System32\Config\AppEvent.Evt
	
	   - For the Security log:
	
	     a. Click the System\CurrentControlSet\Services\EventLog\Security folder,
	        and then double-click the FILE value.
	
	     b. Type the new drive and path in the String box, include the file name
	        \SecEvent.Evt, and then click OK. The default path is
	        %SystemRoot%\System32\Config\SecEvent.Evt
	
	3. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbWinAdvServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :2000,4.0,4.0a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
