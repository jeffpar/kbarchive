---
layout: page
title: "Q150995: How to set User Manager Settings for Multiple Users"
permalink: kb/150/Q150995/
---

## Q150995: How to set User Manager Settings for Multiple Users

	Article: Q150995
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use User Manager in Windows NT, certain options (such as Logon Hours)
	cannot be set for groups, but can be set for individual users. This article
	explains how to set these options for multiple users at one time.
	
	MORE INFORMATION
	================
	
	To select multiple users in a domain and set options for those users, select the
	first user you want to apply the option to, hold the Shift key, and select the
	last user you want to apply the option to. Also, you can press the Control key
	to select or cancel the selection of individual user accounts.
	
	Once the user accounts that you want to modify are selected, click Users, select
	Properties, and change the setting; this will apply to all selected users.
	
	This procedures can be used to change the following settings:
	
	- User must change password at next logon
	
	- Users cannot change password
	
	- Passwords never expire
	
	- Account disabled
	
	- Group membership (can add/remove users from groups)
	
	- Set the path for user profiles, home directories and logon scripts
	
	- Set logon hours
	
	- Set workstations that users can logon from
	
	- Set account expiration and account type (global or local)
	
	Note that this procedure can produce a known issue. If one of the users selected
	has the "User Must Change Password at Next Logon" check box selected, the check
	box is cleared after changes are made to the user's properties. For additional
	information, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q149948 Changing Properties for Many Users Resets Logon Password Flag
	
	Additional query words: prodnt ntdomain
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
