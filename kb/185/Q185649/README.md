---
layout: page
title: "Q185649: SMS: Run Cmd on Workstation Send Phase Only Never Shows Complete"
permalink: kb/185/Q185649/
---

## Q185649: SMS: Run Cmd on Workstation Send Phase Only Never Shows Complete

	Article: Q185649
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a job for a Run Command on Workstation package using only the
	Send Phase (no Distribute or Run Phase), the job never shows an overall status
	of complete. The status remains active indefinitely. However, the compressed
	package is sent to the targeted site(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Verify that the compressed package was successfully sent to the targeted
	  site(s) and then cancel the job.
	
	  -or-
	
	- Contact Microsoft Technical Support to obtain the following fix, or wait for
	  the next Systems Management Server service pack.
	
	  This fix should have the following timestamps:
	
	     9/25/97  7:47pm               536,608 BASE4.dll
	     9/25/97  7:47pm               252,800 SMSInst.dll
	
	Additional query words: prodsms smsscheduler smsadmin
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
