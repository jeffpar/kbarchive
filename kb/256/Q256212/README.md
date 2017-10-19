---
layout: page
title: "Q256212: Software Metering Client Agent Can Lock Out Domain User Account"
permalink: /kb/256/Q256212/
---

## Q256212: Software Metering Client Agent Can Lock Out Domain User Account

	Article: Q256212
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Software Metering on a Systems Management Server (SMS) 2.0
	client that is running Microsoft Windows NT, a user's domain account can become
	locked out. If the user is logged on to the local computer (not the domain), the
	Software Metering agent attempts to connect to the Software Metering server by
	using the local user account. If an account of the same name but with a
	different password exists in the domain, the domain account can become locked
	out because of too many invalid logon attempts.
	
	CAUSE
	=====
	
	This behavior occurs because the Software Metering client agent connects to the
	Software Metering server by using the logged-on user's security context.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	Ensure that users are logged on to the domain and not the local computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
