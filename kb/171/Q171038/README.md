---
layout: page
title: "Q171038: SMS: SPNumber in Sms.Ini Remains 0 After Service Pack Update"
permalink: /kb/171/Q171038/
---

## Q171038: SMS: SPNumber in Sms.Ini Remains 0 After Service Pack Update

	Article: Q171038
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "SPNumber=" line in the [SMS] section of the Sms.ini file has a value of 0,
	regardless of the service pack version that has been installed. Additionally,
	the SP Number in the site control file (Sitectrl.ct0) is also always 0.
	
	WORKAROUND
	==========
	
	The service pack version is contained in the following text file on the client:
	Ms\Sms\Bin\Csdver.sms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sp1 sp2
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
