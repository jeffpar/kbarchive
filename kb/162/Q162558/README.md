---
layout: page
title: "Q162558: SMS: Job Status MIF Processing Slow on Large JobDetails Table"
permalink: kb/162/Q162558/
---

## Q162558: SMS: Job Status MIF Processing Slow on Large JobDetails Table

	Article: Q162558
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,6.0,6.5
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbDataLoader smsdatabase smsdataloaderkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After many Job Status MIFs have been processed and loaded in the Systems
	Management Server database, the time taken by the Dataloader to process job
	status MIFs may increase significantly. In some cases, the increase in
	processing time between a JobDetails table with 100 records and a JobDetails
	table with 230,000 records may be as much as a factor of 50.
	
	CAUSE
	=====
	
	The JobDetails table has an index on the MachineID column. However, in Job
	Status MIF processing, this index is not used by the majority of queries made by
	the Dataloader.
	
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms JMF performance stress
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbDataLoader smsdatabase smsdataloader kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2,6.0,6.5
	Issue type        : kbbug
	
	=============================================================================
	
