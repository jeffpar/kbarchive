---
layout: page
title: "Q213256: SMS: Data Summarization Does Not Account For Leap Years"
permalink: /kb/213/Q213256/
---

## Q213256: SMS: Data Summarization Does Not Account For Leap Years

	Article: Q213256
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have configured software metering to summarize licensed and unlicensed
	software usage by year, the data for leap years is reported based on a 365-day
	year instead of 366 days as expected.
	
	CAUSE
	=====
	
	Systems Management Server data summarization does not take leap years into
	account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
