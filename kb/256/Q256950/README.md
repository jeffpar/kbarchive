---
layout: page
title: "Q256950: SMS: Cannot Schedule Crystal Report on Windows 2000 Server"
permalink: /kb/256/Q256950/
---

## Q256950: SMS: Cannot Schedule Crystal Report on Windows 2000 Server

	Article: Q256950
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are scheduling Crystal Reports on a Microsoft Windows 2000-based
	Systems Management Server (SMS) 2.0 site server, the following error message may
	be displayed:
	
	  Can't open SQL server
	
	CAUSE
	=====
	
	The WMI ODBC driver does not connect to WMI because Crystal Reports always
	passes credentials, even if it is running locally. It incorrectly passes
	explicit credentials to Windows 2000, which rejects the request because explicit
	credentials are being supplied on the local computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
