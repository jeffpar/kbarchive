---
layout: page
title: "Q320276: SMS: SMS_EXECUTIVE Service Crashes If You Use %n in Command Line"
permalink: /kb/320/Q320276/
---

## Q320276: SMS: SMS_EXECUTIVE Service Crashes If You Use %n in Command Line

	Article: Q320276
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a combination of the percent character (%) followed by the letter "n"
	(for example, %n) in a program's command line, the SMS_EXECUTIVE service quits
	unexpectedly on the site server when the service is processing SMS client status
	messages.
	
	To view a program's command line, use the SMS Administrator console to locate the
	program under Site Database\Packages\<Package name>\Programs. Double-click
	the program, and then view the text in the Command line box on the General tab.
	
	CAUSE
	=====
	
	When Offer Status Summarizer (SMS_OFFER_STATUS_SUMMARIZER) processes the 10003
	status message from Smsapm32.exe, it logs various properties from the status
	message to Offersum.log. One of these properties is the command line that
	Smsapm32.exe runs. The logging routine that is used by
	SMS_OFFER_STATUS_SUMMARIZER does not always correctly handle a string containing
	the percent character. This behavior may cause Offersum.dll to either generate
	an access violation exception or it may corrupt the memory so that the
	SMS_EXECUTIVE service later quits unexpectedly in one of its components.
	
	NOTE: Currently, this issue is only known to occur if the "%n" combination exists
	in the command line.
	
	WORKAROUND
	==========
	
	To work around the problem, do not use the "%n" combination in the program's
	command line. If you must use "%n" in the command line, call the original
	command line from inside a batch file or an SMS Installer script to prevent this
	problem from occurring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms smsexec AV crash
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
