---
layout: page
title: "Q175077: SMS: Audit Gets &quot;No Data Available&quot; Message After Full Inventory"
permalink: /kb/175/Q175077/
---

## Q175077: SMS: Audit Gets &quot;No Data Available&quot; Message After Full Inventory

	Article: Q175077
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbsms120 kbsms120bug
	Last Modified: 06-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a full inventory is added to the database, the Audited Packages icon in
	Personal Computer Properties shows "No Data Available." The audited packages
	appear if you click on the history records.
	
	CAUSE
	=====
	
	When a full inventory (that is, both hardware and software inventory together)
	is run, and Inventory Dataloader adds the inventory to the database, Dataloader
	looks at the current entries for the client's dwMachineID. If entries exist, and
	they are not contained in the new "full" MIF, Dataloader removes them from the
	current record and adds them to the history record for the client.
	
	WORKAROUND
	==========
	
	To work around this problem, view audited packages as historical records, where
	they will appear correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	MORE INFORMATION
	================
	
	Software Auditing is not intended to be used for targeting workstation package
	distribution. Precise software inventory of workstations should be done using
	software inventory rules (Inventory Packages), because they are more efficient
	and accurate.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148263 Invalid Audit and History Records
	
	
	Additional query words: prodsms smsadmin smsdatabase data loader
	
	======================================================================
	Keywords          : kbusage kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
