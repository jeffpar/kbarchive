---
layout: page
title: "Q124549: Unable to Disable Print Event Logging in Windows NT 3.5"
permalink: /kb/124/Q124549/
---

## Q124549: Unable to Disable Print Event Logging in Windows NT 3.5

{% raw %}

	Article: Q124549
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT version 3.1, it was possible to disable event logging for all
	printing-related events by using the following Registry entry:
	
	  EventLog
	  ========
	
	  Disable Event logging from the Spooler (disabled by default)
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	     \Print\Providers
	
	     Add Value: "EventLog"
	
	     Data Type: REG_DWORD
	
	     Set the data = 0
	
	This same setting should work under Windows NT version 3.5, but it does not;
	printing events are still written to the event log.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
