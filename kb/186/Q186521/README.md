---
layout: page
title: "Q186521: Why Terminal Server Users Should Have New Home Directories"
permalink: /kb/186/Q186521/
---

## Q186521: Why Terminal Server Users Should Have New Home Directories

	Article: Q186521
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default home directory location is the user's profile. This may not be
	efficient if the user stores a large amount of data in the home directory.
	
	MORE INFORMATION
	================
	
	By default, all users have a home directory defined for them. The default
	location is the user's profile, located under %systemroot%\profiles\%username%.
	The home directory is called "Windows," and contains a necessary subdirectory
	called "System." These are critical directories. The system writes user-specific
	application INI files to the user's Windows directory, and by default, refers
	any application requesting the system Windows directory to the user's Windows
	directory.
	
	Users typically make use of a home directory to save files.
	
	If users do not save files in their home directories, then the default location
	of the user's profile may not be an issue. However, if the user stores files in
	the Windows home director, the user needs a new home directory path outside of
	the user profile.
	
	When a user logs on, the entire profile is parsed and loaded, including any files
	in the default home directory. If you use roaming profiles, for example, the
	profile and the entire set of files in the home directory will be copied to the
	profile cache (the user's profile under %SystemRoot%\Profiles\%UserName%) at
	every logon attempt. This can take considerable time and resources, especially
	if the roaming profile is stored across the network.
	
	For these reasons, it is a good idea to specify a new location for home
	directories in User Manager for each user. For example, create a directory on
	the computer running Terminal Server called HOMEDIRS, and give the group called
	"Everyone," Change permissions. Then you can specify the home directory location
	as C:\Homedirs\%UserName% in User Manager. The system will automatically create
	the username subdirectory and give it appropriate permissions (Administrators
	receive Special Access permission with directory-level access only, and the
	specific users receive Full Control). The default permissions allow
	Administrators to copy files into the home directory, but not to read or delete
	files there.
	
	The Windows and Windows\System directories will also be automatically created in
	the user's home directory. Administrators will be given Full Control of these
	directories (and MUST have full control).
	
	After the home directory is created, copy any files in the existing home
	directory under the user's profile to the new home directory (make sure you
	check the Windows and Windows\System subdirectories for any files). You can then
	delete the old home directory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
