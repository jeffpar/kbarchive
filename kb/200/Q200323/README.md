---
layout: page
title: "Q200323: INFO: Use Migration DLLs to obtain corrected user names"
permalink: kb/200/Q200323/
---

## Q200323: INFO: Use Migration DLLs to obtain corrected user names

	Article: Q200323
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDS
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Local user account names on Windows 95/98 can change during an upgrade to
	Windows 2000 Professional. Some of these user accounts are also in a domain.
	This article describes how to use a Migration DLL to determine what the user
	name and domain will be after the upgrade to Windows 2000 Professional.
	
	MORE INFORMATION
	================
	
	A user account on Windows 2000 can contain up to 20 uppercase or lowercase
	characters except for the following:
	
	  " / \ [ ] : ; | = , + * ? < >
	
	If a Windows 95/98 user name contains any of these characters, Windows 2000 must
	change the user name to make it compatible with these rules. For the most
	updated information on user name conventions, see the Windows 2000 Help file on
	the Start Menu.
	
	In a Migration DLL, the UserName argument of MigrateUserNT supplies three names,
	each separated by a null-terminating character. The names are in the following
	order:
	
	- UserName - The Windows 95/98 name of the user.
	
	- DomainName - The user's domain. This will be an empty string for local
	  accounts.
	
	- FixedUserName - The Windows 2000 name of the user. This name will only be
	  different from UserName when it is necessary to make it compatible with
	  Windows 2000.
	
	The following code illustrates how to get each name, given the UserName parameter
	passed to the Migration DLL's MigrateUserNT function.
	
	  // UserName is NULL for the Default user
	  if (UserName)
	  {
	     PCWSTR DomainName;
	     PCWSTR FixedUserName;
	
	     DomainName = wcschr (UserName, 0) + 1;
	     FixedUserName = wcschr (DomainName, 0) + 1;
	
	     // Use Names Here
	  }
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbinfo
	
	=============================================================================
	
