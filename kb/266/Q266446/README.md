---
layout: page
title: "Q266446: Roaming Profiles Do Not Load, Generate Errors 18 and 1009"
permalink: /kb/266/Q266446/
---

## Q266446: Roaming Profiles Do Not Load, Generate Errors 18 and 1009

	Article: Q266446
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users are required to use a roaming profile and a system policy, and the
	default computer policy is set to delete the locally cached copies of roaming
	profiles, some users may receive the following error messages when they attempt
	to log on:
	
	  "The Operating System was unable to load a locally stored profile. A new
	  profile will be created. (1009)."
	
	  "The operating system was unable to load your profile. Please contact your
	  network administrator. [18]"
	
	When you use the net helpmsg command to reveal the source of the error code, you
	receive the following information:
	
	  Error code 1009 is: "The registry database is corrupt".
	  Error code 18 is: "There are no more files".
	
	CAUSE
	=====
	
	This behavior can occur when the registry size on the workstations is too small.
	This can cause duplicate entries for the roaming profiles to be written into the
	HKEY_USERS hive.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Log on to the computer as an Administrator or through a user account that is
	  not required to use a roaming profile.
	
	2. Remove the extraneous profiles from the registry:
	
	  a. Run Registry Editor (Regedt32).
	
	  b. Open the HKEY_USERS registry hive.
	
	  c. Delete any duplicate Security Identifier (SID) registry keys for the
	     roaming profile.
	
	     NOTE: You can find which SID matches a given user profile by looking at the
	     data for the ProfileImagePath registry value in the following registry
	     location:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows
	     NT\CurrentVersion\ProfileList\SID#
	
	  d. Quit the Registry Editor.
	
	3. Increase the size of the registry:
	
	  a. In Control Panel, double-click System.
	
	  b. Click Performance.
	
	  c. In the Virtual Memory group, click Change.
	
	  d. View the Current Registry Size and the Maximum Registry Size.
	
	  e. In the Maximum Registry Size box, type a number greater than the current
	     registry size and then click OK.
	
	  f. Click Close, and then restart your computer to effect the new settings.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
