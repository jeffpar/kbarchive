---
layout: page
title: "Q242924: SMS: Client Install Problems Using the SMS_LOCAL_DIR Variable"
permalink: kb/242/Q242924/
---

## Q242924: SMS: Client Install Problems Using the SMS_LOCAL_DIR Variable

	Article: Q242924
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbsms200 kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the SMS_LOCAL_DIR system variable to define the root folder of an
	SMS installation (for example, SMS_LOCAL_DIR = C:\PROGRA~1\SMS), the SMS
	installation does not work.
	
	Ccmbtldr.exe copies two files (Ccmcore.exe and Clicore.exe) in the
	%SystemRoot%\MS\SMS\Core\Bin folder (the wrong location), and the attempt to
	start Ccmboot.exe does not succeed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, replace the Systems Management Server (SMS) 2.0 SP1
	version of the Ccmbtldr.exe file with the original SMS 2.0 version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps at the SMS site server:
	
	1. Stop the SMS_EXECUTIVE service.
	
	2. Replace the Ccmbtldr.exe file in the <SMS_Root>\Bin\<Platform>
	  folder with the hotfix version.
	
	3. Restart the SMS_EXECUTIVE service.
	
	Additional query words: prodsms ccm wn_remote
	
	======================================================================
	Keywords          : kbsetup kbClient kbsms200 kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
