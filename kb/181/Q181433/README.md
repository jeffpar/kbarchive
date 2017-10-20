---
layout: page
title: "Q181433: XADM: Event ID 1092 Replication Error By The MSExchangeDS"
permalink: /kb/181/Q181433/
---

## Q181433: XADM: Event ID 1092 Replication Error By The MSExchangeDS

{% raw %}

	Article: Q181433
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following event occurs in the Application event log and as a result, the
	directory can no longer communicate with the message transfer agent (MTA):
	
	  Event ID: 1092
	  Source:   MSExchangeDS
	  Type:     Error
	  Category: Replication
	
	  Description:
	  Internal error: The directory replication agent (DRA) got an exception
	  in X400 stubs during intersite replication. Stop and restart this
	  Microsoft Exchange Server computer.
	
	CAUSE
	=====
	
	This problem is caused by lack of disk space on the drive where the Mtadata
	subdirectory is located. It can also be caused by a temp or tmp variable that
	points to a non-existent or full disk.
	
	This behavior is by product design.
	
	WORKAROUND
	==========
	
	To resolve this problem, free disk space on the drive where the Mtadata
	subdirectory or temp/tmp variable is located or move them to a disk that has
	free space, and then restart the server.
	
	MORE INFORMATION
	================
	
	This error should only occur on a directory replication bridgehead server.
	Another symptom of the problem can be a number of messages queued in the
	Directory Service queue of the local MTA.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
