---
layout: page
title: "Q235815: SMS: How To Resend Assigned Programs"
permalink: /kb/235/Q235815/
---

## Q235815: SMS: How To Resend Assigned Programs

	Article: Q235815
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbCollections kbPackage kb
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you resend advertisements to clients, the current time is not automatically
	updated. To resend an assigned (mandatory) advertised program, you must first
	update the time in the advertisement's properties. When the time has been
	updated, the advertisement is automatically resent. To update the time and
	resend the advertisement, follow these steps:
	
	1. In the Microsoft Systems Management Server (SMS) Administrator Console,
	  navigate to the Advertisements folder, right-click the advertisement that you
	  want to resend, and then click Properties.
	
	2. In the Advertisement Properties dialog box, click the Schedule tab.
	
	3. On the Schedule tab, in the Mandatory Assignments section, click the asterisk
	  (*) to create a new assignment.
	
	4. Click OK again.
	
	For the resend operation to be successful, a new assignment must be created. The
	existing assignment should not be edited. Also, the assignment must have a full
	schedule, not configured to occur after an event (As soon as possible, Logon,
	Logoff).
	
	Additional query words: prodsms readvertise re-advertise
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbCollections kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
