---
layout: page
title: "Q156433: User Environment Variables Cannot be Modified"
permalink: /kb/156/Q156433/
---

## Q156433: User Environment Variables Cannot be Modified

	Article: Q156433
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An administrator is not allowed to update or modify user system variables (for
	example, SET PATH=TEMP) on an existing mandatory profile.
	
	CAUSE
	=====
	
	When an administrator attempts to add or modify a mandatory profile's system
	variable(s), the system updates the administrator's profile and not the
	mandatory profile.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. The administrator must rename the mandatory profile (.man) to a user profile
	  (.usr).
	
	2. Assign the user profile (.usr) to an administrator.
	
	3. Log off and log on as the administrator that is using the profile.
	
	4. Configure the profile as desired and save the profile as a user profile
	  (.usr).
	
	5. Rename the user profile (.usr) to a mandatory profile (.man).
	
	6. Assign the updated profile back to the user/group.
	
	-or-
	
	Create a new mandatory profile through User Profile Editor with the desired
	configuration.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
