---
layout: page
title: "Q122176: SMS Site Reset Recommended Before Upgrade"
permalink: /kb/122/Q122176/
---

## Q122176: SMS Site Reset Recommended Before Upgrade

{% raw %}

	Article: Q122176
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	Microsoft recommends that prior to attempting an upgrade of Systems
	Management Server site server software, that you perform a Site Reset from
	the SMS Setup program. This is intended to ensure that all service
	components are properly responding to service control commands for stopping
	and starting.
	
	SYMPTOMS
	========
	
	During an upgrade of the Systems Management Server site server software, the
	SMS_Executive service cannot be stopped and reports an error. The upgrade
	fails.
	
	One or more of the following symptoms may indicate that this is the problem:
	
	- Sometimes after a NET STOP SMS_EXECUTIVE command, Service Control Manager
	  responds with "the service cannot be controlled."
	
	- Control Panel shows SMS_Executive is not running.
	
	- NET START shows SMS_Executive is running.
	
	- NET START SMS_EXECUTIVE results in:
	
	  System error 1072 has occurred.
	  The specified service has been marked for deletion.
	
	- There are many new temporary (.TMP) files in the root of the site drive that
	  can't be deleted.
	
	WORKAROUND
	==========
	
	Shutdown and restart the Windows NT server, do a Systems Management Server Site
	Reset, and then attempt to upgrade again. There is no way to stop the service
	after it was uninstalled while running, other than a system shutdown. The reset
	should clean up service problems. The upgrade should make sure all the correct
	files have been replaced and the new settings are correctly entered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
