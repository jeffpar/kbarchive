---
layout: page
title: "Q197851: User May Have Two Passwords After Migration from LAN Manager"
permalink: /kb/197/Q197851/
---

## Q197851: User May Have Two Passwords After Migration from LAN Manager

	Article: Q197851
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user may have two different passwords (a LAN Manager password and a Windows NT
	password) without knowing it.
	
	MORE INFORMATION
	================
	
	The Windows NT password may be empty if the account database was migrated from
	an old LAN Manager domain (for example, by using Portuas.exe). In this case, the
	old LAN Manager password (encrypted with DES) is taken from the old account
	database, and the new Windows NT password (encrypted using MD4) will be empty,
	because there is no way to recalculate the password from the LM database.
	
	In Service Pack 4, security validation has changed. It is possible a user is
	validated only by the Windows NT 4.0 password, which can be empty if it has not
	been changed since the migration from LAN Manager.
	
	
	For additional information on this security validation change, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q147706 How to Disable LM Authentication on Windows NT
	
	RESOLUTION
	==========
	
	To resolve this issue, after migration, have the user change the password in the
	Windows NT domain. This can be achieved by setting the appropriate flags in the
	Windows NT User Manager for Domains. After the password has changed, both
	passwords (LAN Manager and Windows NT) will be kept in sync.
	
	Additional query words: NT4SP4 security validation
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
