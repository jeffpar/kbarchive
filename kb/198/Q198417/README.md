---
layout: page
title: "Q198417: Message &quot;At Least One Service Failed...&quot; After Running Sysprep"
permalink: /kb/198/Q198417/
---

## Q198417: Message &quot;At Least One Service Failed...&quot; After Running Sysprep

	Article: Q198417
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After the mini-wizard has run on a system that was prepared for duplication by
	using the System Preparation Tool (Sysprep), the following message is
	displayed:
	
	  At least one service failed to start.
	
	On closer inspection of the event viewer, the following event is posted:
	
	  Event ID: 7000 Source: Service Control Manager Description: "The
	  Psysdup2 service failed to start due to the following error: The system
	  cannot find the file specified"
	
	CAUSE
	=====
	
	This problem occurs because one of the System Preparation tools is missing from
	the folder from which Sysprep.exe was run. When Sysprep is run, this file gets
	copied over to the %SystemRoot%\System32 subfolder and gets added to the list of
	services.
	
	If the file does not exist in the source folder from which Sysprep was run, the
	service entry in HKEY_LOCAL_MACHINE\System\CurrentControlSet will still be added
	for Psysdup2.exe to start but will fail to start.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, re-expand the System Preparation tools from the source
	compact disc to the directory and make sure the Psysdup2.exe file exists. Then,
	rerun Sysprep.exe on the master system.
	
	Psysdup2.exe is used after the user first logon request to change the Product ID
	of Office 97.
	
	If Office 97 is not being used on the target systems and hard disks have already
	been duplicated, you can disable the service on each system by doing the
	following:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry
	  subkey:
	
	  HKEY_LOCAL_MACHINE \system\currentControlSet\Services\Psysdup2
	
	2. Double click the "Start: REG_DWORD: 0x2" value, which will bring up the
	  "DWORD Editor" dialog box.
	
	3. Change the value from 2 to 4, and then click OK; this disables the service.
	
	4. Close Regedt32.exe and restart the system
	
	MORE INFORMATION
	================
	
	For more information on the System Preparation tools and other deployment
	information, please see the following Microsoft Web site:
	
	  http://www.microsoft.com/ntworkstation
	
	Additional query words: Sysclone Sysprep Psysdup2.exe Psydup2.exe
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
