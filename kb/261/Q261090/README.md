---
layout: page
title: "Q261090: SNAHOSTPROCESS Is Required When You Use Host Security Domain Wiz"
permalink: /kb/261/Q261090/
---

## Q261090: SNAHOSTPROCESS Is Required When You Use Host Security Domain Wiz

	Article: Q261090
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Host Security Domain Wizard, the following error message may
	occur:
	
	  Host Security is not installed on <Computer_Name>. Please run Host
	  Security Setup on <Computer_Name> before using the wizard.
	
	CAUSE
	=====
	
	The SNA Host Account Synchronization Service (SNAHOSTPROCESS) was not installed
	during the SNA Server setup process.
	
	RESOLUTION
	==========
	
	Run the SNA Server Setup program, and choose to install the SNA Host Account
	Synchronization Service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	By default, the SNA Host Account Synchronization option is not selected during
	the SNA Server setup process. This service is required if the following are
	true:
	
	- You want to use the Host Security Domain Wizard for creating a Host Security
	  Domain.
	- You are using password synchronization.
	
	The SNA Host Account Synchronization Service is not necessary if you plan to use
	Single Sign-On (SSO) with manual password updates. If manual password updates
	are only going to be used, you do not need to install this service; however, you
	will be unable to use the wizard when you configure your Host Security Domain.
	
	An alternative to using the Host Security Domain Wizard is made possible by using
	the Insert option when you configure a Host Security Domain; however, other
	steps are also required. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q243288 Required Steps Needed If Insert Option Used for HSD Creation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
