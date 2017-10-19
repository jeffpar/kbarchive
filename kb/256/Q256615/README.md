---
layout: page
title: "Q256615: Setup Time-Out Attempting to Create Indexes on Large Tables"
permalink: /kb/256/Q256615/
---

## Q256615: Setup Time-Out Attempting to Create Indexes on Large Tables

	Article: Q256615
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbUpgrade kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade a Systems Management Server (SMS) 2.0 site that has
	tables that contain many rows (for example the StatusMessages or Software
	Inventory tables), Setup may time out and stop with a general error message.
	When this occurs, the SMSSetup log contains the following text:
	
	  <03-13-2000 17:40:49>FAILED Sql Script: Creating indexes on
	  StatusMessages
	  <03-13-2000 17:40:49>SQL error
	
	CAUSE
	=====
	
	This behavior occurs because SQL runs the operation in Synchronous mode.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbUpgrade kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
