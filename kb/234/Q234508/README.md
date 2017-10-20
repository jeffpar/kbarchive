---
layout: page
title: "Q234508: SMS: How to Determine SMS Thread Responsible for High CPU Use"
permalink: /kb/234/Q234508/
---

## Q234508: SMS: How to Determine SMS Thread Responsible for High CPU Use

{% raw %}

	Article: Q234508
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If System Management Server 2.0 causes high processor utilization on the site
	server, there is a way to track the SMSEXEC thread responsible in order to begin
	troubleshooting the problem.
	
	MORE INFORMATION
	================
	
	To determine the SMS thread responsible for high CPU utilization, run
	Performance Monitor from a remote server, and then add the counters in the
	following table:
	
	+------------------------------------------------------------------------+
	| Object    | Counter          | Instance(s)                             | 
	+------------------------------------------------------------------------+
	| Processor | % Processor Time | <all instances>                         | 
	+------------------------------------------------------------------------+
	| Thread    | % Processor Time | <all instances needed> example: smsexec | 
	+------------------------------------------------------------------------+
	| Thread    | ID Thread        | <all instances needed>                  | 
	+------------------------------------------------------------------------+
	| Thread    | Thread State     | <all instances needed>                  | 
	+------------------------------------------------------------------------+
	
	  Definition of Thread State:
	
	  The current state of the thread:
	  0 = Initialized
	  1 = Ready
	  2 = Running
	  3 = Standby
	  4 = Terminated
	  5 = Wait
	  6 = Transition
	  7 = Unknown
	
	  A Running thread is using a processor; a Standby thread is about to use one. A
	  Ready thread wants to use a processor, but is waiting for a processor because
	  none are free. A thread in Transition is waiting for a resource in order to
	  execute, such as waiting for its execution stack to be paged in from disk. A
	  Waiting thread has no use for the processor because it is waiting for a
	  peripheral operation to complete or a resource to become free.
	
	Using Performance Monitor in Report (CTRL+R) view:
	
	  Locate the column with the thread(s) using the greatest processor time(s) and
	  note the ID Thread number.
	
	Using Performance Monitor in Chart (CTRL+C) view:
	
	  Locate the line with the thread(s) using the greatest processor time(s), and
	  note the Thread Instance.
	
	  Locate the ID Thread counter with the same instance number. Highlight
	  (right-click) that counter.
	
	  The number in the boxes Last, Ave, Mix, and Max will all be the same. This is
	  the ID Thread number.
	
	Convert the decimal version of the ID Thread (given on the report) to hex using
	the Calculator (Calc.exe).
	
	To begin troubleshooting the root of your high processor utilization, find the
	log file in the SMS\logs directory on your site server using the command Findstr
	/i <HexID>*.log.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
