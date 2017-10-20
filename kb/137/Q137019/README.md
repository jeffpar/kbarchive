---
layout: page
title: "Q137019: User Account Gets Locked Out When It Should not Get Locked Out"
permalink: /kb/137/Q137019/
---

## Q137019: User Account Gets Locked Out When It Should not Get Locked Out

{% raw %}

	Article: Q137019
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After your user account has been locked, then unlocked, Windows NT locks you out
	again after you log on once more.
	
	This problem occurs when the Windows NT domain has the Account Policy configured
	to lockout user accounts after three bad password attempts.
	
	To illustrate the problem, suppose a user logs on, logs off, gives three bad
	passwords so they get locked out. The system Administrator unlocks their
	account. The user logs on, logs off, logs on again but can't because they are
	locked out again. It should default back to the account policy of three bad
	logon attempts at this point, but it doesn't.
	
	CAUSE
	=====
	
	The bad password count information for your user account fails to get written to
	the Security Account Manager (SAM) database.
	
	WORKAROUND
	==========
	
	To work around this problem, ask your administrator to delete and recreate your
	user account and reassign all your domain privileges to your new account.
	
	NOTE: When your administrator recreates your account you to lose your assigned
	access privileges on the domain because Windows NT assigns each new user account
	a new security identifier (SID) regardless of whether or not the account name
	matches a previous account name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51 and Windows NT 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
