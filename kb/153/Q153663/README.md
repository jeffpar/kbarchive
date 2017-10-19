---
layout: page
title: "Q153663: SMS: How to Set Up SMS Alert Actions Write To a Log File"
permalink: /kb/153/Q153663/
---

## Q153663: SMS: How to Set Up SMS Alert Actions Write To a Log File

	Article: Q153663
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbsmsUtil smshowto smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server Alerts can be configured to echo a line of
	text to either a server console or file when the query condition is triggered.
	
	To display a popup message on the server console, use the following command
	line:
	
	  " CMD /C echo this is a test" (without the quotation marks)
	
	To write the alerts to a file (Alerts.txt) on the server, use the following
	command line:
	
	  " CMD /C echo this is a test >> c:\Alerts.txt" (without the quotation
	  marks)
	
	Additional query words: prodsms alert message create
	
	======================================================================
	Keywords          : kbusage kbsmsUtil smshowto smsutil 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
