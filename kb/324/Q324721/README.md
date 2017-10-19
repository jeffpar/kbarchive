---
layout: page
title: "Q324721: SMS: Clitravl.exe Returns Error Code 1 Even If Successful"
permalink: /kb/324/Q324721/
---

## Q324721: SMS: Clitravl.exe Returns Error Code 1 Even If Successful

	Article: Q324721
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use a Systems Management Server (SMS) advertisement to run Clitravl.exe
	to set or modify Travel mode on SMS clients, the advertisement return a "failed"
	status even if Clitravl.exe runs successfully.
	
	CAUSE
	=====
	
	Clitravl.exe returns error code 1 even if it runs successfully. You can confirm
	this by verifying that the Travel mode properties are selected on the clients
	and that the advertisement status is "failed."
	
	WORKAROUND
	==========
	
	To work around this behavior and to cause the correct status to be returned, you
	can run Clitravl.exe from a batch file to detect and set the return status. This
	is a sample batch file:
	
	  clitravl.exe /TRAVEL=ON
	  if errorlevel 1 exit 0
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Clitravl.exe returns the following values when you run it:
	
	- Clitravl.exe returns 1 if Travel mode was already on or was just turned on.
	
	- Clitravl.exe returns 0 if Travel mode was already turned off or was just
	  turned off.
	
	- Clitravl.exe returns -1 if an error occurs.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4 kbSMSTopaz
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
