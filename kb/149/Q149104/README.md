---
layout: page
title: "Q149104: New Users Not Prompted to Change Password"
permalink: /kb/149/Q149104/
---

## Q149104: New Users Not Prompted to Change Password

	Article: Q149104
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new user and select the "User Must Change Password at Next
	Logon" option, the new user may not be prompted to change the password the first
	time he or she logs on. This problem will occur if a new global group has been
	created and then set as the primary group for the new user, and all other group
	memberships removed. Even though the password option is enabled when the new
	user is created, the setting is maintained during the initial creation of the
	account. This only applies to new users that are created after a new global
	group has been created.
	
	
	RESOLUTION
	==========
	
	After adding the new user, the administrator will have to edit the user account
	properties and reselect "User Must Change the Password at Next Logon." The user
	will then be prompted to change the password at the first logon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
