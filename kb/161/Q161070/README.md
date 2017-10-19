---
layout: page
title: "Q161070: Step by Step Roaming Profiles Configuration"
permalink: /kb/161/Q161070/
---

## Q161070: Step by Step Roaming Profiles Configuration

	Article: Q161070
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Roaming Profiles contain user work environments, which include the desktop items
	and settings. Some examples of these environments are screen colors, mouse
	settings, window size and position, and network and printer connections. Roaming
	Profiles are available wherever the user logs on, provided the server is
	available.
	
	1. On a computer running Windows NT Server 4.0, create a dedicated account with
	  administrative rights as Profile Administrator. Create this account in User
	  Manager for Domains and log on to this account to preconfigure user
	  environmental settings.
	
	2. In User Manager for Domains, use the User Environment Profile dialog box to
	  add the user profile path location. Open the User Properties dialog box for a
	  user account, and click the Profiles button to add the user profile path. The
	  path location should be
	  \\<ServerName>\<ShareName>\<Profilename> (where
	  <ShareName> is the Profiles directory under <winntroot> and
	  <Profilename> is the Windows NT username).
	
	3. In Control Panel, double-click the System icon.
	
	4. On the User Profiles tab, select the existing Local Profile for Profile
	  Administrator that you want to copy, and click the Copy To button.
	
	5. In the "Copy profile to" box, specify the universal naming convention (UNC)
	  path to the user's profile directory (for example,
	  \\<ServerName>\<ShareName>\<UsersProfileDirectory>) or
	  select the user's profile directory from within Network Neighborhood. (If the
	  user's profile directory does not exist, use the username instead.)
	
	6. Select the user permitted to use this profile. Click OK to copy the profile.
	  Click OK to close System Properties.
	
	7. Log on to a computer running Windows NT Workstation 4.0. In Control Panel,
	  double-click the System icon. On the User Profiles tab, the logon user
	  profile type should show as Roaming.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
