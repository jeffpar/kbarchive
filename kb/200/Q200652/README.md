---
layout: page
title: "Q200652: SMS:Can't Install SMS 1.2 Administrator w/SMS 2.0 Administrator"
permalink: /kb/200/Q200652/
---

## Q200652: SMS:Can't Install SMS 1.2 Administrator w/SMS 2.0 Administrator

{% raw %}

	Article: Q200652
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 01-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On any one installation of Windows NT 4.0 (either Server or Workstation), you
	can have either the Systems Management Server 2.0 Administrator console or the
	Systems Management Server 1.2 Administrator installed, but not both.
	
	WORKAROUND
	==========
	
	To work around this problem and install the Systems Management Server 2.0
	Administrator console on a computer that has the Systems Management Server 1.2
	Administrator installed, you can do either of the following:
	
	- Create a separate installation of Windows NT, configure the system to
	  dual-boot, then install the Systems Management Server 2.0 Administrator
	  console on the second installation of Windows NT.
	
	  -or-
	
	- Use the Systems Management Server 1.2 Setup program to remove the Systems
	  Management Server 1.2 Administrator and then install the Systems Management
	  Server 2.0 Administrator console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For more information, see the Systems Management Server 2.0 Administrator's
	Guide.
	
	Additional query words: prodsms smssetup sms20
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
