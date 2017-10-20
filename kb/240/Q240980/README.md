---
layout: page
title: "Q240980: Smscfg.cpl May Not Be Loaded with More Than 20 Network Adapters"
permalink: /kb/240/Q240980/
---

## Q240980: Smscfg.cpl May Not Be Loaded with More Than 20 Network Adapters

{% raw %}

	Article: Q240980
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the SMS tool in Control Panel, you may receive the
	following error message:
	
	  An error occurred while Windows was working with the Control Panel file
	  SMSCFG.CPL
	
	CAUSE
	=====
	
	This error message can occur if the SMS client has more than 20 network adapters
	(physical or virtual/dial-up adapters). One type of server that may have more
	than 20 network adapters is the 3Com EdgeServer.
	
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
	
	To install the hotfix:
	
	1. Stop the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	2. Copy the updated Compver.ini file to the Inboxes\Clicomp.src\Base folder.
	
	3. Copy the hotfixed Clicore.exe file to the
	  Inboxes\Clicomp.src\Base\<Platform> folder.
	
	4. Copy the updated Mslmclin.dll, Ndsclin.dll, and Bindclin.dll files to the
	  SMS\Bin\<Platform> folder.
	
	  NOTE: for Alpha, only one file, Mslmclin.dll, is included with this fix--this
	  is normal.
	
	5. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	The default Client Configuration Installation Manager (CCIM) polling interval is
	23 hours. Therefore, it may take up to 23 hours for the hotfixed files to be
	propagated to the clients. To speed up this process, you can stop and restart
	the SMS Client Service on each client. You can also create a software
	distribution for one of the Resource Kit tools (Setevnt.exe or Cliutils.exe),
	along with the appropriate parameter(s) to start a CCIM work cycle. For
	information about the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Additional query words: prodsms edge server ras dialin dialout dialup modem pool
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
