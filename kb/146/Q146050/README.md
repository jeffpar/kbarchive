---
layout: page
title: "Q146050: Modifying Ntuser.dat Hive So New Users Get Defined Settings"
permalink: kb/146/Q146050/
---

## Q146050: Modifying Ntuser.dat Hive So New Users Get Defined Settings

	Article: Q146050
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Under Windows NT 4.0 you can modify the Ntuser.dat hive so that all newly
	created users inherit certain settings. Anything that can be defined or modified
	in HKEY_CURRENT_USER can also be set in the Ntuser.dat hive (for example,
	international settings, colors, screen savers, sounds, and cursors).
	
	MORE INFORMATION
	================
	
	The default user profile is created when Windows NT is installed. The first time
	a user logs on to a workstation (or domain), the default user profile is copied
	to the user profile.
	
	The default language in this profile is set to U.S. English. Every new user that
	logs on will have U.S. English selected even if the administrator has set the
	system default locale to a different language.
	
	To change the default language or any other settings for NEW users, you can use
	the registry editor to change the default user profile.
	
	This profile is stored on the local workstation at:
	
	  %SystemRoot%\Profiles\Default User
	
	with the name: Ntuser.dat.
	
	If you want to create a default profile for all new users in a Windows NT domain,
	the default user profile can be copied to the Netlogon share on the primary
	domain controller. A subdirectory must be created within the Netlogon share
	called "Default User" and the default profile copied to that subdirectory. The
	easiest way to do this is to create a customized profile and copy that profile
	using the System tool in Control Panel and clicking the User Profiles tab. The
	Everyone group should be given permission to use the profile. This profile
	should be copied to every validating domain controller. The Replication service
	can be used for this.
	
	The Netlogon share is normally located at
	C:\WINNT\System32\Repl\Export\Scripts on the primary domain controller (PDC).
	
	To view or modify the Ntuser.dat hive, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor by selecting Run from the File menu of Program Manager,
	  typing "regedt32" (without the quotation marks), and pressing ENTER.
	
	2. Select the "HKEY_USERS on Local Machine" window.
	
	3. From the Registry menu, choose Load Hive.
	
	4. From the C:\WINNT\Profiles\Default User (or equivalent) directory, select the
	  Ntuser.dat file.
	
	5. In the Key Name field, type "NTUSER" (without the quotation marks).
	
	6. Select the NTUSER registry key.
	
	7. Modify the Default User subkeys as desired.
	
	  NOTE: If you add new keys, make sure that everyone has at least read access to
	  the new key. If not, it won't be copied to the user profile when a new user
	  logs on.
	
	  To change the access right of the key, highlight the key, then select
	  Permissions from the Security menu. If not already included, add the Everyone
	  group with at least read access.
	
	8. From the Registry menu, choose Unload Hive, and choose the Yes button.
	
	9. Quit Registry Editor.
	
	Now when a user log on to the system for the first time, the new user's hive will
	contain the modified information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
