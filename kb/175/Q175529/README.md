---
layout: page
title: "Q175529: Server Service Fails with System Error 8 or System Error 234"
permalink: /kb/175/Q175529/
---

## Q175529: Server Service Fails with System Error 8 or System Error 234

{% raw %}

	Article: Q175529
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The server service fails to start and the following events are recorded:
	
	  Event ID: 7023
	
	     Source: Service Control Manager
	     Type: Error
	     Description: The Server service terminated with the following error:
	                  More data is available.
	
	-or-
	
	  Not enough storage is available to process this command.
	
	  Event ID: 7001
	
	     Source: Service Control Manager
	     Type: Error
	     Description: The Net Logon service depends on the Server service
	                  which failed to start because of the following error:
	                  More data is available.
	
	If you attempt to start the server service manually, the following errors may be
	displayed:
	
	  A system error has occurred.
	
	  System error 234 has occurred.
	  More data is available.
	
	-or-
	
	  System error 8 has occurred.
	  Not enough storage is available to process this command.
	
	Other services that may fail to start (also with event ID 7001) include the
	computer browser and the directory replicator, because these services are
	dependent on the Server service.
	
	CAUSE
	=====
	
	The cause of these errors is the result of too much data stored in the following
	key in the registry.
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer
	\Parameters\NullSessionPipes
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The Server service queries the registry value above for its entries. The buffer
	for the amount of information that the Server service can accept when it queries
	is approximately 32 KB. If there are more than 32 KB in that entry, the Server
	service will fail to start and return the error "More data is available," or
	"Not enough storage is available."
	
	RESOLUTION
	==========
	
	The solution is to remove any unnecessary entries from this value in the
	registry, or apply (or reapply) the latest Windows NT Service pack.
	
	MORE INFORMATION
	================
	
	The default information contained in this key is:
	
	COMNAP
	COMNODE
	SQL\QUERY
	SPOOLSS
	LLSRPC
	EPMAPPER
	LOCATOR
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
