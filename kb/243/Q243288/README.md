---
layout: page
title: "Q243288: Required Steps Needed If Insert Option Used for HSD Creation"
permalink: kb/243/Q243288/
---

## Q243288: Required Steps Needed If Insert Option Used for HSD Creation

	Article: Q243288
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server allows two different ways to create a Host Security Domain (HSD).
	
	- Using the Host Security Domain Wizard (recommended)
	
	- Using the "Insert" option
	
	  If the Insert option is used, two additional steps are required in order to
	  employ Host Security Integration (HSI).
	
	  1. Assign a Connection to the Host Security Domain that was recently created. Do
	  this by right-clicking on the HSD name and then click Assign Connection.
	
	  2. In User Manager for Domains, add the Domain User group to the HS Domain group
	  (this would be the actual name given when creating the Host Security Domain
	  Name).
	
	MORE INFORMATION
	================
	
	If the Insert option was used but the two steps listed above were not done, you
	get various errors. For example, if a connection was not assigned to an HS
	Domain and you tried to save the configuration in Manager, the following error
	message is displayed:
	
	  The Host Security domain <HSD_Name> does not contain any connections.
	  In its current configuration the Host Security domain is not usable. Do you
	  wish to continue saving the config file? - Yes/No
	
	If the Domain User group was not assigned to the HS Domain group and you tried to
	open up the Host Account Manager (UDConfig.exe), you receive this message:
	
	  There is no record of the selected user in the Host Account Cache. Please
	  select a different account.
	
	If you view the application log of the event viewer, the following error is
	reported from SNA Host Security:
	
	  Event 1298
	
	  Unable to locate user account information Supplied code PMP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
