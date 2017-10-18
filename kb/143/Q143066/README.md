---
layout: page
title: "Q143066: Dogs: Unable to Run When Using NT Guest Account"
permalink: kb/143/Q143066/
---

## Q143066: Dogs: Unable to Run When Using NT Guest Account

	Article: Q143066
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, versions 1.0, 1.0a 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Microsoft Windows NT Workstation using a Guest account, you
	cannot run Microsoft Dogs.
	
	When you double-click on the Dogs icon, you receive the Microsoft Home screen and
	then Dogs closes, or exits.
	
	CAUSE
	=====
	
	When logged on as a Guest, your access privileges do not allow you to install
	software on the computer. Microsoft Dogs writes to the registry when the program
	is opened; as a result, Windows NT security believes you are attempting to
	install new software and closes Microsoft Dogs.
	
	RESOLUTION
	==========
	
	Log on to Windows NT with User or Administrator access privileges.
	
	NOTE: Only the user who first runs Dogs and other users with "Administrator"
	privileges will be able to use Dogs. All other users will not be able to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Dogs for Windows
	version 1.0 and 1.0a. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.0, multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbHomeProdSearch kbDogs100 kbDogs100a
	Version           : WINDOWS:1.0,1.0a; winnt:3.5,3.51
	
	=============================================================================
	
