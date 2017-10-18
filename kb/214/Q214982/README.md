---
layout: page
title: "Q214982: SMS: Unable to View Software Metering Data by the Month"
permalink: kb/214/Q214982/
---

## Q214982: SMS: Unable to View Software Metering Data by the Month

	Article: Q214982
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
	
	When you view data summarization rules for Software Metering in the
	Administrator Console, you are unable to select "Data Summarization Rule Age" or
	"Data Summarization Rule Granularity" by the month.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the options for viewing data by the minute,
	the hour, the day, the week, or the year.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	To select the various options for viewing data in the SMS Administrator Console,
	follow these steps:
	
	1. In the Administrator Console, navigate to the Component Configuration folder,
	  right-click Software Metering, and then click Properties.
	
	2. On the Data Summarization tab, add New Summarization Rule, and then view all
	  options by Age.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
