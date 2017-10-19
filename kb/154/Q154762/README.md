---
layout: page
title: "Q154762: How to Remove Jet&lt;n&gt;.log Files Created by DSMN"
permalink: /kb/154/Q154762/
---

## Q154762: How to Remove Jet&lt;n&gt;.log Files Created by DSMN

	Article: Q154762
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Directory Service Manager for NetWare (DSMN) periodically creates
	Jet<n>.log files. These files are used for recovery if the service is
	stopped abruptly or in an unusual way. If this happens, and the service is
	restarted, the log files are automatically used to re-create the correct state
	of the account synchronization database.
	
	However, over time, these files may accumulate in the
	%Systemroot%\System32\Syncagnt directory. This article explains how to remove
	these files.
	
	MORE INFORMATION
	================
	
	The log files are processed and deleted whenever a full backup of the account
	synchronization database occurs. Therefore, if many Jet<n>.log files have
	accumulated in the %Systemroot%\System32\Syncagnt directory, you should schedule
	daily backups to clear these logs.
	
	You can also delete these log files manually, as long as the DSMN service is not
	stopped incorrectly before the next full backup of the database.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
