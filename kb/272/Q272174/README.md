---
layout: page
title: "Q272174: Advertisements Report Multiple Successes for One Successful Run"
permalink: /kb/272/Q272174/
---

## Q272174: Advertisements Report Multiple Successes for One Successful Run

	Article: Q272174
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 28-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Advertisement Status messages after a program has run
	successfully, two entries are listed for each successful run.
	
	CAUSE
	=====
	
	This behavior occurs because Microsoft Systems Management Server (SMS) is set to
	"Program restarts computer", or "SMS restarts computer".
	
	WORKAROUND
	==========
	
	The Advertview.exe tool can be used to provide more accurate and realistic
	reports, and is included in the SMS 2.0 Service Pack 2 (SP2) Support Tools
	files. For more information, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	When you view Advertisement Status messages you may receive two 10008 messages,
	or one 10008 and one 10009 message.
	
	
	Additional query words: prodsms Win9x Win95 Win98
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
