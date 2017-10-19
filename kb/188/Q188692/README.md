---
layout: page
title: "Q188692: How to Prevent Certain Folders from Uploading to Central Profile"
permalink: /kb/188/Q188692/
---

## Q188692: How to Prevent Certain Folders from Uploading to Central Profile

	Article: Q188692
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Service Pack 4 for Windows NT 4.0 adds to the user profile replication algorithm
	the ability to prevent certain folders from being uploaded to the central user
	profile. This is especially helpful to prevent the Temporary Internet Files from
	uploading at logoff time with the rest of the user's profile.
	
	MORE INFORMATION
	================
	
	This new functionality can be implemented in two different ways. The user can
	manually edit their profile in the Registry to set their preferences, or the
	System Administrator can implement a system policy.
	
	Information on which folders to exclude is actually stored in two keys in the
	Registry -- one key for the user preferences and the other dictated by a system
	policy. When the user logs off, the two lists are merged into one complete
	list.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	User preferences are stored in the following key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	Add the value ExcludeProfileDirs as REG_SZ. The directory names should be entered
	relative to the root of the profile, and must be separated by semicolons.
	
	For example:
	
	Temporary Internet Files;Application Data\Microsoft\Outlook;Personal
	
	To exclude folders through a system policy, follow these steps:
	
	1. In System Policy Editor, load the templates Common.adm and Winnt.adm.
	
	2. Create a new policy.
	
	3. Open Default User, and then expand Windows NT User Profiles.
	
	4. Select "Exclude directories in roaming profile."
	
	5. In the text box provided, enter the directory names you want to exclude. As
	  above, the directories must be relative to the root of the user's profile,
	  and multiple entries must be separated by semicolons.
	
	
	Additional query words: roaming roving profile Temporary Internet Files upload explorer
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbbug kbhowto kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
