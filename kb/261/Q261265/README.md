---
layout: page
title: "Q261265: SMS: Files Are Not Removed by &quot;Delete Aged Collected Files&quot; Task"
permalink: /kb/261/Q261265/
---

## Q261265: SMS: Files Are Not Removed by &quot;Delete Aged Collected Files&quot; Task

	Article: Q261265
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Systems Management Server (SMS) Database Maintenance "Delete
	Aged Collected Files" task, disk space on the SMS-based computer may not
	recovered. The "Delete Aged Collected Files" task may not remove files that were
	once collected (orphaned), even though the task is designed to remove the files
	that are located in the SMS\Inboxes\Sinv\FileCol folder. Also, if you review the
	Smsdbmon.log file, you may see the following entries that indicate
	DeleteCollectedFiles is successful:
	
	  CTriggerManager::ExecuteTask - beginning Delete Aged Collected Files
	  process.
	  DeleteCollectedFiles deleted 100 files.
	  DeleteCollectedFiles deleted 20 directories.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, search for files in the SMS\Inboxes\Sinv\FileCol
	folder and delete files that are no longer collected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To determine the files that are collected by the Software Inventory Agent:
	
	1. Start the SMS Administrator console.
	
	2. Double-click the following items to expand them:
	
	   - Site Hierarchy
	   - Site
	   - Site Settings
	   - Client Agents
	
	3. Double-click Software Inventory Client Agent.
	
	4. Click the Inventory Collection tab.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
