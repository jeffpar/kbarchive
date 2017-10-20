---
layout: page
title: "Q195505: XADM: How to Recover When the Database Drive Fails"
permalink: /kb/195/Q195505/
---

## Q195505: XADM: How to Recover When the Database Drive Fails

{% raw %}

	Article: Q195505
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps to recover when the drive containing the
	database files for the Microsoft Exchange Server information store and/or the
	Exchange Server directory service fails because of hardware problems, and is
	unrecoverable and unreadable.
	
	MORE INFORMATION
	================
	
	Steps for Recovery
	------------------
	
	1. In Control Panel, double-click Services, and set the System Attendant service
	  to disabled to prevent the service from trying to start up or being started
	  by server monitors.
	
	2. Install a new drive by adding hardware to replace the failed drive.
	
	3. Create a logical drive with the same name as before, and format it.
	
	4. In the <Exchsrvr> directory, create the Mdbdata and/or Dsadata
	  subdirectories.
	
	5. Enable the System Attendant, and restore from the last online backup for the
	  information store and/or directory store.
	
	6. Start the Exchange Server services.
	
	Because it is assumed that the drive containing the transaction log files is
	available, on startup, the service will replay through any log files generated
	since the last online backup, and will recover all data.
	
	NOTE: The above steps will result in no data loss ONLY if the transaction logs
	were not on the failed drive containing the database files.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
