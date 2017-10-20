---
layout: page
title: "Q158899: Prompted for Password When Restoring Persistent Connections"
permalink: /kb/158/Q158899/
---

## Q158899: Prompted for Password When Restoring Persistent Connections

{% raw %}

	Article: Q158899
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you have persistent network connections for a server-based profile, you will
	be prompted for a password for the user that first created the profile.
	
	CAUSE
	=====
	
	Windows NT 4.0 stores the User Credentials for the user that creates a
	persistent connection to a drive.
	
	A problem occurs when an administrator creates a server-based profile template
	with persistent connections and copies this template so that other users can
	load the same profile. When a user logs on to the network and loads the profile,
	they will be prompted for the originating user's password when trying to restore
	persistent connections.
	
	
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Before copying the profile, edit the registry value listed below:
	
	  \HKEY_CURRENT_USER\Network\<Drive Letter>
	
	  Value: Username:REG_SZ: <Domainname>\<User>
	
	3. Delete the <Domainname>\<User> entry for the value.
	
	  NOTE: **Do not delete the value, just the string entered for it.**
	
	4. Quit Registry Editor and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: password server drive profiles
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
