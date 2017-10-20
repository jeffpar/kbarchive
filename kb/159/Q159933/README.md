---
layout: page
title: "Q159933: Account Locked Out Unavailable in User Manager"
permalink: /kb/159/Q159933/
---

## Q159933: Account Locked Out Unavailable in User Manager

{% raw %}

	Article: Q159933
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to select the Account Locked Out check box in the User
	Properties dialog box in either User Manager or User Manager for Domains.
	
	CAUSE
	=====
	
	Account lockouts are controlled through the Account selection from the Policies
	menu in User Manager. This allows setting of lockout parameters for the entire
	system.
	
	RESOLUTION
	==========
	
	If you want to keep a particular user from logging in, use the Account Disabled
	checkbox in the User Properties dialog box instead of Account Locked Out.
	
	The User Properties box is available by double-clicking on the user's name in
	User Manager for Domains.
	
	Additional query words: prodnt account lockout user mgr
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
