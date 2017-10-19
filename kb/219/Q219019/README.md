---
layout: page
title: "Q219019: Offline Operation of Custom Shared Start Menu System Policy"
permalink: /kb/219/Q219019/
---

## Q219019: Offline Operation of Custom Shared Start Menu System Policy

	Article: Q219019
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The "Custom Shared Start Menu" system policy can be used to provide a common
	Start menu for all users in an enterprise. This article describes the behavior
	of this policy when used with "default computer" versus "default user," as well
	as the behavior when the "Shared Start Menu" is not available.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When the "User Shell Folders\Common Start Menu" registry value is parsed, an
	attempt is made to create the directory at the location specified in the policy.
	This operation will return a success under two conditions:
	
	- If the directory already exists.
	
	-or-
	
	- If it does not exist but is created successfully
	
	If this operation fails, there is a second attempt to create the directory under
	%SystemRoot%. This attempt would return a success under the same conditions as
	those noted above. Changes to the Start menu will be written to the directory
	that was successfully verified (on the local system or at a remote location).
	
	Behavior When the Policy Is Set in Default Computer
	---------------------------------------------------
	
	  Shared Start Menu Path:
	  Category: Windows NT Shell
	  Subcategory: Custom shared folders
	  Selection: Custom shared Start menu
	  Description: Specifies the UNC path the folder is to use when displaying the
	  folders, files, and shortcuts the user receives as part of the Start menu.
	
	  Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	  \Explorer\User Shell Folders
	  Registry Value Registry Data Description
	
	  Common Start Menu REG_EXPAND_SZ (NOTE: REG_SZ can be used if no variables
	  exist.) Off = value is removed from registry, On = text of UNC path to
	  folder. Default = %SystemRoot%\Profiles\All Users\Start Menu
	
	In this case, the newly created local directory will be called "Common Start
	Menu". Icons and menus can be placed in this directory for an offline start
	menu. Offline means that the user was not validated by a domain controller. An
	example would be the case of portable computer users who log on with cached
	credentials when not connected to the network. This does not replace the
	built-in Start menu, but it does replace the "All Users" Start menu.
	
	You can copy the contents of the "All Users" Start menu to the new local
	directory for users who are expected to be offline from time to time. This would
	also give the administrators the ability to determine what appears in the start
	menu for offline and online use. The downside of using this method is that the
	"Shared" Start menu will need to include a complete group of icons for local as
	well as remote applications. This may be undesirable in the instance where some
	users have different local applications than other users. But it does give the
	administrator the flexibility to configure the users' offline experience. When
	using this method, the "All Users" Start menu is no longer used, whether online
	or offline. There is no way to change this after this policy is set for the
	default computer.
	
	Behavior When the Policy Is Set in Default User or in a Group Policy
	--------------------------------------------------------------------
	
	  Shared Start Menu Path:
	  Category: Windows NT Shell
	  Subcategory: Custom shared folders
	  Selection: Custom shared Start menu
	  Description: Specifies the UNC path the folder is to use when displaying the
	  folders, files, and shortcuts the user receives as part of the Start menu.
	
	  Key: HKEY_CURENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	  Shell Folders
	
	  Registry Value Registry Data Description Common Start Menu REG_EXPAND_SZ
	  (NOTE: REG_SZ can be used if no variables exist.) Off = value is removed from
	  registry, On = text of UNC path to folder. Default = %USERPROFILE%\Start Menu
	
	In this case, the newly created local directory will have the same name as the
	remote directory name specified in the policy, and will be created under
	%SystemRoot%. Icons and menus can be placed in this directory for an offline
	Start menu. This does not replace the built-in Start menu or the "All Users"
	Start menu. You will get all three menus on the Start menu, in the following
	order from top to bottom:
	
	- Common Shared
	
	- All Users
	
	- Built-in
	
	Regardless of the online status of the remote common Start menu, you will always
	get the "All Users" Start menu. When the computer is online, you will see the
	remote Start menu on top of the "All Users" Start menu. When the computer is
	offline, you will see the locally created Start menu (same directory name as the
	remote menu) on top of the "All Users" Start menu. Copying shortcuts to this
	folder will create an offline Start menu. When using this method, you can have
	all the local applications run from the "All Users" Start menu, and then have
	the network applications run from the shared custom Start menu. When users are
	offline, they will not get the icons for the network applications and they will
	not have access to the network. They will always have access to the Start menu
	for the local applications. This also addresses the potential issue of portable
	computer users having different local applications.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q185590 Guide To Windows NT 4.0 Profiles and Policies (Part 5 of 6)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
