---
layout: page
title: "Q280518: SMS: Client Installation Process Stops Responding"
permalink: /kb/280/Q280518/
---

## Q280518: SMS: Client Installation Process Stops Responding

	Article: Q280518
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbConfig kbSecurity kbsms200 kbsms200bug
	Last Modified: 02-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a network that has a large number of domains, Microsoft Windows 95- and
	Windows 98-based client computers may not install the SMS client software. The
	client installation process may stop responding before the core components are
	installed.
	
	CAUSE
	=====
	
	This issue can occur when more than 32 client connection accounts have been
	defined for the installation of the client software.
	
	WORKAROUND
	==========
	
	To work around this issue, reduce the number of client connection accounts. To
	do this, create only a few accounts in the master domain and add them to any
	resource domains where the clients reside.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbClient kbConfig kbSecurity kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
