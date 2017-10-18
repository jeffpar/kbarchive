---
layout: page
title: "Q242498: SMS: Component Status Summarizer Has Performance Problems"
permalink: kb/242/Q242498/
---

## Q242498: SMS: Component Status Summarizer Has Performance Problems

	Article: Q242498
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
	
	When the Component Status Summarizer generates or receives a large number of
	replication files, it may become backlogged.
	
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
	
	1. Copy the Q242498.exe file from the disk on which you received it to a share
	  on your network. This is a Microsoft Windows Installer file that updates
	  specific files on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run the executable file that you copied in step 1 and follow the directions
	  in the wizard.
	
	This hotfix is one part of a set of three related hotfixes. You should install
	all three for the best performance. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242496 SMS: Advertisement and Site System Status Summarizers Have
	  Performance Problems in Large Hierarchies
	
	
	This hotfix contains the following changes to the Component Summarizer:
	
	- Removes the six-second delay before processing a replication file.
	
	- Changes the default replication interval for the Component Summarizer from
	  five minutes to ten minutes.
	
	- Changes the Component Summarizer so that it explicitly does not replicate
	  even after the default ten-minute timer has expired if the only incoming
	  status messages have to do with any Summarizer replication actions. Any other
	  incoming messages cause replication to occur after the replication timer has
	  expired.
	
	  This replication timer is configurable in the Site Control file. To set the
	  timer for every 15 minutes, use the following line:
	
	  PROPERTY <Replication Interval><><><900>
	
	NOTE: This is configurable for every summarizer, but the defaults for Offer and
	Site System are still five minutes.
	
	
	Additional query words: prodsms component replication summarizier
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
