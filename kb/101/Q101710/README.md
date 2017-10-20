---
layout: page
title: "Q101710: Ability to View Any User Account"
permalink: /kb/101/Q101710/
---

## Q101710: Ability to View Any User Account

{% raw %}

	Article: Q101710
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	Much of what is in the user account database is necessarily viewable
	by everyone. The list of user and group accounts, for example, are
	necessary for the Windows NT permissions editor to work properly.
	There is, however, quite a bit of information that could have been
	hidden from users. Logon time restrictions, user full names, and logon
	script paths are all examples of information that could be hidden from
	users. In general, the information in these fields does not represent
	a security risk.
	
	Of the information associated with users, there was one contentious
	field that is not protected. The User Comment field information has
	been used by some previous products to store a call-back phone number
	for people dialing into a system. Previously, this information was
	protected so that only the user could see it. This is no longer the
	case.
	
	Finally, not all fields of the user are visible. The password
	information cannot be read by anyone, even the user of the account.
	This is necessary to protect the security of the system.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
