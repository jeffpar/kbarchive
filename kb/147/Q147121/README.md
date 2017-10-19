---
layout: page
title: "Q147121: XADM: Cannot Incremental Restore Until Full Backup Is Restored"
permalink: /kb/147/Q147121/
---

## Q147121: XADM: Cannot Incremental Restore Until Full Backup Is Restored

	Article: Q147121
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt an Incremental Restore of the Information Store, the following
	error message appears:
	
	  Unable to restore data to <Server Name>\<Directory>,
	  Check the application event log for more information.
	
	The following Source NTBackup event appears:
	
	  Microsoft Exchange services returned 'The databases have not been restored to
	  this machine. You cannot restore an incremental backup until a full backup
	  has been restored' from a call to "RestoreRegister[]" additional data '-'.
	
	CAUSE
	=====
	
	This problem occurs if you select the Start Services After Restore check box in
	the Normal (Full) Restore Property screen, and you run the Incremental Restore
	immediately after the Full Restore (when the services are starting).
	
	The Incremental restore process copies the logs to the MDBData directory when the
	services are starting up and the original logs are being played. The process
	does not check if the services are currently started. Therefore, ensure that the
	Exchange services are stopped before running an Incremental restore of the
	Information Store database.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Perform the Normal (Full) Information Store from the tape again.
	
	2. Clear the Start Services After Restore check box.
	
	3. Run the Incremental Restore of the Information Store. If this is the last
	  incremental set to restore, select the Start Services After Restore check
	  box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
