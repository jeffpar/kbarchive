---
layout: page
title: "Q142705: BUG: No Option in Windows NT to Limit Number of User Logons"
permalink: kb/142/Q142705/
---

## Q142705: BUG: No Option in Windows NT to Limit Number of User Logons

	Article: Q142705
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Server does not allow you to limit the number of user logons to a
	Windows NT Server domain.
	
	CAUSE
	=====
	
	User Manager for Domains in Windows NT Server does not support this
	functionality at this time.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run User Manager for Domains and select the user.
	
	2. From the User menu, select Properties.
	
	3. In the User Properties dialog box, choose Logon To.
	
	4. Choose User May Log On To These Workstations.
	
	5. Enter the name of the client computers you want to allow the user to log on
	  (up to 8 workstations).
	
	6. Choose OK and quit User Manager for Domains.
	
	7. Log on to a client computer on the Windows NT Server domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt usrmgr
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbbug
	
	=============================================================================
	
