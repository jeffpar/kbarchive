---
layout: page
title: "Q192674: Terminal Server Administrator retains Domain Controller Icon"
permalink: /kb/192/Q192674/
---

## Q192674: Terminal Server Administrator retains Domain Controller Icon

{% raw %}

	Article: Q192674
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if a problem occurs. For information about how to do this, view the "Restoring Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If Terminal Server is a member server in a domain and you take it out and put it
	in a workgroup, Terminal Server Administrator retains the domain. This makes it
	appear that the server is still a member of the domain.
	
	Steps to Reproduce
	------------------
	
	1. Install Terminal Server as a member server and join a domain.
	
	2. Click Start/Programs/Administrative Tools/Terminal Server Administrator.
	
	3. Notice that the name of your domain appears under All Listed Servers.
	
	4. Remove the Terminal Server from the domain and put it into a workgroup.
	
	  To do this:
	
	  1. Go to Control Panel and select Network.
	
	  2. In Network Properties, select the Identification tab.
	
	  3. Click the Change button.
	
	  4. Select the option button for Workgroup, and type "Workgroup." (without the
	     quotation marks)
	
	  5. Click OK in the Identification Changes window.
	
	  6. Click OK in the Network window.
	
	  7. A message will appear saying, "Welcome to the Workgroup workgroup."
	
	  8. Restart the computer.
	
	  9. Click Start/Programs/Administrative Tools/Terminal Server Administrator.
	
	You will still see the domain listed, but the computer is no longer a member of
	this domain.
	
	RESOLUTION
	==========
	
	You can remove this domain icon from Terminal Server Administrator by editing
	the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	3. Delete the CACHEPRIMARYDOMAIN value.
	
	4. Exit Registry editor and restart the computer.
	
	5. Click Start/Programs/Administrative Tools/Terminal Server Administrator. The
	  Terminal Server will now appear only under "Workgroup."
	
	This value will be recreated if member server joins a domain again.
	
	Additional query words: terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
