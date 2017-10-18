---
layout: page
title: "Q216639: Controlling Password Synchronization in Services for UNIX"
permalink: kb/216/Q216639/
---

## Q216639: Controlling Password Synchronization in Services for UNIX

	Article: Q216639
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can control which users' passwords are synchronized to the UNIX pods by the
	Password Synchronization service. This is done by creating and populating the
	PasswordPropAllow and PasswordPropDeny local user groups on the Windows NT-based
	computer that is running the Password Synchronization service.
	
	MORE INFORMATION
	================
	
	The Password Synchronization service uses the PasswordPropAllow and
	PasswordPropDeny groups to determine whether a user's password change should be
	propagated to the configured UNIX pods. If a user is in the PasswordPropAllow
	group and not in the PasswordPropDeny group, the user's password change is
	propagated to the UNIX pods.
	
	By default, the PasswordPropAllow and PasswordPropDeny groups do not exist, and
	all users' password changes are propagated. Once one of these groups is created,
	password changes are propagated only for those users in the PasswordPropAllow
	group and not in the PasswordPropDeny group.
	
	The PasswordPropAllow group should contain users or user groups for which
	password changes should be propagated to the UNIX pods.
	
	The PasswordPropDeny group should contain users or user groups for which password
	changes should not be propagated to the UNIX pods.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : :; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
