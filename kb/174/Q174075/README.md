---
layout: page
title: "Q174075: Strong Passwords With Passfilt.dll Are Not Enforced"
permalink: /kb/174/Q174075/
---

## Q174075: Strong Passwords With Passfilt.dll Are Not Enforced

	Article: Q174075
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbSecurity
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When strong password functionality is enabled on a Windows NT 4.0 computer, an
	Administrator will still be able to change a password, with the User Manager
	tool, in such a way that it no longer meets the criteria for strong passwords.
	
	MORE INFORMATION
	================
	
	This behavior is by design. Strong password filtering is performed when password
	change requests arrive over the network, and weak passwords are rejected at that
	time. Direct changes to the security account manager (SAM) database are not
	filtered.
	
	Additional query words: prodnt alpha numeric
	======================================================================
	Keywords          : kbSecurity 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	
	=============================================================================
	
