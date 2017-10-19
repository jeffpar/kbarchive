---
layout: page
title: "Q256215: SMS: Client Reports Advertisement Status Messages to Wrong Sites"
permalink: /kb/256/Q256215/
---

## Q256215: SMS: Client Reports Advertisement Status Messages to Wrong Sites

	Article: Q256215
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, a Systems Management Server (SMS) 2.0 client that
	is running on a laptop computer may report advertisement status messages to
	sites to which it is incorrectly assigned, along with the site to which it is
	correctly assigned.
	
	When a client receives and runs an advertisement, "Program Started" and "Program
	Completed" messages appear to be reported to each site to which the client
	thinks it is assigned and installed. This results in a skewed number of status
	messages for the program status for the client.
	
	CAUSE
	=====
	
	The conditions that can result in this behavior are documented in the following
	Microsoft Knowledge Base article:
	
	  Q247543 SMS: Clients Incorrectly Assigned to Multiple Sites
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms docking station multiple IP address Cliex32
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
