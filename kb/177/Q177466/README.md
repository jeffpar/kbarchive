---
layout: page
title: "Q177466: SMS: NNP Stays on Windows 95 Taskbar After Login"
permalink: /kb/177/Q177466/
---

## Q177466: SMS: NNP Stays on Windows 95 Taskbar After Login

	Article: Q177466
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After a Windows 95 client logs on to a domain and runs the Smsls.bat file, the
	Network Naming Provider (NNP) application may appear on the taskbar and Program
	Group Control (PGC) may appear to stop responding. The NNP application can be
	manually closed and may allow PGC to continue. This usually occurs when the
	client is started, although it may also occur if the client is logged off and
	back on.
	
	MORE INFORMATION
	================
	
	The problem may occur if the Desktop Applications Director (DAD) toolbar from
	Perfect Office is loaded. Verify whether this application exists in the client's
	Startup Group. Running DAD manually may also cause the NNP application to appear
	on the taskbar.
	
	To workaround the problem, remove the Desktop Applications Director from the
	Startup Group.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: nnp w95 win95 app tool bar hang hung stop
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
