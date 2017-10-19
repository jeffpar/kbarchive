---
layout: page
title: "Q271631: SMS: Clients Ignore Specified Polling Interval for Advertisement"
permalink: /kb/271/Q271631/
---

## Q271631: SMS: Clients Ignore Specified Polling Interval for Advertisement

	Article: Q271631
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 clients may disregard the specified polling
	interval for advertisements, and use the default value of 60 minutes. This
	occurs when you have cleared the "Client Cannot Change Agent Settings" check box
	in the Advertised Programs Client Agent properties, and you do not restart the
	workstation after installing the client software.
	
	CAUSE
	=====
	
	When you install the client components, certain registry keys are created and
	populated with values. The key located at
	
	  HKLM\Software\Microsoft\SMS\Client\Configuration\Client Application
	  Launchers\System Offer Data Provider\Next Run
	
	specifies the polling interval for the System Offer Data Provider (ODPSYS) to
	poll for advertisements. When the key is initially written it is populated with
	a value that is one hour in the future. The expected behavior is that during the
	next client refresh cycle (every 23 hours), or after restarting the workstation,
	this value should be modified to reflect the site- or client-specified polling
	interval. In instances where you install the SMS client, and you do not restart
	the workstation, this value is not reset to match the defined interval but
	continues to use the 60-minute default value.
	
	RESOLUTION
	==========
	
	By restarting the workstation, or running Cliutils.exe to force a refresh cycle
	on the client, this key is reset with the correct value. Clients that are not
	restarted, or that do not run Cliutils.exe will continue to only poll for
	advertised programs every 60 minutes, no matter what the interval is set to on
	the client or site. This problem is more prevalent on a Microsoft Windows 95, or
	Microsoft Windows 98 client computer that does not require a reboot after
	installing the client components.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: prodsms advertisements polling interval
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
