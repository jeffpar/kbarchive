---
layout: page
title: "Q235196: SMS: Illegal Settings Can Be Set for Software Distribution"
permalink: kb/235/Q235196/
---

## Q235196: SMS: Illegal Settings Can Be Set for Software Distribution

	Article: Q235196
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsAdmin kbSof
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Software Distribution, it is possible to set configuration
	combinations for Advertisements and Packages in the Microsoft Systems Management
	Server Administrator Console, resulting in the failure of Software Distribution
	to clients.
	
	The following settings cause a conflict, and as a result, the client does not run
	the advertisement as expected:
	
	- Package: The program environment "Program can run" setting is configured to
	  "Only when a user is logged on".
	
	- Advertisement: The advertisement schedule has a mandatory assignment, with
	  the "Assign immediately after this event" item configured for logoff.
	
	- or -
	
	- The program is set to run "Only when no user is logged on".
	
	- The advertisement is set to Run at logon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
