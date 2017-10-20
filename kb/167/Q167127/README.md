---
layout: page
title: "Q167127: SMS: Client Program Group Is Not Created on Windows Clients"
permalink: /kb/167/Q167127/
---

## Q167127: SMS: Client Program Group Is Not Created on Windows Clients

{% raw %}

	Article: Q167127
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Systems Management Server for the first time on a client
	computer running Windows 3.x or Windows for Workgroups 3.x, the Systems
	Management Server program group may not be created completely if Extra! from
	Attachmate is loaded in the Startup group.
	
	To prevent this behavior, move the Extra! program from the Startup group to the
	load= line of the Win.ini file, as in the following example:
	
	  load=c:\extrawin\user\layout09.ewl
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsms sms wfw 3.11 win 3.1
	
	======================================================================
	Keywords          : kb3rdparty kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
