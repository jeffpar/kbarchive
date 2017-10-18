---
layout: page
title: "Q183236: SMS: Can't Delete Systems Jobs That Are in a Pending State"
permalink: kb/183/Q183236/
---

## Q183236: SMS: Can't Delete Systems Jobs That Are in a Pending State

	Article: Q183236
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Jobs window, System jobs may remain in a Pending state. If you attempt to
	delete them, the following error message occurs:
	
	  Couldn't delete the specified item.
	  <job id>
	
	CAUSE
	=====
	
	This problem can occur when the SQL Server transaction log used by the Systems
	Management Server database becomes full.
	
	WORKAROUND
	==========
	
	Before deleting the pending system jobs, first correct the problem with the
	transaction log and ensure that a backup has been made of the SMS database.
	
	To delete these jobs, use a SQL Server query. To do this, perform the following
	steps:
	
	1. Use ISQL/w to execute the following SQL Server query:
	
	  Select * from Jobs where JobType = null
	
	2. Verify that the jobs listed are all "Pending" system jobs. If necessary, you
	  can print the list of job IDs and compare the list in the Systems Management
	  Server Administrator program.
	
	3. Execute the following query to delete the jobs:
	
	  Delete from Jobs where JobType = null
	
	This procedure should remove all of the system jobs that have a Pending state.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
