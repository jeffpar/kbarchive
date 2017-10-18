---
layout: page
title: "Q136633: Reconnecting a RAS Line Without a User Logged On"
permalink: kb/136/Q136633/
---

## Q136633: Reconnecting a RAS Line Without a User Logged On

	Article: Q136633
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Remote Access Services (RAS) can be configured to reconnect to a
	remote server when a line fails, however, the Remote Access client application
	(RASPHONE.EXE) must be running for the line to automatically reconnect.
	Consequently, if a user is not logged on at the time of the line failure, RAS
	will not automatically reestablish the link.
	
	MORE INFORMATION
	================
	
	To enable the Redial on link failure option, choose Redial Settings from the
	Remote Access Options menu.
	
	The ability to reconnect a RAS link when no user is logged on is being considered
	for future versions of Windows NT. To achieve this functionality now, write your
	own service or use a third party product. Somar ReDial, by Somar Software,
	allows a RAS link to be reconnected when no user is logged on. Somar Software
	can be reached at http://www.somar.com or 72202,2574 on CompuServe. Other 3rd
	party vendors may also provide similar solutions.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
