---
layout: page
title: "Q142049: File Manager Displays Incorrect Users with File Open"
permalink: /kb/142/Q142049/
---

## Q142049: File Manager Displays Incorrect Users with File Open

	Article: Q142049
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you choose Open By in the Properties dialog box in File Manager of a remote
	file located in a directory with spaces in the directory name, information on
	users with the file(s) currently open that is displayed is incorrect.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following in File Manager:
	
	1. Stop sharing the network directory.
	
	2. Rename the directory in 8.3 directory format or without spaces in the
	  directory name.
	
	3. Share the directory again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
