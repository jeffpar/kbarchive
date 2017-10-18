---
layout: page
title: "Q106309: Chat Application Prompts for Password Across Domains"
permalink: kb/106/Q106309/
---

## Q106309: Chat Application Prompts for Password Across Domains

	Article: Q106309
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	The Chat application in Windows NT is similar to the Chat application
	in Windows for Workgroups, except that Windows NT Chat prompts you for
	a password when you call a machine on a different domain, on which you
	do not have an account.
	
	After you enter your password, however, you will receive an "invalid
	password" error message. If you know a user name and the password on
	the remote domain or machine, you can use the Connect As dialog box to
	enter that information and communicate with the remote machine.
	Another option is to log on as a guest if the remote machine has the
	guest account enabled.
	
	If both domains have the same user name but different passwords, you
	will not be able to communicate with the other machine.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
