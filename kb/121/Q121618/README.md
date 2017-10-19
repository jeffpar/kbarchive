---
layout: page
title: "Q121618: Saving Workstation Default User Profiles for a Domain"
permalink: /kb/121/Q121618/
---

## Q121618: Saving Workstation Default User Profiles for a Domain

	Article: Q121618
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbnetwork kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	In order to save the default user profiles of a local system and make them
	available to the domain, use the User Profile Editor. It is available in
	Windows NT Advanced Server version 3.1, Windows NT Server version 3.5, and
	the Windows NT 3.1 Resource Kit. If you do not have any of these products,
	and you have a Windows NT workstation, you can save your default user
	profiles from a domain server.
	
	In order to save a workstation's local default user profile and make it
	available as a domain user profile from a domain controller, the following
	procedure is recommended:
	
	1. From the Windows NT server, create a domain user account for the Windows NT
	  workstation and register the computer name on the domain.
	
	2. From the Windows NT workstation, join the domain. When you have successfully
	  joined the domain, log off of the computer.
	
	3. From the Windows NT server, run the User Profile Editor and connect to the
	  system root directory (C$) of the Windows NT workstation, using a domain
	  administrator account name and password.
	
	4. Make the workstation's default user profile available to the domain by saving
	  the profile with a USR extension on the domain controller. Default user
	  profiles are located in the %systemroot%\systems32\CONFIG (where %systemroot%
	  is the root directory for Windows NT, usually WINNT) sub-directory, usually
	  with the following format:
	
	  <First 5 characters of user name>000
	
	5. Open the new USR file with the User Profile Editor Tool, permit the new
	  Domain user to use this profile.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
