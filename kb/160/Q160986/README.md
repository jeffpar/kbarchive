---
layout: page
title: "Q160986: SMS: Dosetup.exe Fails with &quot;Runs with UNC Name&quot; Option Enabled"
permalink: /kb/160/Q160986/
---

## Q160986: SMS: Dosetup.exe Fails with &quot;Runs with UNC Name&quot; Option Enabled

	Article: Q160986
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Dosetup.exe is used on the Configuration command line of a shared network
	application, it will fail to configure the registry of a computer running
	Windows NT or Windows 95, when the package properties are defined with the
	option "Runs with UNC Name."
	
	CAUSE
	=====
	
	This problem is due to a limitation of all 16-bit applications. Because
	Dosetup.exe is a 16-bit application, it cannot get a current working directory
	of a UNC name.
	
	This limitation is also documented in the Systems Management Server 1.2 Release
	Notes under "Shared Applications and UNC Paths."
	
	WORKAROUND
	==========
	
	To work around this problem, set up the package to either use "Requires Drive
	Letter" or "Requires Specific Drive Letter."
	
	MORE INFORMATION
	================
	
	When the client runs the shared application, the user will receive a message
	stating that a one-time installation is required for this application.
	Continuing, the client will then receive the following message:
	
	  '<your application>' has not been successfully configured.
	
	The Pgg.log file on the client shows the following information:
	
	     [10/26/96 13:04:28] Program Group Control ==> An Application specific
	     error occurred: SMSSETUP - <your application>: Cannot access SETUP.EXE
	     on application server.
	
	     [10/26/96 13:05:16] Program Group Control Start ==> '<your application>'
	     has not been successfully configured.
	
	Additional query words: prodsms win95 app
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
