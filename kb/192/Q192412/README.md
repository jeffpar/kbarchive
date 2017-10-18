---
layout: page
title: "Q192412: Changing Service Account for HSI Service Loses Cryptographic Key"
permalink: kb/192/Q192412/
---

## Q192412: Changing Service Account for HSI Service Loses Cryptographic Key

	Article: Q192412
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the service account for which the HSI (Host Security Integration)
	services run under, causes Host Security to function incorrectly.
	
	CAUSE
	=====
	
	When Host Security is initially installed, the service user account is given a
	cryptographic key based on the user ID that was chosen during the installation
	setup process. This information is then taken and put into the registry and is
	referenced when the HSI services start.
	
	If the user account has changed, it will not match the original cryptographic key
	information, causing the Host Account Cache (HAC) to become corrupted and HAC
	lookups to fail. Reviewing the application log in the Event Viewer will show the
	following errors coming from source SNA Host Security:
	
	  Event ID 1244
	  Unable to import cryptographic key into container Supplied code
	  0x8009000d
	
	  Event ID 594
	  Host Process - was unable to create connection handle to connect to PMP
	
	  Event ID 629
	  Host Process - was unable to create connection handle to connect to UDB
	
	WORKAROUND
	==========
	
	Use the original Service Account and password that the Host Security Services
	were initially installed under.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0SP1,
	3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2, and 4.0SP3.
	
	MORE INFORMATION
	================
	
	HSI is comprised of three services: SNAPMP, SNADATABASE and SNAHOSTPROCESS. All
	three services must run under the same service account due to the way that HSI
	was implemented.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q235472 All Host Security Services Must Run in Same Windows NT Account
	
	  Q248354 Changing Password on HS Service Account May Cause SSO to Fail
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
