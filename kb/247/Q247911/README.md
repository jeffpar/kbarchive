---
layout: page
title: "Q247911: NET USER /DOMAIN Returns Incorrect Last User Logon"
permalink: /kb/247/Q247911/
---

## Q247911: NET USER /DOMAIN Returns Incorrect Last User Logon

	Article: Q247911
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET USER accountname /DOMAIN command to obtain the last logon
	information for a user account, you may find that the information about the last
	logon is incorrect.
	
	CAUSE
	=====
	
	This behavior can occur because NET USER contacts only the primary domain
	controller (PDC) for this information and therefore returns information only
	about the latest PDC authentication of that user.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the Usrstat.exe command to obtain user logon
	statistics.
	
	MORE INFORMATION
	================
	
	Usrstat.exe contacts all domain controllers and returns the last-logon
	information from each. You can compare the dates and times to determine the last
	user logon. The Usrstat.exe tool is in the Windows NT Server 4.0 Resource Kit.
	
	The NET USER command is designed to modify user accounts, not to return
	statistics.
	
	Additional query words: account
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
