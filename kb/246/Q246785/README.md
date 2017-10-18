---
layout: page
title: "Q246785: SMS: SMSExec Components Report SQL Error Messages"
permalink: kb/246/Q246785/
---

## Q246785: SMS: SMSExec Components Report SQL Error Messages

	Article: Q246785
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMS Executive Service components (threads) run for a short period of time and
	then begin to report SQL errors if they are unable to establish an SQL
	connection. One of the following error messages may be logged:
	
	  General SQL Server error: Check messages from the SQL Server.
	
	  CSqlCache::InternalGetConnection() - Waiting for SQL Connection
	  (WaitForSingleObject())
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	This issue is resolved in the latest service pack.
	
	To work around this issue, stop and restart the SMS Executive service. This
	should free all SQL connections being used by the SMS Executive threads. After
	you restart the SMS Executive service, the threads should be able to connect to
	SQL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The hotfix for this article is dependent upon other developed fixes and you must
	install it as a complete package for compatibility.
	
	For additional information about the contents of this consolidated fix, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package
	
	Additional query words: prodsms sql connection
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
