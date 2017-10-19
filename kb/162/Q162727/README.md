---
layout: page
title: "Q162727: SMS: Setup Switch &quot;/noautoupgrade&quot; Fails"
permalink: /kb/162/Q162727/
---

## Q162727: SMS: Setup Switch &quot;/noautoupgrade&quot; Fails

	Article: Q162727
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbSCMan smssetup smssiteconfigmankbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading a Systems Management Server 1.1 site to version 1.2, the Systems
	Management Server administrator may not want to have any secondary sites beneath
	that primary site upgraded immediately. There is a documented command-line
	switch, "/noautoupgrade", that should serve that need; however, it does not work
	correctly. After the primary site is successfully upgraded to Systems Management
	Server 1.2, the Systems Management Server Hierarchy Manager begins to upgrade
	any secondary sites reporting to it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: config hman service install setup SMS_Hierarchy_manager
	
	======================================================================
	Keywords          : kbsetup kbSCMan smssetup smssiteconfigman kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
