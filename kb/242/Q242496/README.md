---
layout: page
title: "Q242496: Advertisement and Site System Status Summarizer Problems"
permalink: kb/242/Q242496/
---

## Q242496: Advertisement and Site System Status Summarizer Problems

	Article: Q242496
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbStatSum kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Offer or Site System Summarizers generate or receive large numbers of
	replication files, they may become backlogged.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps:
	
	1. Copy the Q242496.exe file from the disk on which you received it to a share
	  on your network. This is a Microsoft Windows Installer file that updates
	  specific files on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run the executable file that you copied in step 1 and follow the directions
	  in the wizard.
	
	This hotfix is one part of a set of three related hotfixes. You should install
	all three for the best performance. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242498 SMS: Component Status Summarizer has Performance Problems Large
	  Hierarchies
	
	
	This hotfix contains the following changes to the Offer Summarizer:
	
	- Removes the six-second delay before processing a replication file.
	
	- Corrects a problem with the Replicate flag being set regardless of whether
	  the record has been touched. This results in large replication files being
	  generated all the time when they are not needed and flooding the central
	  site.
	
	- Corrects a problem with the "dirty" bit unnecessarily being set on summary
	  records, resulting in SQL/disk "churn" during normal operations.
	
	This hotfix contains the following changes to the Site System Status Summarizer:
	
	- Removes the six-second delay before processing a replication file.
	
	
	Additional query words: prodsms replication offer status summarizer
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
