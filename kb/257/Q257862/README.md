---
layout: page
title: "Q257862: Advertisement Creation Indicates a Program Is Disabled When Not"
permalink: /kb/257/Q257862/
---

## Q257862: Advertisement Creation Indicates a Program Is Disabled When Not

	Article: Q257862
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
	
	When you create an advertisement for a program, the console may indicate that
	the program is disabled when it is not. Also, users are prompted to determine if
	they want to enable the program. If a user chooses to enable the program, the
	console actually enables some other previously disabled program, which may cause
	unexpected software distribution. This condition occurs only in the following
	specific circumstances:
	
	- A program item with an identical name exists in another package on the site.
	
	- The similarly named program is currently disabled.
	
	- The user is not using the Distribute Software Wizard.
	
	CAUSE
	=====
	
	The Systems Management Server (SMS) Administrator console incorrectly handles
	program item information. The console uses the program item name to determine if
	the program is disabled. This is incorrect because the program name is not
	unique to a program item; the SMS Administrator console may find a different
	program item during the search and incorrectly indicate that the program you are
	working with is disabled.
	
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
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q257862.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the Systems Management Server Administrator console.
	
	4. Run Q257862.exe and follow the instructions in the wizard.
	
	Manual Installation
	-------------------
	
	Site System with Local Provider:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. Quit the Systems Management Server Administrator console and stop all Systems
	  Management Server services, including the Windows Management service and the
	  SMS_SQL_MONITOR service.
	
	3. Replace the Sms_padv.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	4. Restart all Systems Management Server services.
	
	Site System with Remote Provider:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. Quit the Systems Management Server Administrator console and stop all Systems
	  Management Server services on the SMS Site Server.
	
	3. Replace the Sms_padv.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	4. Restart all Systems Management Server services.
	
	Remote Administrator Console:
	
	1. Log on using an account with administrative privileges.
	
	2. Quit the Systems Management Server Administrator console.
	
	3. From the updated Systems Management Server site server, copy the Sms_padv.dll
	  file to a disk or network share.
	
	4. Copy the updated file from the disk or network share to the
	  <SMSAdmin>\Bin\<Platform> folder.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
