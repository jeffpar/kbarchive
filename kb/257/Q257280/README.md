---
layout: page
title: "Q257280: SMS: Advertisement Runs Multiple Times on Windows 95/98 Clients"
permalink: kb/257/Q257280/
---

## Q257280: SMS: Advertisement Runs Multiple Times on Windows 95/98 Clients

	Article: Q257280
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a package with Systems Management Server (SMS) Installer with
	the option to reboot the client and you then send the advertisement to clients
	that are running Microsoft Windows 95 or Microsoft Windows 98, the clients may
	run the package every time they log on to the network until the advertisement
	expires.
	
	The client files show that a complete file is generated in the
	MS\Sms\Clicomp\Apa\Data\Complete folder for the package.
	
	CAUSE
	=====
	
	When a program reboots the computer, Advertisement Program Manager (APM) writes
	the schedule data file to the Complete folder and then relies on the Unschedule
	event to remove the schedule data file from the Jobs folder. On Windows
	95/Windows 98 clients, APM is terminated before it can unschedule programs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
