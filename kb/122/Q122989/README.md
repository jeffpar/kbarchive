---
layout: page
title: "Q122989: SMS Err Msg: PowerPoint Could Not Locate or Start the Quick...."
permalink: /kb/122/Q122989/
---

## Q122989: SMS Err Msg: PowerPoint Could Not Locate or Start the Quick....

	Article: Q122989
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start a shared version of Microsoft PowerPoint Quick Viewer, the
	following error message appears:
	
	  PowerPoint could not locate or start the Quick Preview. It can be installed
	  using PowerPoint Setup.
	
	When you attempt to start PowerPoint Quick Viewer a second time, the application
	runs fine.
	
	CAUSE
	=====
	
	This problem is caused by a communication failure between AppStart and Quick
	Preview in correctly distinguishing a busy condition from a failure to launch
	the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
