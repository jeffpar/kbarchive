---
layout: page
title: "Q260293: SMS: Advertised Programs Monitor Settings Do Not Take Affect for"
permalink: /kb/260/Q260293/
---

## Q260293: SMS: Advertised Programs Monitor Settings Do Not Take Affect for

	Article: Q260293
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbServer kbsms200 kbsms200bug kbAdvertisement kbsmsAdmin kbSoft
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When making changes to the Notifications tab in the properties dialog of the
	Available Programs Client Agent in Systems Management Server (SMS) 2.0, the
	settings are not propagated to existing clients. These settings are also not
	updated on the clients even after they complete their next 23-hour ccim32
	cycle.
	
	To verify this, you can open the Advertised Programs Monitor applet within
	Control Panel on the client, and select Options... from the System menu. This
	problem does not affect new clients. New clients reflect the current site
	settings when they are installed.
	
	CAUSE
	=====
	
	This can occur if the "Client cannot change settings" option is not enabled. To
	verify the status of this setting, view the General tab of the Available
	Programs Client Agent Properties dialog within the Client Agents node of the SMS
	Administrator Console.
	
	WORKAROUND
	==========
	
	To force the settings in the SMS Administrator Console to take effect for
	existing clients, enable the "Clients cannot change agent settings" check box in
	the Advertised Programs Client Agent properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbServer kbsms200 kbsms200bug kbAdvertisement kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
