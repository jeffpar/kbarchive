---
layout: page
title: "Q250564: SMS: Online License Metering Won't Work in Multi-Domain Scenario"
permalink: kb/250/Q250564/
---

## Q250564: SMS: Online License Metering Won't Work in Multi-Domain Scenario

	Article: Q250564
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 14-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users logged on to a Microsoft Systems Management Server site residing in a
	trusted domain cannot use software programs that are being metered online in an
	account domain group or to single users even though the users have been assigned
	permission. When the program is started, the following error message is
	displayed:
	
	  This product has had restrictions placed on its use, these restrictions
	  prevent you from using this product.
	
	  You are not allowed to use this product.
	
	CAUSE
	=====
	
	The License Metering Server is capable of retrieving user groups from multiple
	domains, but it does not retain the domain of origin and is unable to determine
	group membership from the trusted domain. Therefore, group checks and requests
	for permission to run group-assigned programs fail.
	
	When you inspect \Ms\Sms\Logs\Liccli.Log, the following message is displayed:
	
	  Getting groups for the user "LOWRIGHTS"
	  OK (0 groups)
	
	When you request an online metered version of Registry Editor, the following
	message is displayed:
	
	  Requesting use of "REGEDT32.exe", version: "4.00",lang:0x9,0x4 ...
	  ACCESS DENIED
	  Request received to terminate app.
	  TerminateApp() enumerating app windows.
	  Send WM_CLOSE to Registry Editor
	  TerminateApp() waiting for app to terminate.
	  TerminateApp() checking to see if app terminated in allotted time.
	  TerminateApp() closing app process handle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
