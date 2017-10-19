---
layout: page
title: "Q140929: Appstart Causes General Protection (GP) Fault on Shared Apps"
permalink: /kb/140/Q140929/
---

## Q140929: Appstart Causes General Protection (GP) Fault on Shared Apps

	Article: Q140929
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a shared application, you experience a General Protection (GP)
	Fault in APPSTART.EXE.
	
	This symptom occurs sporadically.
	
	CAUSE
	=====
	
	The program tries to add more information to the internal buffer used by
	APPSTART for loading the directory names even though that buffer is already
	full.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft
	Technical Support for more information on the availability of this fix.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
