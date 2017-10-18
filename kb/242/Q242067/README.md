---
layout: page
title: "Q242067: How To: Copy User Profiles from One Domain to Another."
permalink: kb/242/Q242067/
---

## Q242067: How To: Copy User Profiles from One Domain to Another.

	Article: Q242067
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A user who creates a new profile has permission to use that profile, but someone
	with administrator permissions can permit other users to also use the profile.
	This article describes how to copy a profile to another domain and assign a user
	permission to use the copied profile. Note that permissions written to a profile
	are stored in the NTuser.xxx file.
	
	MORE INFORMATION
	================
	
	To copy a profile to another domain and assign a user permission to use the
	profile:
	
	1. In Control Panel, double-click System.
	
	2. Click the User Profiles tab, click the profile, and then click Copy To.
	
	3. Type the path to the folder where user profiles are stored, or click Browse
	  to locate the folder.
	
	  NOTE: The dialog box that appears when you click Browse does not permit you to
	  create folders. You must create the required folder before you copy the
	  profile.
	
	4. Click Change.
	
	5. In the List Names From box, click the name of the other domain.
	
	6. In the Names box for the other domain, select the user account of the person
	  who is permitted to use the profile.
	
	7. Click OK until all open dialog boxes are closed.
	
	Additional query words: nt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
