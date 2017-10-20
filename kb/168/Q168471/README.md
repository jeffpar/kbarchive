---
layout: page
title: "Q168471: New Synchronization Behavior with Windows NT Server Version 4.0"
permalink: /kb/168/Q168471/
---

## Q168471: New Synchronization Behavior with Windows NT Server Version 4.0

{% raw %}

	Article: Q168471
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with Microsoft Windows NT Server version 4.0, the synchronization
	replication behavior for the security account manager (SAM) database, also known
	as the user account database, has changed.
	
	MORE INFORMATION
	================
	
	Prior to Windows NT 4.0, full synchronization replication could be forced by
	selecting a backup domain controller (BDC) in Server Manager and clicking
	"Synchronize with Primary Domain Controller" in the Computer menu. Now, this
	procedure triggers a partial synchronization if the PDC and BDC are both running
	Windows NT Server 4.0. You can still force a full synchronization by typing the
	following command at a command prompt on the BDC:
	
	  net accounts /sync
	
	You can also force a full synchronization by using the NLTEST utility from the
	Windows NT Server 4.0 Resource Kit:
	
	  nltest /sync /server:<BDC_name>
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
