---
layout: page
title: "Q164567: SMS: Installation of Keyboard Driver Does Not Prompt for Restart"
permalink: kb/164/Q164567/
---

## Q164567: SMS: Installation of Keyboard Driver Does Not Prompt for Restart

	Article: Q164567
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP1,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetupkbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Client Configuration Manager service does not prompt a client computer
	running Windows NT to restart in order for the updates to the Systems Management
	Server Remote Control Keyboard Driver to take effect.
	
	Changes to the Systems Management Server Remote Control Keyboard Driver service
	(kbstuff.sys) have made it a boot-time driver. For the service to work properly,
	you must restart the client computer running Windows NT.
	
	
	WORKAROUND
	----------
	
	After either applying Systems Management Server 1.2 Service Pack 1 or manually
	updating the Systems Management Server Remote Control Keyboard Driver, shut down
	and restart the computer running Windows NT.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server version 1.2 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms kbstuff sp1
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup kbfixlist
	Technology        : kbSMSSearch kbSMS200 kbSMS120SP1
	Version           : :1.2 SP1,2.0
	Issue type        : kbbug
	
	=============================================================================
	
