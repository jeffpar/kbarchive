---
layout: page
title: "Q215059: SMS: Status Messages Stop Processing and Don't Appear In Status"
permalink: kb/215/Q215059/
---

## Q215059: SMS: Status Messages Stop Processing and Don't Appear In Status

	Article: Q215059
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200bug kbsms200fix kbStatSum
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors may appear in the Statmgr.log:
	
	  SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server.
	  SQL Msg #2627> Violation of PRIMARY KEY constraint 'StatusMessages_PK'.
	  Cannot insert duplicate key in object 'StatusMessages'.
	  SQL Msg #3621> The statement has been terminated.
	
	You may also receive the error on constraint 'StatusMessageAttributes_PK'.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Stop the SMS_STATUS_MANAGER using the Systems Management Server Service
	  Manager.
	
	2. Delete the oldest SQL file in the \SMS\Inboxes\statmgr.box\retry directory.
	
	3. Restart the SMS_STATUS_MANAGER using the Systems Management Server Service
	  Manager.
	
	4. Repeat steps 1-3 until the Statmgr.log file no longer reports the SQL errors.
	
	NOTE: Performing the workaround above may result in the loss of status messages.
	If losing currently queued status messages is acceptable, then you can simply
	delete all of the SQL files in step 2 and skip step 4.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms statmgr primary key violation SMS20SP1FIX
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200bug kbsms200fix kbStatSum 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
