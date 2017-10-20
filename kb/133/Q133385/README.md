---
layout: page
title: "Q133385: Using Performance Monitor to Monitor SMS Executive Threads"
permalink: /kb/133/Q133385/
---

## Q133385: Using Performance Monitor to Monitor SMS Executive Threads

{% raw %}

	Article: Q133385
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because the Systems Management Server Executive is a wrapper containing the
	actual Systems Management Server services for many functions in the Site, they
	are run as threads and are, therefore, not subject to many of the convenient
	Performance Monitor (PERFMON.EXE) features available to process- level
	statistics.
	
	This article describes how to monitor each thread for certain counters and how to
	isolate performance issues within the Executive.
	
	MORE INFORMATION
	================
	
	To use Performance Monitor and the Windows NT Registry Editor to monitor and
	isolate Systems Management Server Executive performance issues to certain
	threads:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Performance Monitor, and for the Object Thread, select %Processor Time,
	  ID Thread, and all SMS_EXEC instances.
	
	2. Monitor each thread's %Processor Time and identify the instance number in
	  Performance Monitor for the thread that takes the most processor time.
	
	3. Find the ID Thread item that has the same instance number as the thread you
	  identified in step 2 and select this ID Thread with the mouse. Note that its
	  Last and Average status indicators have the same value. This value is the
	  decimal thread ID.
	
	4. Convert the decimal thread ID to a hexadecimal (hex) number to get the
	  Windows NT thread ID for that SMS Component thread of the Executive.
	
	5. Start Registry Editor (REGEDT32.EXE).
	
	  a. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	        \SOFTWARE\Microsoft\SMS\Components\SMS_EXECUTIVE\Threads
	
	  b. Compare the thread ID of each component to the hex number from step 4.
	
	     If they match, you have found the SMS Executive thread component
	     responsible for the %Processor Time usage identified in Perfmon.
	
	More Troubleshooting Tips
	-------------------------
	
	To watch each task the identified thread component performs and the associated
	%Processer Time usage, use the SMSTrace tool and monitor the component log file
	beside the Performance Monitor window. When the log file goes idle, expect the
	%Processer Time usage of the component's thread to go idle also.
	
	To learn about other statistics of the thread, look at additional counters, for
	example, %User Time, etc.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
