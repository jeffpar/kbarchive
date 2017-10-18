---
layout: page
title: "Q167152: SMS: &quot;Couldn't Create A New Package&quot; Error"
permalink: kb/167/Q167152/
---

## Q167152: SMS: &quot;Couldn't Create A New Package&quot; Error

	Article: Q167152
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbConfig kbsmsAdmin smsadmin smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Systems Management Server version 1.1, the error "Couldn't
	create a new package" occurs when you attempt to create any package in the
	Systems Management Server Administrator program.
	
	CAUSE
	=====
	
	This problem occurs on computers running Microsoft Windows NT Server 4.0 that
	are also running Microsoft Systems Management Server 1.1. In addition, other
	strange problems or errors may occur if Systems Management Server is running
	under this configuration.
	
	Because Microsoft Windows NT Server 4.0 was released after Microsoft Systems
	Management Server 1.1 had been released, Microsoft Systems Management Server 1.1
	has not been tested to run under Microsoft Windows NT Server 4.0. Running
	Microsoft Systems Management Server 1.1 on computers running Microsoft Windows
	NT Server 4.0 is not supported by Microsoft Technical Support.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Upgrade Microsoft Systems Management Server to version 1.2.
	
	-or-
	
	- Install and administer Microsoft Systems Management Server 1.1 on a computer
	  running Microsoft Windows NT Server 3.51 with the latest Windows NT Server
	  service pack.
	
	Additional query words: prodsms SQL
	
	======================================================================
	Keywords          : kbenv kbnetwork kbConfig kbsmsAdmin smsadmin smsconfig 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbprb
	
	=============================================================================
	
