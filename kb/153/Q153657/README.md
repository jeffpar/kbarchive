---
layout: page
title: "Q153657: SMS: Event ID 316 Reports Incorrect Site Code"
permalink: /kb/153/Q153657/
---

## Q153657: SMS: Event ID 316 Reports Incorrect Site Code

{% raw %}

	Article: Q153657
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsappman smsscheduler kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The description of Event ID 316 (logged in SMS Administrator or the Windows NT
	Applications log) for the site experiencing connection problems is incorrect.
	For example, if a package is sent to secondary site S02 and the site server is
	down, the following event appears with a site ID other than S02:
	
	  Event Id:316 Source: SMS_Scheduler
	
	  Description: The job encountered an error while sending data or performing
	  operations relating to the destination site. Possible causes are XYZ
	  addresses to the destination site may be invalid (server or account
	  information may be incorrect); the destination site server may not be
	  running; or there may be communications or other sending-related errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: event 316 site error prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsappman smsscheduler kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
