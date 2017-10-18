---
layout: page
title: "Q199816: SMS: Manually Stopped Threads of the SMSEXEC Service Autostart"
permalink: kb/199/Q199816/
---

## Q199816: SMS: Manually Stopped Threads of the SMSEXEC Service Autostart

	Article: Q199816
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMS_SITE_COMPONENT_MANAGER is the service that restarts the threads of
	SMS_EXECUTIVE. If SMS_SITE_COMPONENT_MANAGER is running, it restarts the stopped
	threads when it executes a polling cycle. By default, the polling cycle occurs
	every hour.
	
	MORE INFORMATION
	================
	
	As part of the polling cycle, SMS_SITE_COMPONENT_MANAGER also restarts the
	server-side services, such as SMS_EXECUTIVE itself and SMS_SQL_MONITOR. Note,
	however, that nothing polls and restarts SMS_SITE_COMPONENT_MANAGER. Therefore,
	if the SMS_SITE_COMPONENT_MANAGER is manually stoped, it must be manually
	restarted, or it will be automatically started after a server restarts.
	
	Additional query words: prodsms services threads re-start re-boot reboot start stop sms smssvr
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
