---
layout: page
title: "Q165091: Password Uniqueness May Not Account for Case Sensitivity"
permalink: kb/165/Q165091/
---

## Q165091: Password Uniqueness May Not Account for Case Sensitivity

	Article: Q165091
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Account Policy for a domain requires a unique password and you try to
	change your password on a client computer that has support for case sensitive
	passwords, changes in case may not count as a unique password.
	
	MORE INFORMATION
	================
	
	When a Windows NT-based computer negotiates a session with a Windows NT-based
	domain controller, it sets flags that show that it can support case-sensitive
	passwords. This means there is case distinction of passwords, for example, you
	can change your password from "password" to "PassWord".
	
	Down-level clients (such as Microsoft Windows for Workgroups and Microsoft
	Windows 95) do not support case-sensitive passwords. Because of this, when a
	password is set on the domain, two copies of it are stored. If the password is
	set from a down-level client, both passwords stored are the same. However, if
	the password is set by a client with support for case-sensitive passwords, the
	case-specific password is stored along with a case-insensitive password. By
	doing so, you can set a case-sensitive password and still be able to logon from
	a down-level client.
	
	When password uniqueness is checked, it compares the password it is given to the
	case-insensitive password. This limits you to actual character changes when you
	make a unique password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation in Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbWin98search kbWinAdvServSearch kbWin98
	Version           : :2000,3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
