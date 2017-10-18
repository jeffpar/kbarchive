---
layout: page
title: "Q159201: SMS: Infinite Loop in Scheduler with Corrupt SRQ File"
permalink: kb/159/Q159201/
---

## Q159201: SMS: Infinite Loop in Scheduler with Corrupt SRQ File

	Article: Q159201
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbScheduler smsscheduler
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A corrupted send request (.srq) file may cause the SMS Scheduler to enter an
	infinite loop, repeatedly writing an error similar to the following to its log
	file:
	
	     Size mismatch in RoutingInfo record.  Got 0, expected 544.~
	     $$<SMS_SCHEDULER><Wed Nov 06 08:49:37 1996~><thread=D7>
	     Size mismatch in RoutingInfo record.  Got 0, expected 544.~
	     $$<SMS_SCHEDULER><Wed Nov 06 08:49:37 1996~><thread=D7>
	
	Because the Scheduler is stuck in a loop, the Sched.log file is no longer
	overwritten at a specific size, and will keep growing in size until it either
	runs out of space on the hard drive, or until the Scheduler is stopped.
	
	If DUMPSEND is used to dump the same send request, it will also enter an infinite
	loop, writing an error similar to the following repeatedly to the screen until
	broken with a CTRL+C:
	
	     Unknown Record Type 18
	     Length: 0
	
	CAUSE
	=====
	
	This occurs when the SMS Scheduler or DUMPSEND encounters a record in the Send
	Request that has its record length set to zero. In order to read the next
	record, the record pointer is advanced by the length of the record. If that
	number is zero, then the record pointer never moves, and the current record is
	read repeatedly.
	
	
	WORKAROUND
	----------
	
	To work around this problem, do the following:
	
	1. Stop the Sms_executive.
	
	2. Remove the corrupted .srq file from the SMS\Site.srv\Schedule.box or
	  SMS\Site.srv\Sender.box\Requests\<outbox> directory.
	
	3. Restart the Sms_executive.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms services lansend despooler hung
	
	======================================================================
	Keywords          : kbenv kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
