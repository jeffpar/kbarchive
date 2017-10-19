---
layout: page
title: "Q134972: Restore Local Database Option in WINS is Unavailable"
permalink: /kb/134/Q134972/
---

## Q134972: Restore Local Database Option in WINS is Unavailable

	Article: Q134972
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Restore Local Database option in the WINS manager is not available if the
	WINS service is running. However, the Backup Database option is available.
	
	WORKAROUND
	==========
	
	To restore a backed up WINS database:
	
	1. Run Control Panel and select Services.
	
	2. Select Windows Internet Name Service and choose Stop.
	
	3. Run WINS manager. Ignore the messages stating that the service is not
	  started.
	
	4. Restore the database.
	
	5. From Control Panel, restart the WINS service.
	
	Additional query words: prodnt selectable grey gray greyed out mappings MDB
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.51 4.0
	
	=============================================================================
	
