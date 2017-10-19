---
layout: page
title: "Q255933: SMS: User Must Log on for Win 9x to Run Mandatory Assignment"
permalink: /kb/255/Q255933/
---

## Q255933: SMS: User Must Log on for Win 9x to Run Mandatory Assignment

	Article: Q255933
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200
	Last Modified: 30-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is no user logged on to a Microsoft Windows 95/98 computer, the
	mandatory assignment of a software distribution package will not run on the
	computer.
	
	CAUSE
	=====
	
	Advertised Program Monitor (SMSMON32) loads when a user logs on to the computer.
	SMSMON32 is the program that runs the mandatory assignments.
	
	WORKAROUND
	==========
	
	To allow the mandatory assignment to run automatically on a Windows 9x computer,
	make sure there is a valid domain user logged on to the computer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Networking service on a Windows 95/98 computer does not start before the logon
	process completes. Because SMSMON32 depends on the networking service, it does
	not load before the logon process is completed.
	
	
	REFERENCES
	==========
	
	For additional information on Advertised Program Monitor (SMSMON32), please
	refer to the follow resources:
	
	Microsoft Systems Management Server 2.0 Resource Guide, page 368.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
