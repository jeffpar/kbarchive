---
layout: page
title: "Q156695: User Profiles not Being Mapped to Local and Domain Profiles"
permalink: /kb/156/Q156695/
---

## Q156695: User Profiles not Being Mapped to Local and Domain Profiles

	Article: Q156695
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The User Profile tab in the Control Panel System tool does not map local and
	domain profiles to a physical directory under %SystemRoot%\Profiles.
	
	MORE INFORMATION
	================
	
	The %SystemRoot%\Profiles directory stores the following:
	
	- Local profiles for users logging on at the local console using accounts from
	  the local machine's database.
	
	- Local domain profiles for users logging on at the local console of Windows NT
	  4.0 Workstations or Member Servers using a domain account.
	
	- Cached versions of roaming profiles for users logging on at the local console
	  of Windows NT 4.0 Workstations or Member Servers.
	
	If user <Jane Doe> logs on to the local console of a Windows NT 4.0
	computer and has the same user name JANEDOE in both the local and domain
	databases, the subdirectories JANEDOE and JANEDOE000 would exist under
	%SytemRoot%\Profiles.
	
	To determine which directory is mapped to the local user and which is mapped to
	the domain user, perform the following steps:
	
	1. Log on to the computer with either account.
	
	2. Right-click on the taskbar, and choose Properties.
	
	3. Click the Start Menu Programs tab and choose Advanced.
	
	4. Press the SHIFT+TAB keys to move the cursor focus to the left pane of the
	  Explorer window. The profile directory of the current logged on user will be
	  highlighted. The title bar of Explorer will sometimes display the path as
	  well.
	
	You can also compare the date and time stamp of the Ntuser.dat file for
	directories with the same user name. The last logged on user will have the
	latest date and time stamp.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
