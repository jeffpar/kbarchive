---
layout: page
title: "Q235472: All Host Security Services Must Run in Same Windows NT Account"
permalink: kb/235/Q235472/
---

## Q235472: All Host Security Services Must Run in Same Windows NT Account

	Article: Q235472
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2kbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you choose not to install the Host Account Synchronization Service during the
	SNA Server Setup process, but later decide to add it by running the Setup
	program again, this service will default into the Local System Account.
	
	If you choose to install the Host Account Synchronization Service during the
	initial SNA Server Setup process, this service gets installed in the same
	Windows NT User Account as all the other SNA Services (such as SNABase,
	SnaServer, and so on).
	
	Because all Host Security Services (Host Account Cache, Windows NT Account
	Synchronization, and Host Account Synchronization) must be installed in the same
	Windows NT User Account for authentication purposes, failures may occur when
	password changes are initiated from either Windows NT or host systems.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	In Control Panel, double-click Services, and select the SNA Host Account
	Synchronization Service. Change the account information to match that of the
	other two Host Security Services, (SNA Windows NT Account Synchronization and
	SNA Host Account Synchronization).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0, 4.0 SP1
	and 4.0 SP2. This problem was first corrected in SNA Server version 4.0 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	For authentication purposes, all host security services in all communicating
	Windows NT domains must run in the same Windows NT account. This applies also to
	the Host Account Cache and Windows NT Account Synchronization Service, which are
	installed from the host security Setup program, and also the Host Account
	Synchronization service, which is installed from the SNA Server Setup program.
	The account name must be unique in all Windows NT domains. For example, the
	account name "Administrator" is already used in each Windows NT domain, and is
	not unique.
	
	The SNA Server Setup program includes a Service Account dialog box when
	installing the Host Account Synchronization Service if selected after SNA Server
	has already been installed.
	
	Additional query words: HSI
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
