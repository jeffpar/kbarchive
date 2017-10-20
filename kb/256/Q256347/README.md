---
layout: page
title: "Q256347: PRB: HrGetBackupLogs() Must Not Be Called Before HrBackupClose()"
permalink: /kb/256/Q256347/
---

## Q256347: PRB: HrGetBackupLogs() Must Not Be Called Before HrBackupClose()

{% raw %}

	Article: Q256347
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.x,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5
	Operating System(s): 
	Keyword(s): kbEDK kbExchange kbExchange500 kbExchange550 kbMsg kbEDK550 kbGrpDSMsg kbDSupport
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.x, 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- Information store does not start and hangs after restoring a backup using
	  Tivoli client v1.1.1.
	
	- If HrBackupGetBackupLogs() is called before HrBackupClose(), the call
	  succeeds. However, the result of the backup is a database that cannot be
	  restored consistently.
	
	CAUSE
	=====
	
	This behavior occurs because HrBackupGetBackupLogs() returns a list of log files
	that must be backed up. That list is generated only once per backup session, and
	the same list is returned from each subsequent call to HrBackupGetBackupLogs().
	If HrBackupGetBackupLogs() is called before the database backup is complete, the
	list of log files is incomplete.
	
	RESOLUTION
	==========
	
	To resolve this behavior, the HrBackupGetBackupLogs() must be called after you
	call HrBackupClose() on the database.
	
	To resolve this behavior with Tivoli client V1.1.1, upgrade to ver 1.1.1.01 of
	the client.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: Tivoli
	
	======================================================================
	Keywords          : kbEDK kbExchange kbExchange500 kbExchange550 kbMsg kbEDK550 kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4 kbExchange400SP5 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.x,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
