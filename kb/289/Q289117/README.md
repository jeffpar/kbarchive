---
layout: page
title: "Q289117: SQL Server Account Information Missing From Accounts Tab"
permalink: /kb/289/Q289117/
---

## Q289117: SQL Server Account Information Missing From Accounts Tab

	Article: Q289117
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the SMS 2.0 Service Pack 2 (SP2) Korean version of the
	Administration console and view "site properties", the Accounts tab may not be
	displayed correctly. Specifically, the SQL server account information box may be
	missing.
	
	CAUSE
	=====
	
	This is a problem in the SMS 2.0 SP2 Korean version of the Mmcpgres.dll file
	that causes the dialog box resource to not be edited correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can apply the SMS 2.0 SP2 English version of
	the Mmcpgres.dll file to the administration console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
