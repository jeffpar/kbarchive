---
layout: page
title: "Q299772: Site-Wide Travel Mode Prevents Windows NT Remote Client Install"
permalink: /kb/299/Q299772/
---

## Q299772: Site-Wide Travel Mode Prevents Windows NT Remote Client Install

	Article: Q299772
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Systems Management Server (SMS) site with site-wide
	Traveling mode set to "always on", Windows NT Remote Client Installation does
	not work and the following message is logged in the Ccm.log file if logging is
	enabled:
	
	  ---> Travel mode is turned ON & the client is NOT currently assigned
	  to this site. Discarding CCR
	
	CAUSE
	=====
	
	The following scenario causes Client Configuration Requests (CCRs) to be
	abandoned, therefore preventing Windows NT Remote Client Installation:
	
	- The SMS site is configured to have Traveling mode always enabled. This is
	  where the Traveling mode switch is set to 1. For more information, view the
	  More Information section in this article.
	
	- The SMS client is attempting to install on a Windows NT-based computer where
	  the logged on user is not an administrator (low rights user).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following article describes SMS Traveling mode and the SMS Support tools,
	Chktravl.bat and Clitravl.exe:
	
	  Q199114 How to Configure Traveling Mode on Client Computers
	
	Traveling Mode is an SMS client registry setting that dictates the SMS client
	behavior for mobile clients when they enter the boundary of a site to which they
	are not currently assigned. Traveling mode is discussed in the Traveling Mode
	section in chapter 9 of the Microsoft Systems Management Server Administrator's
	guide. There are three ways to modify Traveling mode, each with increasing
	levels of granularity:
	
	1. Using the Systems Management Control Panel plug-in.
	
	2. Using modification of the SMS client registry with the CliTravl utility which
	  affects a single client at a time.
	
	3. Using modification of the site's Site Control file (Sitectrl.ct0) which
	  affects all clients in the site.
	
	When you use the third option to set the Traveling mode switch to 1
	(TRAVELMODE_ALWAYS_ON), any Windows NT client that produces a CCR has that CCR
	discarded by the Client Configuration Manager (CCM). The hotfix modifies the CCM
	design to allow CCRs from new clients (that currently have no SMS client
	components installed), to have the SMS client remotely installed. Other
	Traveling mode site settings are not affected.
	
	Additional query words: prodsms wide travel push
	
	======================================================================
	Keywords          : kberrmsg kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
