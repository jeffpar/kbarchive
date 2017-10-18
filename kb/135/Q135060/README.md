---
layout: page
title: "Q135060: Access Denied Attempting to Change Client Domain Password"
permalink: kb/135/Q135060/
---

## Q135060: Access Denied Attempting to Change Client Domain Password

	Article: Q135060
	Product(s): Microsoft Windows NT
	Version(s): MS-DOS:3.0; WINDOWS:95; winnt:3.x,4.0; :
	Operating System(s): 
	Keyword(s): win95 win98
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.x, 4.0 
	- Microsoft LAN Manager 
	- Microsoft Windows for Workgroups 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to the network successfully and attempt to change your domain
	password (before the password has expired), the following error message appears
	on your Windows 95 client and a similar error message appears on other clients:
	
	  Unable to change password of Microsoft Networking : Access denied.
	
	-or-
	
	  Unable to change the password for Windows NT because of the following error:
	  Access has been denied. For more information, contact your system
	  administrator.
	
	This problem occurs on your computer running Windows for Workgroups 3.11, LAN
	Manager 2.2c, Network Client for MS-DOS, or Windows 95.
	
	This problem does not occur when you run Windows NT Workstation.
	
	CAUSE
	=====
	
	This problem occurs if you select the "Users must log on in order to change
	password" check box in the Account Policy dialog box of User Manager for
	Domains; by default this check box is cleared.
	
	
	RESOLUTION
	==========
	
	To work around this problem, clear the "User must log on in order to change
	password" check box on your Windows NT Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 win98 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbWin98search kbZNotKeyword kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWin98 kbNetworkClient300DOS
	Version           : MS-DOS:3.0; WINDOWS:95; winnt:3.x,4.0; :
	
	=============================================================================
	
