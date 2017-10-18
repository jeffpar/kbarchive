---
layout: page
title: "Q239136: SMS: Repairing RC Agent Overwrites Custom Viewers List"
permalink: kb/239/Q239136/
---

## Q239136: SMS: Repairing RC Agent Overwrites Custom Viewers List

	Article: Q239136
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms200fix kbsms200sp2fixkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not select the "Use administrator settings" option in the Remote
	Control tool in Control Panel and you repair Remote Control Agent using the
	Systems Management tool, the Permitted Viewers list is reconfigured to use the
	Systems Management Server defaults. Any custom changes you made in the site
	properties are lost.
	
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
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Stop the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	2. Copy the updated Compver.ini file to the
	  <SMS_root>\Inboxes\Clicomp.src\Remctrl directory.
	
	3. Copy the hotfixed .exe file(s) (not the DLL) to the
	  <SMS_root>\Inboxes\Clicomp.src\Remctrl\<Platform> directory.
	
	4. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can stop
	and restart the SMS Client Service on each client. You can also create a
	software distribution for one of the Resource Kit tools Setevnt.exe or
	Cliutils.exe along with the appropriate parameter(s) to start a CCIM work cycle.
	For information on the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix kbfixlist
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
