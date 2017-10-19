---
layout: page
title: "Q247229: SMS: Failure to Write to Log File Affects Executive Performance"
permalink: /kb/247/Q247229/
---

## Q247229: SMS: Failure to Write to Log File Affects Executive Performance

	Article: Q247229
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbConfig kbsms200
	Last Modified: 08-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging is enabled for a Microsoft Systems Management Server component that
	is implemented as a thread of the SMS Executive service, the service must be
	able to obtain write access to the log file. If the SMS Executive service cannot
	open the output file to write the logging information, its performance is
	severely affected.
	
	CAUSE
	=====
	
	The component enters a loop and continuously attempts to open the file. This
	behavior dramatically slows the SMS Executive service: It takes five seconds for
	the loop to time out for every entry that a given component attempts to log.
	
	WORKAROUND
	==========
	
	Ensure that the Systems Management Server service account has full access to the
	directory where the Systems Management Server log files are created. By default,
	this is the \Sms\Logs directory.
	
	Additional query words: prodsms smsexec frozen locked hung slow logs
	
	======================================================================
	Keywords          : kbtool kbConfig kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
