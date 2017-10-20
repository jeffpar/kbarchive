---
layout: page
title: "Q264714: SMS: WIN9X Clients Fail to Run Advert. w/ Status Message 10003"
permalink: /kb/264/Q264714/
---

## Q264714: SMS: WIN9X Clients Fail to Run Advert. w/ Status Message 10003

{% raw %}

	Article: Q264714
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbsms200 kbAdvertisement kbPackage kbsmsAdmin kbSoftwareDist
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 95 and Microsoft Windows 98 clients fail to run an
	advertisement and report a status message 10003 with error 1317, "The specified
	user does not exist." The following error message is logged in the Smsapm32.log
	file on the client:
	
	  ACCOUNT MGR : ERROR: Could not get APM run account data for site 'XXX'
	  ACCOUNT MGR : Could not get data blob for site 'XXX'
	  SCHED DATA : Return code = 0x525; The specified user does not exist
	
	CAUSE
	=====
	
	When you create a new program using the Systems Management Server Administrator
	console, you can enable the following settings:
	
	- "Run with administrative rights"
	- "Use Windows NT client software installation account"
	
	However, only Microsoft Windows NT clients can run programs using the NT client
	software installation account. Note that Windows 95 and Windows 98 clients still
	attempt to run such a program as long as they are in the targeted collection and
	are not excluded by the "This program can only run on specified platforms"
	setting. This is because the Windows 95 and Windows 98 operating systems can
	only execute a process in the logged-on user's context. The concept of multiple
	user contexts does not exist.
	
	WORKAROUND
	==========
	
	If you need to advertise a program that must run with administrative privileges
	to Windows 95, Windows 98 clients, and Windows NT clients in a single
	advertisement, enable the "Run with administrative rights" setting but not "Use
	Windows NT client software installation account" setting. Windows 95 and Windows
	98 clients can successfully execute such a program in the logged-on user's
	context.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbsms200 kbAdvertisement kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
