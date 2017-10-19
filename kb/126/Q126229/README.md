---
layout: page
title: "Q126229: DOCERR: Moving Sender Outbox In SMS is Unsupported"
permalink: /kb/126/Q126229/
---

## Q126229: DOCERR: Moving Sender Outbox In SMS is Unsupported

	Article: Q126229
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbdocerr kbScheduler kbsmsAdmin smsadmin smsdocerr smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Systems Management Server Administrator's guide" states the
	following on page 188:
	
	  You can change the name of an outbox or move the outbox to a different server
	  or drive.
	
	Changing the location or the name of the sender outboxes used by the Systems
	Management Server senders has not been tested by Microsoft and is not supported
	in SMS versions 1.0 and 1.1. For more information, refer to section 17 of the
	SMS Release notes (README.TXT).
	
	Note: This restriction also applies to SMS version 1.2.
	
	MORE INFORMATION
	================
	
	Following the instructions on page 189 of the SMS Administrator's guide to move
	the outbox results in errors similar to the following in the LANSEND.LOG file:
	
	  Checking for sending capacity. Used 0 out of 5.
	  Connecting to D:\SMS\Site.srv\sender.box\requests\LAN_DEFA.000
	  No (more) send requests found to process
	  Registry indicates no outbox for the sender to scan.
	
	You may be able to effectively relocate the outbox by initiating three updates to
	the proposed properties (watchdog cycles) by the SMS_Site_Config_Manager:
	
	1. Choose Site Properties.
	
	2. Choose Outboxes
	
	3. Choose Proposed Properties.
	
	4. Choose OK until you are prompted to update the site.
	
	This causes one watchdog cycle to occur. Since three watchdog cycles are required
	to make the requested change take effect, repeat these steps two more times.
	
	These steps are also required to move the outbox back to the original supported
	location. You need to do this if you attempted to move the outbox as explained
	in the "Systems Management Server Administrator's Guide."
	
	REFERENCES
	==========
	
	The SMS release notes are located in the root directory on the SMS CD in
	README.TXT.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbdocerr kbScheduler kbsmsAdmin smsadmin smsdocerr smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
