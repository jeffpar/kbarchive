---
layout: page
title: "Q280263: Cannot See or Move the Detail Bar in Health Monitor"
permalink: kb/280/Q280263/
---

## Q280263: Cannot See or Move the Detail Bar in Health Monitor

	Article: Q280263
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbui BoS2000
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Health Monitor in System Management Server (SMS) version 2.0
	on a Windows 2000-based server, or when you open the Health Monitor snap-in in
	Microsoft BackOffice Server (BOS) or the Microsoft Small Business Server (SBS)
	Administrator Console, the Details title bar may not be visible and you are not
	able to expand or contract the individual title bars.
	
	CAUSE
	=====
	
	This problem occurs because the Microsoft Management Console (MMC) does not
	automatically refresh itself.
	
	WORKAROUND
	==========
	
	To work around this issue, click the Resize button in the top right corner of
	the window, and then maximize the screen again. This resizes the ASP portion of
	the window and you can then see the Details title bar, and you can expand or
	contact the individual title bars.
	
	
	Additional query words: smallbiz SBS healthmon
	
	======================================================================
	Keywords          : kbui BoS2000 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
