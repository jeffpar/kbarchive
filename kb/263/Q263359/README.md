---
layout: page
title: "Q263359: SMS: When Deleting an Ad You Receive &quot;No Status&quot; Error Message"
permalink: /kb/263/Q263359/
---

## Q263359: SMS: When Deleting an Ad You Receive &quot;No Status&quot; Error Message

{% raw %}

	Article: Q263359
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to delete an advertisement when Microsoft SQL Server is not running,
	and the advertisement is not deleted, you receive a "No Status" error message.
	
	CAUSE
	=====
	
	The process of deleting an advertisement within the Systems Management Server
	Administrator console appears to take longer, and the deleted advertisement is
	no longer displayed. After restarting the SQL service, the deleted advertisement
	is displayed again. The error messages in the Offersum.log file are the only
	indication that the advertisement could not be removed.
	
	Here is an example from an Offersum.log file:
	
	  Error: Could not get a SQL connection from the connection cache. Will try
	  again in 60 seconds. : The handle is invalid.~~
	  $$<SMS_OFFER_STATUS_SUMMARIZER><Mon Aug 21 10:12:30.296 2000 Pacific
	  Daylight Time><thread=564 (0x234)> Error: Could not get a SQL
	  connection from the connection cache. Will try again in 60 seconds. : The
	  handle is invalid.~~ $$<SMS_OFFER_STATUS_SUMMARIZER><Mon Aug 21
	  10:20:47.015 2000 Pacific Daylight Time><thread=564 (0x234)>
	  Info>: Resetting the default heartbeat timer. It will expire by: Mon Aug
	  21 11:00:00 2000~ $$<SMS_OFFER_STATUS_SUMMARIZER><Mon Aug 21
	  10:20:52.031 2000 Pacific Daylight Time><thread=564 (0x234)> --->
	  SMS_OFFER_STATUS_SUMMARIZER stopping. The exit code is 0xfffffffe
	  $$<SMS_OFFER_STATUS_SUMMARIZER><Mon Aug 21 10:20:52.031 2000 Pacific
	  Daylight Time><thread=564 (0x234)> SMS_OFFER_STATUS_SUMMARIZER
	  stopped $$<SMS_OFFER_STATUS_SUMMARIZER><Mon Aug 21 10:20:52.031 2000
	  Pacific Daylight Time><thread=564 (0x234)>
	
	WORKAROUND
	==========
	
	After the SQL services are running again, you can delete the advertisement.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
