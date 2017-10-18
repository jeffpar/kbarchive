---
layout: page
title: "Q125668: Creating the SMS Administrator Log File UI.LOG"
permalink: kb/125/Q125668/
---

## Q125668: Creating the SMS Administrator Log File UI.LOG

	Article: Q125668
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMS Administrator can log its activities to a log file (a process known as
	tracing). By default, tracing is turned on for SMS Administrator, but the log
	file does not get created until SQL Server tracing is turned on.
	
	MORE INFORMATION
	================
	
	To turn on SQL Server tracing:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT or Microsoft SMS to
	correct them. Microsoft cannot guarantee that any problems resulting from the
	use of Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and select the HKEY_LOCAL_MACHINE
	  subtree.
	
	2. Go to the following subkey:
	
	     \SOFTWARE\MICROSOFT\SMS\TRACING
	
	3. From the parameter list, select SqlEnabled.
	
	4. From the Edit menu, choose DWORD.
	
	5. In the Data field, change the value from 0 to 1 and then choose OK.
	
	6. To verify that tracing is enabled for the SMS Administrator User Interface,
	  go to the following HKEY_LOCAL_MACHINE key:
	
	     \SOFTWARE\MICROSOFT\SMS\TRACING\SMS_USER_INTERFACE
	
	  The parameter Enabled should be set to 1.
	
	7. Exit and restart SMS Administrator (SMS.EXE).
	
	A UI.LOG file is created in the SMS\LOGS directory. The log file can be viewed
	using SMS Tracer (SMSTRACE.EXE). For more information on using SMS Tracer, query
	on the following words here in the Microsoft Knowledge Base:
	
	  " tracer " (without the quotation marks)
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
