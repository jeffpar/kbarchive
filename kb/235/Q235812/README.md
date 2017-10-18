---
layout: page
title: "Q235812: SMS: DDM Fails to Process DDR w/ Assigned Sites Set to &lt;Unknown&gt;"
permalink: kb/235/Q235812/
---

## Q235812: SMS: DDM Fails to Process DDR w/ Assigned Sites Set to &lt;Unknown&gt;

	Article: Q235812
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbDiscovery
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Newly discovered computers may not show up in the Systems Management Server
	Administrator Console, Collections node under any collection. The Ddm.box
	directory on the Site Server may contain a large number of DDR (Discovery Data
	Record) files and the Ddm.log may show the following messages:
	
	  ~SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server.
	  ~SQL Msg #2627> Violation of PRIMARY KEY constraint
	  'System_SMS_Assign_ARR_PK'. Cannot insert duplicate key in object
	  'System_SMS_Assign_ARR'.~
	  ~SQL Msg #3621> The statement has been terminated.~
	
	CAUSE
	=====
	
	If the DDR being evaluated by the Discovery Data Manager (DDM) has an
	AssignedSites property value of Unknown in it then DDM might fail to process the
	DDR and stop processing the rest of the DDRs.
	
	WORKAROUND
	==========
	
	A current workaround is to stop the DDM component through the Systems Management
	Server Service Manager in the Administrator console, remove the DDR in process
	at the time and then restart the DDM component.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
