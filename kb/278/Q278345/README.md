---
layout: page
title: "Q278345: Competing Changes to SMSCliToknAcct&amp; During Clisvc Startup"
permalink: /kb/278/Q278345/
---

## Q278345: Competing Changes to SMSCliToknAcct&amp; During Clisvc Startup

	Article: Q278345
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbClient kbSecurity kbsms200bug kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a large Windows 2000-based Active Directory or in a Windows NT-based domain
	environment, the Systems Management Server (SMS) Client service may not start on
	a Windows 2000-based or Windows NT-based domain controller. Additionally,
	account and policy replication traffic may increase.
	
	CAUSE
	=====
	
	When the SMS Client service starts on a domain controller, the Client service
	modifies the SMSCliToknAcct& user account group membership, user rights, and
	account comment. The Client service then waits for the synchronization of the
	comment to verify that the account and user rights are properly set for this
	account. This account is used to obtain a token to start the SMS Client
	processes, such as the Software Inventory and Software Distribution agents.
	
	In a large Windows 2000-based Active Directory or in a Windows NT-based domain
	environment, replication may take longer than expected to complete. Another
	domain controller client may start the SMS Client service which also modifies
	the shared SMSCliToknAcct& user account. When this modification occurs, the
	first client does not receive the replicated comment information and the Client
	service may stop responding (hang).
	
	If the Client service hangs, other SMS Client services on other domain
	controllers may not start and may generate additional replication traffic.
	
	NOTE: Although this article primarily references replication traffic issues in a
	Windows 2000-based Active Directory environment, similar behaviors can occur in
	a Windows NT 4.0-based domain environment that has a large number of domain
	controllers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbClient kbSecurity kbsms200bug kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
