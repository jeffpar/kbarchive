---
layout: page
title: "Q129778: PC Mac: Err Msg: Invalid Password"
permalink: kb/129/Q129778/
---

## Q129778: PC Mac: Err Msg: Invalid Password

	Article: Q129778
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Mail for PC Networks, Macintosh workstation, you
	may receive the following error message even if the correct password was
	entered:
	
	  Invalid Password.
	
	CAUSE
	=====
	
	This can be occur if you select the Save My Name and Password option from Set
	Preferences, and the postoffice administrator has recovered the password via
	ADMIN.EXE.
	
	Another possible cause is corruption within the MS Mail/PC LANs Prefs file.
	
	RESOLUTION
	==========
	
	You can resolve this problem by deleting the MS Mail/PC LANs Prefs file in the
	System Folder. This file is recreated during the next startup of the client
	after you relocate and select the postoffice.
	
	MORE INFORMATION
	================
	
	The MS Mail/PC LANs Prefs file contains the following:
	
	- default login information (username, password, and whether to automatically
	  enter password)
	
	- postoffice location
	
	- viewing options (message display font and size)
	
	- notification alert method (for example, flashing icon, sound, dialog box).
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
