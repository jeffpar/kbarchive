---
layout: page
title: "Q201016: SMS: All Senders Except Courier Sender Log to Sender.log"
permalink: /kb/201/Q201016/
---

## Q201016: SMS: All Senders Except Courier Sender Log to Sender.log

	Article: Q201016
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Systems Management Server tracing is enabled, Systems Management Server
	components will log their activity to the Smsroot\Logs directory (Smsroot is the
	default installation directory for Systems Management Server). By default, all
	Systems Management Server senders (with the exception of the Courier Sender,
	which logs to the Coursend.log log file by default) will log to Sender.log. When
	attempting to analyse a particular sender's log output, the Sender.log file can
	prove difficult to read.
	
	CAUSE
	=====
	
	All sender code (with the exception of the Courier Sender) is maintained within
	a single binary (Sender.dll), which logs output for the Standard Sender,
	Asynchronous RAS Sender, ISDN RAS Sender, X25 RAs Sender, and SNA RAS Sender to
	Sender.log.
	
	WORKAROUND
	==========
	
	If you view the Sender.log file using the Systems Management Server Tracer, you
	can click View, click Filter, and then click Filter by Component to selectively
	view log output produced by one particular sender type.
	
	As an alternative, the Systems Management Server Service Manager for Systems
	Management Server 2.0 can be used to change the log file name used by a selected
	sender component:
	
	1. From the Components node, select the sender for which you want to change the
	  log file name (for example, SMS_ASYNC_RAS_SENDER).
	
	2. Select the Logging entry from the Component menu or press CTRL+L.
	
	3. Change the log file name to a new name to which you want the component to
	  log.
	
	4. Stop and restart the SMS_EXECUTIVE to enable the component to log to the new
	  file.
	
	This method will allow a specified sender to log to a dedicated log file for that
	sender type. This procedure may be beneficial if the log file is to be analysed
	over a long period.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodsms smssvr
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
