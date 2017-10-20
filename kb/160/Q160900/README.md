---
layout: page
title: "Q160900: Windows NT Users May Lack Permission to Change Password"
permalink: /kb/160/Q160900/
---

## Q160900: Windows NT Users May Lack Permission to Change Password

{% raw %}

	Article: Q160900
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 user may receive the following error message while trying to
	change their password when they attempt to log on:
	
	  Change Password
	  You do not have permission to change your password.
	
	CAUSE
	=====
	
	If both of the following items are selected in User Manager for Domains, the
	above error message may be displayed.
	
	For the User Account:
	User Must Change Password at Next Logon
	
	For Account Policies:
	User must log on in order to change password
	
	MORE INFORMATION
	================
	
	For consistency, this behavior has changed from version 3.51, and now is more
	similar to a Windows 95 log on attempt. However, unlike other Microsoft clients,
	a remote Windows NT computer, which has already logged on, has the ability to
	change the password using remote procedure calls. For more information, please
	see the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q149176
	  TITLE : Changing a Password from a Remote NT Computer
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
