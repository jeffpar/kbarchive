---
layout: page
title: "Q152232: Backup Database Option Grayed When Selecting Remote WINS Server"
permalink: /kb/152/Q152232/
---

## Q152232: Backup Database Option Grayed When Selecting Remote WINS Server

{% raw %}

	Article: Q152232
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
	
	When using the Windows Internet Naming Service (WINS) Manager, the Backup
	Database and Restore Database options (on the Mappings menu) are grayed out
	(unavailable).
	
	CAUSE
	=====
	
	The Backup Database and Restore Database options are unavailable if you are
	viewing the WINS database on a remote WINS server. These options are only
	available when viewing the local WINS server's database.
	
	MORE INFORMATION
	================
	
	When using the WINS manager, the Backup and Restore of the WINS database must be
	done from the WINS server.
	
	Additional query words: grey
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
