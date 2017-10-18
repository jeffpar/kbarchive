---
layout: page
title: "Q213157: SMS: Software Metering Does Not Accurately Report Usage"
permalink: kb/213/Q213157/
---

## Q213157: SMS: Software Metering Does Not Accurately Report Usage

	Article: Q213157
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
	
	Software Metering does not report program usage at specified intervals.
	
	CAUSE
	=====
	
	Data is lost for the few seconds it takes to synchronize the client. This means
	you lose approximately 5 to 10 seconds of data per cycle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
