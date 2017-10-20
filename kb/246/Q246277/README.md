---
layout: page
title: "Q246277: XADM: Cannot Restore Exchange Server 5.5 with Seagate BackupExec"
permalink: /kb/246/Q246277/
---

## Q246277: XADM: Cannot Restore Exchange Server 5.5 with Seagate BackupExec

{% raw %}

	Article: Q246277
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Seagate BackupExec version 6.11 or 7.0 to restore Microsoft
	Exchange Server 5.5 from a tape backup, the operation may not succeed and you
	may receive one or more of the following error messages:
	
	  Error 4294965485: JET_errFileNotFound
	
	  Error 4294966746: JET_errDatabaseInconsistent
	
	  Error 3355443730 (which indicates log corruption)
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact Seagate Technology, Inc., for the latest fixes
	for the BackupExec program.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the NTBackup utility to restore Exchange
	Server. Before beginning the process, you must catalog the tape.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
