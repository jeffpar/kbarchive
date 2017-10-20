---
layout: page
title: "Q150855: How to Set Up Server-Based User Profiles for Windows 95 Clients"
permalink: /kb/150/Q150855/
---

## Q150855: How to Set Up Server-Based User Profiles for Windows 95 Clients

{% raw %}

	Article: Q150855
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to define User Profiles for Windows 95 clients to be
	used in a Windows NT domain environment.
	
	MORE INFORMATION
	================
	
	A User Profile consists of user-specific information contained in the file
	User.dat, which is one of the two files in the Windows 95 registry.
	
	To set up User Profiles on a Windows NT network, use the following steps:
	
	1. Enable User Profiles on your computer running Windows 95:
	
	   - In Control Panel Passwords, click the User Profiles tab.
	
	   - Click to select the "Users Can Customize Their Preferences And Desktop
	     Settings" option.
	
	   - In the User Profiles Settings dialog box, click the options you want.
	     These options determine what will be included as part of the user profile.
	
	2. Shut Down and restart the computer.
	
	3. Assign a home directory to your user account(s) on the Windows NT domain:
	
	   - In User Manager for Domains, double-click the account(s) to which you want
	     to assign a home directory.
	
	   - Click the Profiles tab and type the path for the home directory.
	
	When the user logs off, Windows 95 automatically places an updated copy of the
	User Profile in the user's assigned home directory on the Windows NT network, in
	the following path: \\<logonServer>\<user's home directory>.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
