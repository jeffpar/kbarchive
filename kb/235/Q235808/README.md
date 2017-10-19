---
layout: page
title: "Q235808: SMS: Smsapm32.exe May Report Status Incorrectly"
permalink: /kb/235/Q235808/
---

## Q235808: SMS: Smsapm32.exe May Report Status Incorrectly

	Article: Q235808
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Smsapm32.exe may incorrectly report the successful completion of a package even
	though it may not have succeeded. This behavior can occur if the package starts
	another instance of itself to complete execution and the second instance does
	not finish successfully. A Microsoft Windows 2000 upgrade using Winnt32.exe is
	one package that exhibits this behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the Systems Management Server (SMS)
	site server:
	
	1. Stop the SMS Executive and SMS Site Component Manager services on the site
	  server.
	
	2. Replace the SMS\Inboxes\Clicomp.src\Smsapm32\Compver.ini file with the
	  Compver.ini file from the hotfix.
	
	3. Replace the SMS\Inboxes\Clicomp.src\Smsapm32\<Platform>\Apasetup.exe
	  file with the Apasetup.exe file from the hotfix.
	
	4. Replace the SMS\Bin\<Platform>\Smsapm32.exe file with the Smsapm32.exe
	  file from the hotfix.
	
	5. Restart the SMS Executive and SMS Site Component Manager services.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfix files
	to be propagated to the clients. To speed up this process, you can stop and
	restart the SMS Client service on each client. You can also create a software
	distribution for one of the Resource Kit tools (Setevnt.exe or Cliutils.exe)
	along with the appropriate parameter(s) to start a CCIM work cycle. For
	information about the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
