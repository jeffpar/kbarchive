---
layout: page
title: "Q237608: Using a Default Terminal Server Profile When User Profile Is Set"
permalink: /kb/237/Q237608/
---

## Q237608: Using a Default Terminal Server Profile When User Profile Is Set

{% raw %}

	Article: Q237608
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a User Profile Path is specified in User Manager for a particular user,
	this user receives the profile in the path specified when logging on to a
	Windows NT-based computer including a Windows NT Terminal Server-based computer.
	If a Terminal Server Profile Path is specified, this user only receives the
	profile in the path specified when logging on to a Windows NT Terminal
	Server-based computer. If both paths are specified, the user receives the
	profile specified in User Profile Path when logging on to a Windows NT
	Workstation-based or Server-based computer. When logging on to a Windows NT
	Terminal Server-based computer, the user receives the path specified in Terminal
	Server Profile Path. This article describes how to require a Terminal Server
	user to use a default profile when logging on.
	
	MORE INFORMATION
	================
	
	To prevent a user from using their User Profile Path when logging on to a
	Windows NT Terminal Server-based computer, you must specify a Terminal Server
	Profile Path. To require a Terminal Server user to use a default profile when
	logging on:
	
	1. Start User Manager, double-click the appropriate user, and then click
	  Profile.
	
	2. In the Terminal Server Profile path box, type "C:\WTSRV\PROFILES\DEFAULT
	  USER" (without the quotation marks).
	
	When this user logs on to a Terminal Server-based computer, the Default User
	profile is used as a template, and a profile with their user name is created in
	the WTSRV\PROFILES folder on drive C.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
