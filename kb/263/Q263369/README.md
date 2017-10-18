---
layout: page
title: "Q263369: SMS: Advertisement May Run While a User Is Logged Off"
permalink: kb/263/Q263369/
---

## Q263369: SMS: Advertisement May Run While a User Is Logged Off

	Article: Q263369
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0, an advertisement for a program with the
	setting that allows a program to run only when a user is logged on may run
	regardless of whether the user is logged on or not.
	
	CAUSE
	=====
	
	This problem can occur in the following circumstances:
	
	- If you select the "Program can run: Only when a user is logged on" option
	
	  -and-
	
	- If you select the "Run mode: Run with administrative rights" option.
	
	  -and-
	
	- The "Provide a countdown" check box is not selected in the Notification
	  Properties dialog box in the Advertised Programs Client agent on the client
	  computer.
	
	WORKAROUND
	==========
	
	To work around this problem, do not set the program to run with administrative
	rights if the program is also set to run only when a user is logged on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
