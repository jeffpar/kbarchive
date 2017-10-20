---
layout: page
title: "Q287395: Err Msg: TCP/IP Reported Error 2 : Could Not Find File Specified"
permalink: /kb/287/Q287395/
---

## Q287395: Err Msg: TCP/IP Reported Error 2 : Could Not Find File Specified

{% raw %}

	Article: Q287395
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install Point-to-Point Tunneling Protocol (PPTP) on a computer that is
	running Windows NT Workstation or Server 4.0, you may receive the following
	error message when you try to connect by using dial-up networking (DUN):
	
	  TCP/IP Reported Error 2 : Could Not Find File Specified
	
	The error message appears when the Registering Your Computer on the Network
	dialog box appears. In addition, the Network tool in Control Panel lists a
	nonexistent network adapter, Ncpa.cpl, that has a numeric value, for example 10.
	
	RESOLUTION
	==========
	
	To resolve this behavior, delete the nonexistent network adapter from the
	registry:
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Windows NT\CurrentVersion\NetworkCards
	
	3. Locate and delete the empty folder that bears the name of the nonexistent
	  network adapter, Ncpa.cpl.
	
	4. Quit Registry Editor, and then restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q169116 Troubleshooting TCP/IP CP Error 2 ERROR_FILE_NOT_FOUND
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
