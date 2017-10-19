---
layout: page
title: "Q238166: Administrator Is Unable to Delete Local Profile in Windows NT"
permalink: /kb/238/Q238166/
---

## Q238166: Administrator Is Unable to Delete Local Profile in Windows NT

	Article: Q238166
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When an administrator attempts to delete a local user profile in Windows NT 4.0,
	one of the following error messages may be displayed.
	
	- The following error message may be displayed when the administrator tries to
	  delete the profile for a user account used to start a service:
	
	  Can not delete Ntuser.dat. There has been sharing violation.
	  The source or destination file may be in use.
	
	- The following error message may be displayed when the administrator tries to
	  delete the profile folder of a user who is currently logged on:
	
	  "Profile Folder" is a windows system folder and is required for Windows to
	  run properly. It cannot be deleted.
	
	- The following error message may be displayed when the administrator tries to
	  delete a profile in Windows NT Server, Terminal Server Edition, for a user
	  who currently has a Terminal Server session:
	
	  Can not remove desktop folder. There has been a sharing violation. The source
	  or destination file may be in use.
	
	CAUSE
	=====
	
	These error messages occur when the profile is in use. The user might still be
	logged on or the user's session might not have closed completely.
	
	RESOLUTION
	==========
	
	To resolve this issue, log that user account off, and/or stop any services that
	are configured to start with that user account.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	For additional information about user profiles that appear to not be unloading
	properly on Terminal Server, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q234606 Terminal Server User Profiles Do Not Unload
	
	You can determine which user profiles are loaded by looking at the Security
	Identifiers (SIDs) in the HKEY_USERS subtree in the registry.
	
	To View the SIDs Loaded in the HKEY_USERS Subtree
	-------------------------------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. On the Window menu, click HKEY_USERS. A default folder and the SIDs of the
	  user or users (in Terminal Server) logged on to the computer is displayed.
	  The SIDs for user accounts used for services are also displayed.
	
	To Determine Which SID Corresponds to a User Account
	----------------------------------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. On the Window menu, click HKEY_LOCAL_MACHINE.
	
	3. Double-click each of the following keys to to open them:
	
	  Software
	  Microsoft
	  Windows NT
	  CurrentVersion
	  ProfileList
	
	A list of all of the SIDs for users who have logged on to the computer once are
	displayed under the ProfileList key. The ProfileImagePath value is displayed in
	the right pane, which lists the user's profile folder name, which generally
	corresponds with the user account name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
