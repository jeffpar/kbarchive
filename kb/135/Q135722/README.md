---
layout: page
title: "Q135722: Windows NT Fails to Validate FTP Logins from Trusted Domains"
permalink: /kb/135/Q135722/
---

## Q135722: Windows NT Fails to Validate FTP Logins from Trusted Domains

	Article: Q135722
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FTP servers running Windows NT 3.5 that are configured to allow anonymous
	connections allow users from trusted domains to logon to an FTP server. In
	Windows NT 3.51, non-anonymous FTP connections from trusted domains fail.
	
	When non-anonymous FTP connections from trusted domains fail, the following error
	message appears:
	
	  user cannot login, login failed
	
	
	RESOLUTION
	==========
	
	When you log on to an FTP server with an account from a trusted domain, logon as
	Domain\User, where Domain is the Windows NT domain that has your user account
	and User is your Windows NT domain logon name.
	
	This change was made in Windows NT 3.51 to enhance security.
	
	
	Additional query words: prodnt authentication
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
