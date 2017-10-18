---
layout: page
title: "Q216411: ERRMSG: A Required Privilege Is Not Held by the Client"
permalink: kb/216/Q216411/
---

## Q216411: ERRMSG: A Required Privilege Is Not Held by the Client

	Article: Q216411
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you connect through a terminal server client to view or modify the audit
	properties of a directory on a member server or workstation, you receive the
	following error message:
	
	  A required privilege is not held by the client.
	
	This error can occur even if the account you are using is a member of the Domain
	Admins global group in the master domain or a resource domain.
	
	CAUSE
	=====
	
	The account does not have necessary rights on the terminal server.
	
	RESOLUTION
	==========
	
	To resolve this issue, make the user a member of the local Administrators group
	on the terminal server and the member server/workstation where the user will be
	configuring the auditing changes.
	
	As a more secure solution, you could simply grant the user the right to "Manage
	auditing and security log" on the two computers. The user will then be able to
	manage auditing on a member server/workstation.
	
	MORE INFORMATION
	================
	
	This is the same error message that a user will receive if he or she tries to
	manage auditing directly on a computer to which he or she has not been granted
	the "Manage auditing and security log" right.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
