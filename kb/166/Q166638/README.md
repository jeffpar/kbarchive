---
layout: page
title: "Q166638: How the Default User Policy Is Implemented"
permalink: /kb/166/Q166638/
---

## Q166638: How the Default User Policy Is Implemented

	Article: Q166638
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how policies take effect in Windows NT 4.0 based on an
	automatic download of the Ntconfig.pol policy file. It assumes that the reader
	has some basic knowledge of using policies in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	There may be some confusion as to when the default user policy takes effect,
	when it is included in the Ntconfig.pol file with specific users or groups. The
	order of the implementation is as follows:
	
	1. If the default user is the only implemented policy, it will affect all users.
	
	2. If the default user and a specific user have overlapping implementations in
	  the file, the specific user takes precedence. (In other words, the default
	  user policy will be ignored.)
	
	3. If the default user and a global group have overlapping implementations in
	  the policy file, the global group takes precedence.
	
	4. If all three items are in the policy file, the specific user always takes
	  precedence.
	
	5. Because there are no groups with computers, the default computer policy takes
	  effect unless a specific computer name is included in the policy file.
	
	NOTE: There are three states in which a policy exists: checked, cleared, or gray.
	The preceding scenario describes their precedence for each policy item (user,
	group, and default user).
	
	If the policy file contains only groups and the default user, then for a user to
	obtain the proper policy through his or her group membership, the settings must
	be checked or cleared for that user's group. In other words, if a group setting
	is left gray, and the default user has that policy implemented (check or
	cleared), the policy will be determined according to the default user.
	
	However, a specific user policy always takes precedence over group and default
	user policies, regardless of whether an option is gray or implemented.
	
	
	Additional query words: order priority netlogon pdc steps
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
