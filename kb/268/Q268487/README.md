---
layout: page
title: "Q268487: Default Desktop Is Not Displayed For First-time User"
permalink: /kb/268/Q268487/
---

## Q268487: Default Desktop Is Not Displayed For First-time User

	Article: Q268487
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user logs on to a computer for the first time, the user's desktop may not
	be the default desktop. For example, icons may not be displayed and programs may
	be missing.
	
	CAUSE
	=====
	
	This behavior can occur because the default user profile was modified or
	overwritten by an unknown event. The computer system has transferred policy
	settings to the user's profile, even though a policy may not be in place. The
	existing user profiles, however, are unaffected by these policy settings.
	
	RESOLUTION
	==========
	
	To resolve this behavior, restore the default user profile by means of your
	backup system or from a copy of the same version of Microsoft Windows.
	
	For additional information about profiles and policies, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q161334 Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)
	
	  Q185587 Guide To Windows NT 4.0 Profiles and Policies (Part 2 of 6)
	
	  Q185588 Guide To Windows NT 4.0 Profiles and Policies (Part 3 of 6)
	
	  Q185589 Guide To Windows NT 4.0 Profiles and Policies (Part 4 of 6)
	
	  Q185590 Guide To Windows NT 4.0 Profiles and Policies (Part 5 of 6)
	
	  Q185591 Guide To Windows NT 4.0 Profiles and Policies (Part 6 of 6)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
