---
layout: page
title: "Q258859: Description of Special SFUUSER Account Created by SFU 2.0"
permalink: kb/258/Q258859/
---

## Q258859: Description of Special SFUUSER Account Created by SFU 2.0

	Article: Q258859
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing Windows Services for UNIX (SFU) version 2.0 creates a special user
	account named SFUUSER. The SFU Cron and Remote Shell service programs use the
	default SFUUSER context to run programs when all other forms of user
	authentication do not succeed.
	
	MORE INFORMATION
	================
	
	Services that use this special user context first attempt to run programs under
	the context of the user who invoked the command. Only when all authentication
	mechanisms do not succeed do they default to using the SFUUSER context, which
	has limited privileges.
	
	The SFUUSER account belongs to the USERS group, and does not have Change Password
	privileges. Administrators should not attempt to delete this user or reset the
	password. Changes or removal could cause the Cron or Remote Shell service
	programs not to work.
	
	Additional query words: solar coaster solarcoaster sfu
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
