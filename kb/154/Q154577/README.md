---
layout: page
title: "Q154577: SMS: Site Properties Cannot Be Changed"
permalink: /kb/154/Q154577/
---

## Q154577: SMS: Site Properties Cannot Be Changed

{% raw %}

	Article: Q154577
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbDatabase kbSCMan kbsmsAdmin smsadmin smsdatabase smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the site properties, the changes are processed and appear
	current, but the changes do not actually take effect. In the Hman.log file, you
	find the following line:
	
	  Site Control Image in the database is newer, reuse that database copy.
	
	CAUSE
	=====
	
	This problem occurs when the date on your site computer is set to a future date
	(for example, 08/08/99) and you change the site properties. If you then set the
	date back to the actual date and try to change the site properties again, no
	changes take effect.
	
	The changes would eventually take effect on the future date that was previously
	set on the site computer.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Restore the Systems Management Server database from a backup that was made
	  when your computer was running with the actual time and date.
	
	  -or-
	
	- Remove and reinstall your Systems Management Server site.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbDatabase kbSCMan kbsmsAdmin smsadmin smsdatabase smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
