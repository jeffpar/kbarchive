---
layout: page
title: "Q321580: SMS: Distributions to Windows XP Clients May Not Work"
permalink: /kb/321/Q321580/
---

## Q321580: SMS: Distributions to Windows XP Clients May Not Work

{% raw %}

	Article: Q321580
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) software distributions to Microsoft Windows
	XP-based clients may not work. If you view the advertisement's status, you see
	message ID 10018 with the following description:
	
	  Advertisement %1 from site %2 was rejected because the client's platform is
	  not supported.
	
	CAUSE
	=====
	
	This behavior occur because the SMS client software distribution component
	(Smsapm32) incorrectly detects the client platform if the Windows XP Remote
	Desktop tool has been used on the client. This problem occurs only on Windows
	XP-based computers on which the Remote Desktop feature is turned on.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
