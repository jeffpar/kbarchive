---
layout: page
title: "Q165846: WinNT Err: The System Cannot Find the File Specified with RAS"
permalink: /kb/165/Q165846/
---

## Q165846: WinNT Err: The System Cannot Find the File Specified with RAS

{% raw %}

	Article: Q165846
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to connect a Remote Access Service (RAS) client to a Windows NT
	RAS Server computer, the connection attempt fails and you may receive any of the
	following error messages:
	
	  Checking network protocol connections
	  TCP/IP cp reported error 2.
	  The system cannot find the file specified
	
	or
	
	  Event ID 4106
	  The Dial-up connection 'SpryNet or whom ever using' could not be made.
	  The error reported was: [2]
	  The system could not find the file specified.
	
	CAUSE
	=====
	
	An incorrect registry entry refers to another registry entry that does not
	exist.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	On the RAS client, there are numbered entries for each installed network adapter
	under the following registry key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	\CurrentVersion\NetworkCards
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Under normal circumstances, each entry will have a ServiceName value that refers
	to a registry key under the following key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Check each NetworkCards entry and confirm that there is a corresponding
	  Services entry. If a NetworkCards entry refers to a service that does not
	  have a corresponding Services key, delete the entire numbered key (Do not
	  delete any other NetworkCards entries, and do not delete the entire
	  NetworkCards key).
	
	3. Quit Registry Editor and retry the RAS connection.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting TCP/IP error 2 messages, refer
	to the following article in the Microsoft Knowledge Base:
	
	  Q169116 Troubleshooting TCP/IP CP Error 2 ERROR_FILE_NOT_FOUND
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
