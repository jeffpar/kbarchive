---
layout: page
title: "Q156697: How to Update Permissions for User Profiles"
permalink: /kb/156/Q156697/
---

## Q156697: How to Update Permissions for User Profiles

	Article: Q156697
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The User Profiles tab in Control Panel System displays local, roaming, and
	mandatory user profiles in the %Systemroot%\Profiles, directory; the tab cannot
	be modified to show profiles for other paths.
	
	This is a limitation in Windows NT 4.0 and will be addressed in future versions
	of Windows NT.
	
	MORE INFORMATION
	================
	
	This limitation may cause problems for administrators who store server- based
	profiles in alternate locations and later want to either change the profile type
	(local to roaming or vice-versa) or modify the list of users and groups allowed
	to use existing mandatory profiles.
	
	Several methods (listed below) are available to change permissions for mandatory
	profiles.
	
	The information below assumes that computers running Windows NT Server or
	Workstation 4.0 have machine accounts in Windows NT domains, that the user
	making the change has administrator access in both the domain and the local
	workstation, and that server-based roaming or mandatory profiles are defined in
	User Manager for Domains.
	
	Method I
	--------
	
	1. Log on with the reference account used to create the mandatory profiles and
	  click Copy To on the User Profiles tab of Control Panel System.
	
	2. Redefine the users and groups permitted to use the mandatory profile as
	  required.
	
	3. Recopy the profile to the server-based profile path.
	
	Method II
	---------
	
	1. Rename the server-based mandatory profile Ntuser.man file to Ntuser.dat.
	
	2. Log on using a domain account whose profile properties in User Manager for
	  Domains points to the renamed server-based profile (that is,
	  \\Servername\Sharename\%Username%).
	
	3. On the User Profiles tab of Control Panel System, click Change Type to make
	  the profile local.
	
	4. Make any desired changes to the profile.
	
	5. On the User Profiles tab of Control Panel System, click Copy To to copy the
	  profile to the server-based location.
	
	You can modify domain user and group permissions by clicking Change in the Copy
	To dialog box before copying the profile.
	
	Method III
	----------
	
	NOTE: This method involves editing the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. While logged on as an administrator of the computer used to store the user
	  profiles, start Regedt32.exe and click the root level of
	  HKEY_USERS
	.
	
	2. On the Registry menu, click Load Hive and import the server-based Ntuser.man
	  file (\\Servername\Sharename\Ntuser.man).
	
	3. When prompted for a key name, type "mandatory" (without the quotation marks)
	  or the text string of your choice.
	
	4. Place the cursor at the root of newly imported hive.
	
	5. On the Security menu, click Permissions.
	
	6. Add or remove domain users or groups as required.
	
	7. On the Registry menu, click Unload Hive.
	
	The same information can be applied to local or roaming profiles, but these tend
	to be user-specific rather than shared by multiple users (as is common for
	mandatory profiles).
	
	
	Additional query words: hardcoded hard coded designed
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
