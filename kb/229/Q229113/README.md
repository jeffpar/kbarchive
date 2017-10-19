---
layout: page
title: "Q229113: SMS: APM32 Doesn't Display the Reboot Countdown Dialog Box"
permalink: /kb/229/Q229113/
---

## Q229113: SMS: APM32 Doesn't Display the Reboot Countdown Dialog Box

	Article: Q229113
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbsms200fix kbAdvertisement kbAppMan kbPackage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On occasion, when an advertised program asks Systems Management Server to
	restart the computer the countdown before the machine reboots does not appear.
	Instead, the system reboots as soon as the advertisement is completed. When
	possible, do not configure the package to restart the computer. See further
	instructions in the More Information section below.
	
	CAUSE
	=====
	
	This can occur due to a communications problem (IPC) between the Available
	Programs Manager (SMSAPM32.EXE) and the Advertised Programs Monitor
	(SMSMON32.EXE).
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	The reboot request is configured in the General tab of the Program Properties
	when the After Running option is set to Systems Management Server Restarts
	Computer.
	
	You can determine the version of APM that your clients are using by doing either
	of the following:
	
	- On your site server, open the Compver.ini file in the
	  SMS\Inboxes\Clicomp.src\Smsapm32 directory. If this file lists a version
	  2.00.1239.0030 or later, you do not need the fix.
	
	- On the Systems Management Server client, double-click the Systems Management
	  Server icon in Control Panel and then click the Components tab. If the
	  version number of the Available Programs Manager is 2.00.1239.0030 or later
	  you do not need the fix.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbsms200fix kbAdvertisement kbAppMan kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
