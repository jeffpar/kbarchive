---
layout: page
title: "Q245040: How to Restrict Workstation Access to Local Administrators Only."
permalink: kb/245/Q245040/
---

## Q245040: How to Restrict Workstation Access to Local Administrators Only.

	Article: Q245040
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Ntrights.exe utility to restrict access to
	a workstation to only the Local Administrators group. Ntrights.exe, a utility
	program included in the Resource Kit for Microsoft Windows NT 4.0, enables you
	to grant or revoke any Windows NT right to or from a user or group of users.
	
	MORE INFORMATION
	================
	
	NOTE: To be able to set a right for a user or group, you must have Administrator
	privileges.
	
	To restrict access to a workstation to only the Local Administrators group, type
	the following commands at the command prompt, pressing ENTER after each line
	
	    ntrights -r SeInteractiveLogonRight -u ''Backup Operators'' - m workstation_name
	    ntrights -r SeInteractiveLogonRight -u ''Everyone'' - m workstation_name
	    ntrights -r SeInteractiveLogonRight -u ''Guests'' - m workstation_name
	    ntrights -r SeInteractiveLogonRight -u ''Power Users'' - m workstation_name
	    ntrights -r SeInteractiveLogonRight -u ''Users'' - m workstation_name
	
	where workstation_name is the name of the workstation you want to restrict.
	
	These commands remove the right to log on to the workstation locally from every
	group except the Local Administrators group. If you are working from a
	workstation that you want to restrict, you do not have to use the -m parameter,
	because the changes are made to the local workstation by default. However, when
	you want to use these commands on a remote computer, you must use the -m
	parameter, along with the name of the computer. To make all of the changes at
	once, create a batch file with these commands and include the names of all
	required workstations.
	
	To view a list of all the available rights and for additional information about
	how to use the Ntrights.exe utility, either view the documentation that
	accompanies the Windows NT 4.0 Resource Kit, or type the following command at a
	command prompt, and then press ENTER:
	
	  ntrights /?
	
	Additional query words: permissions rights local
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
