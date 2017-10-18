---
layout: page
title: "Q287330: Error Messages 1009 and 18 Appear When Logging On to a Domain"
permalink: kb/287/Q287330/
---

## Q287330: Error Messages 1009 and 18 Appear When Logging On to a Domain

	Article: Q287330
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a computer that is running Windows NT Workstation 4.0 in a
	Windows NT Server 4.0-based domain, you may receive the following error
	messages:
	
	  The Operating System was unable to load a locally stored profile. A new
	  profile will be created. (1009).
	
	  The operating system was unable to load your profile. Please contact your
	  network administrator. [18]
	
	Within the domain, the roaming profiles and system policies are in effect. The
	policy is configured with a Default User, Default Computer, and Domain
	Administrators group. The default computer policy is set to delete the cached
	copy of the roaming profiles. The administrator can log on to the same computer
	and obtain a profile because the administrator is not configured to use a
	roaming profile. Other users are not able to log on, or else they receive the
	error messages.
	
	CAUSE
	=====
	
	This behavior can occur if the maximum registry size on the computer is set
	lower than the current registry size. Multiple profiles become locked in the
	HKEY_USERS hive.
	
	RESOLUTION
	==========
	
	To resolve this behavior, unlock the user profiles and then increase the maximum
	registry size to be greater than the current registry size.
	
	To unlock the profiles that are locked in the HKEY_USERS hive:
	
	NOTE: The settings in a deleted user profile will be lost. However, you can save
	the profile settings before you delete the profile. Use the Copy To function to
	copy the profile to a folder, and then after you change the registry size, map
	the user account to the profile in User Manager for Domains. If you do not copy
	the profile, a new profile is created for that account when the user logs on,
	but it is based on the default user settings of the local computer.
	
	1. Identify the locked user profiles.
	
	2. In Control Panel, double-click System, and then click User Profiles.
	
	3. Click the username for the locked profile, and then click Delete.
	
	4. Log off the computer, and then have the user log on.
	
	To change the current registry size:
	
	1. Click Start on the taskbar, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click Performance.
	
	3. Click Change, and then increase the number in the Maximum Registry Size (MB)
	  box to be larger than the Current Registry Size.
	
	4. Click OK, click Close, and then click Yes to restart the computer.
	
	MORE INFORMATION
	================
	
	HKEY_USERS is a dynamic registry hive that contains the user profiles of all the
	accounts that are currently logged on to the computer. This includes the user
	profile of the current user and any system or service accounts that are running
	in the background. The HKEY_USERS hive includes the HKEY_CURRENT_USER hive,
	which is also dynamic and which contains the current user's profile.
	
	All user profiles on the local computer are stored in the registry at the
	following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\ProfileList
	
	You can identify the profiles that are currently loaded in HKEY_USERS by matching
	the security identifiers (SIDs) in the HKEY_LOCAL_MACHINE location with those
	listed in HKEY_USERS. For example, the profiles currently loaded on the computer
	in HKEY_USERS may be the profiles for the user account and for an SMS service
	account (SMSCliSvcAcct&).
	
	A profile appears "locked" if you do not receive information about the settings
	of your user profile (desktop settings, environment variables, and so on) when
	you log on. If you restart the computer, log on again, and receive the same
	error messages, the user profile is "locked" in HKEY_USERS. The current user's
	profile is supposed to load into HKEY_USERS, removing the profile of the
	previous user.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
