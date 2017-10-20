---
layout: page
title: "Q125487: SMS Administrator Unable To Retrieve Machine List"
permalink: /kb/125/Q125487/
---

## Q125487: SMS Administrator Unable To Retrieve Machine List

{% raw %}

	Article: Q125487
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbDatabase kbInventory kbHMan smsinv smsdatabase smshierman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After dumping the Systems Management Server database and transaction log to a
	dump device and then restoring it to a different database and log device, either
	on the same SQL Server computer or a different one, the Systems Management
	Server Administrator program cannot retrieve the list of machines in a domain
	and the following errors appear in the Data Loader log file, Datalodr.log:
	
	     CMachine::FindMachine - Searching for matching Identification group info
	
	     CMachine::FindMachine - Query Execution failed
	
	These errors also appear in the Hierarchy Manager log file, Hman.log:
	
	     {818} ERROR SQL: General SQL Server error:
	                      Check messages from the SQL Server.
	
	     {825} INFO SQL:  Can't allocate space for object 'Syslogs' in database
	                      'xxx' because the 'logsegment' segment is full. If you
	                      ran out of space in Syslogs, dump the transaction log.
	                      Otherwise, use ALTER DATABASE or sp_extendsegment to
	                      increase the size of the segment.
	
	(where xxx is the Systems Management Server database name)
	
	CAUSE
	=====
	
	These errors occur because the Transaction Log for the Systems Management Server
	database is full and SQL Server can no longer log transactions to it. When
	Systems Management Server originally created the database it enables the
	Truncate Log On Checkpoint option. When the database is dumped and then restored
	to a new device, that option is not set by default, therefore, the Transaction
	Log is never truncated and eventually fills up.
	
	RESOLUTION
	==========
	
	1. Dump the Transaction log using the No Log option.
	
	2. Set the Truncate Log On Checkpoint option for the Systems Management Server
	  database.
	
	For more information, refer to the "Microsoft SQL Administrator User's Guide" and
	the "Microsoft SQL Server Troubleshooting Guide."
	
	Additional query words: sms prodsms SMS_HIERARCHY_MANAGER SMS_INVENTORY_DATA_LOADER
	
	======================================================================
	Keywords          : kbenv kbDatabase kbInventory kbHMan smsinv smsdatabase smshierman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
