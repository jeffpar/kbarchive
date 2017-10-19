---
layout: page
title: "Q215051: SMS: Removing Primary Site Does Not Remove SMSPKG Package Folder"
permalink: /kb/215/Q215051/
---

## Q215051: SMS: Removing Primary Site Does Not Remove SMSPKG Package Folder

	Article: Q215051
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove a Systems Management Server (SMS) primary site, a folder named
	SMSPKGd$ is not removed. This share is created when the Primary Site Server is
	used as a Distribution Server. The letter x in SMSPKGx$ designates the drive on
	which the share is created.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps on the SMS Site Server:
	
	1. Start Windows Explorer.
	
	2. Expand drive D.
	
	3. Right-click SMSPKGd$.
	
	4. Click Sharing.
	
	5. Click Not Shared, and then click OK.
	
	6. Select SMSPKGd$.
	
	7. Click Delete.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
