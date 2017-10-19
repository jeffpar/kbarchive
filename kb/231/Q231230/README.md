---
layout: page
title: "Q231230: SMS: Canned Queries Do Not Complete"
permalink: /kb/231/Q231230/
---

## Q231230: SMS: Canned Queries Do Not Complete

	Article: Q231230
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbQuery kbsms200sp2fixkbfixlist
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a canned query, such as 'All Systems' and 'All Client Systems'
	that are included in Systems Management Server 2.0, the query may fail to
	complete.
	
	CAUSE
	=====
	
	This issue can occur because these queries create very large temporary tables in
	the tempdb database. If the table runs out of space, the queries do not
	complete.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This hotfix can be used for both Systems Management Server 2.0 and Service Pack
	1 sites. To install the hotfix, follow these steps:
	
	1. Stop the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services on the Systems Management Server site
	  server.
	
	2. Load the script using a SQL Server query tool, such as Query Analyzer or
	  ISQL/W.
	
	3. Click the Systems Management Server database, and then execute the script.
	
	4. Restart the Systems Management Server Site Component Manager and the SMS
	  Executive services.
	
	The script changes the following queries.
	
	  SMS001 All Systems
	  SMS006 All Systems with Hardware Inventory Collected
	  SMS007 All Systems with Microsoft Word 97
	  SMS026 All Systems with Specified Software Product Name and Version
	  SMS027 All Systems with Specified Software File Name and File Size
	  SMS028 All Client Systems
	  SMS029 All Non-Client Systems
	
	NOTE: The script updates only the queries documented at the end of this article.
	Not all of the queries are updated.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbQuery kbsms200sp2fix kbfixlist
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
