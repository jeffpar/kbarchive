---
layout: page
title: "Q242951: Software Inventory Does Not Clean Up Orphan Records in Database"
permalink: kb/242/Q242951/
---

## Q242951: Software Inventory Does Not Clean Up Orphan Records in Database

	Article: Q242951
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a computer by using the Systems Management Server (SMS)
	Administrator console, some software inventory tables are not properly cleaned
	up. This results in "orphaned" records in these tables (these are similar to SMS
	1.2 "unused common/specific" records). However, no functionality exists in SMS
	2.0 to delete "unused common/specific" records.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	NOTE: This fix is a SQL script that you can run against the SMS SQL database that
	you want to clean. The script is the same, regardless of the platform the SMS
	SQL database is running on (Alpha or Intel).
	
	WARNING: Stop the SMS_EXECUTIVE service on the SMS site server before running
	this script.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This hotfix creates a delete trigger on the System_DISC table to clean up
	inventory data. It also creates a stored procedure (spDelOrphanedSoftwareInv)
	that you can schedule to clean up orphaned software inventory from the
	SoftwareFile and SoftwareProduct tables.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
