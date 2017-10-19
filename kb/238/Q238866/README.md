---
layout: page
title: "Q238866: SMS: Event 1011 on Smsperf.dll Appears in Windows NT Event Log"
permalink: /kb/238/Q238866/
---

## Q238866: SMS: Event 1011 on Smsperf.dll Appears in Windows NT Event Log

	Article: Q238866
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Systems Management Server 2.0 site and logon servers, you may see an error
	message in the Microsoft Windows NT event log that is similar to the following
	example:
	
	  Event ID: 1011, Source: Perflib, The library file
	  "D:\SMSLOGON\I386\SMSPERF.dll" specified for the
	  "SMSPerfCountersForD:_SMSLOGON_I386_SMSPERF.DLL" service could not be opened.
	  Performance data for this service will not be available. Status code is data
	  DWORD 0.
	
	This error message occurs on Compaq servers that have Compaq Insight Agents
	installed. The error message usually occurs approximately 13 hours after
	restarting, and repeats every two minutes thereafter until the next restart.
	
	You may also see this error message on other types of servers. This error message
	is usually related to a problem with the Smsperf.dll file.
	
	CAUSE
	=====
	
	This behavior occurs because of a conflict between Compaq Insight Manager (or
	other type of performance data gathering software), and the Smsperf.dll file.
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method.
	
	NOTE: You can only use these methods for Compaq computers.
	
	- Upgrade the server to Compaq Insight Agents 4.23b or later, and install
	  Microsoft Windows NT Service Pack 5 or later.
	
	- Uninstall Compaq Insight Agents and install a version of Compaq Insight
	  Agents earlier than version 4.22.
	
	- Stop the Insight Host Agent and Insight Web Agent on the server every 12
	  hours.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about issues with the Smsperf.dll file, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q240426 SMS: Cannot Obtain Performance Data for SMS Counters
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
