---
layout: page
title: "Q268894: SMS Service Manager Returns Error Message"
permalink: kb/268/Q268894/
---

## Q268894: SMS Service Manager Returns Error Message

	Article: Q268894
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) Service Manager may generate the following error
	message if the currently logged-on user is a member of many domain local
	groups:
	
	  Error communicating with the specified SMS Site Server
	
	CAUSE
	=====
	
	SMS Service Manager uses a Windows Management Instrumentation (WMI) provider
	that is located on the site server to which the Service Manager console
	connects. The WMI provider is responsible (among other things) for verifying
	that the user who is running the Service Manager console is an administrator. If
	the user is a member many domain local or computer local groups, the check for
	Administrator local group membership may not succeed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the number of local groups of which the user
	is directly or indirectly a member. You can do this to verify that you are
	experiencing the problem that is described in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
