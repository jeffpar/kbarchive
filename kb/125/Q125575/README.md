---
layout: page
title: "Q125575: Access Denied Error When Changing Expired Domain Password"
permalink: kb/125/Q125575/
---

## Q125575: Access Denied Error When Changing Expired Domain Password

	Article: Q125575
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change your expired domain password from a client
	workstation, the Access Denied error message appears.
	
	CAUSE
	=====
	
	This problem occurs when "Users Must Log On In Order To Change Password" is
	selected in the User Manager for Domains Account Policy dialog box.
	
	The default Windows NT Server configuration does not have "User Must Log On In
	Order To Change Password" selected.
	
	RESOLUTION
	==========
	
	A system administrator must modify the user account for the person receiving the
	Access Denied error message by either:
	
	- Assigning a new password.
	
	  -or-
	
	- Clearing the "User must log on in order to change password" check box.
	
	Additional query words: prodnt logon log on
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
