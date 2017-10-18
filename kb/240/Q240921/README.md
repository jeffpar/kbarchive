---
layout: page
title: "Q240921: Smsapm32 Consumes 100 Percent CPU Time on Windows NT SMS Clients"
permalink: kb/240/Q240921/
---

## Q240921: Smsapm32 Consumes 100 Percent CPU Time on Windows NT SMS Clients

	Article: Q240921
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an advertisement is sent to clients, Smsapm32 may consume 100 percent of
	the CPU time on some clients and not run the advertisement. When this occurs,
	the following log entry may be generated:
	
	  SCHEDULER : Checking if a user is actually logged on.
	
	CAUSE
	=====
	
	This behavior occurs because Smsapm32 is attempting to determine whether a user
	is logged on or not and is getting stuck in a tight loop. This results in CPU
	time being consumed. During normal operation, the log entry should be followed
	within seconds by one of the following log entries:
	
	  SCHEDULER : A user is logged on to the system.
	
	  SCHEDULER : A user is not logged on to the system.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	For additional information about this hotfix, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q239564 SMS: Client Components Reinstalled During Periodic Verification
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the Systems Management Server (SMS)
	site server:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. On the site server, close the SMS Administrator console.
	
	3. Run Q239564.exe and follow the directions in the wizard.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours to propagate the
	hotfixed files to the clients. To speed up this process, use any of the
	following methods:
	
	- Stop and restart the SMS Client Service on each client. For Microsoft Windows
	  NT, simply stop and restart the service. For Microsoft Windows 95 or
	  Microsoft Windows 98, a restart is required.
	
	- Create a software distribution for one of the Resource Kit tools (Setevnt.exe
	  or Cliutils.exe), along with the appropriate parameters to start a CCIM work
	  cycle. The tools are located on SMS 2.0 CD-ROM 2.
	
	For Setevnt.exe the syntax is:
	
	  setevnt /q
	
	For Cliutils.exe, the syntax is:
	
	  Cliutils KICK "Client Configuration Installation Manager"
	
	- If you have the Networking Logon Client Installation option enabled, have
	  users log off and back on.
	
	- Have users run SMSMan manually.
	
	NOTE: You may need to restart Windows 95/98 clients after you install the
	hotfixed files to receive full hotfix functionality. To verify this, view the
	Clicore.log file after you install the hotfix. If you are required to restart,
	you see the following entry listed in the log file. Because of the nature of
	this hotfix, Microsoft recommends that you use a mandatory restart policy for
	all Windows 95/98 users after you install the hotfix.
	
	  Reboot required - disabling component until reboot
	  Manual:
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
