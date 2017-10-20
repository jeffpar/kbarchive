---
layout: page
title: "Q197006: New User Accounts May Not Be Permitted to Use User Profiles"
permalink: /kb/197/Q197006/
---

## Q197006: New User Accounts May Not Be Permitted to Use User Profiles

{% raw %}

	Article: Q197006
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you create a new user account that uses an existing user profile, you may
	experience any of the following issues:
	
	- The user cannot use existing user profile settings.
	
	- When you start Microsoft Exchange or Microsoft Outlook, you may receive the
	  following error message:
	
	  There is not enough memory or system resources to complete this
	  action. Try closing some windows and performing the action again.
	
	- The incorrect wallpaper is displayed.
	
	CAUSE
	=====
	
	This issue occurs because the new user account has a different Security ID (SID)
	than the user account that you used to create the existing user profile.
	
	RESOLUTION
	==========
	
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
	
	To work around this issue, you can add the new user account to the local
	Administrators group to allow full permissions to the new user account:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  User Manager (or User Manager For Domains).
	
	2. In the Groups column, double-click Administrators, and then click Add.
	
	3. In the Names box, double-click the user name you want to add, and then click
	  OK.
	
	4. Click OK, and then quit User Manager.
	
	To resolve this issue, give the user account permission to the appropriate
	HKEY_USERS key in the registry:
	
	1. Click Start, click Run, and then type "regedt32.exe" (without the quotation
	  marks).
	
	2. On the Window menu, click HKEY_USERS On Local Machine, and then click the
	  appropriate user SID.
	
	3. On the Security menu, click Permissions, and then click Add.
	
	4. In the Names box, double-click the user name that you want to add, click Full
	  Control in the Type Of Access box, and then click OK.
	
	  NOTE: If the name you want is not listed in the Users box, click Show Users to
	  display additional users.
	
	5. Click to select the "In the Replace Permission on Existing Subkeys" check
	  box, click OK, and then quit Registry Editor.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: rights restricted original
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
