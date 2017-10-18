---
layout: page
title: "Q225514: SMS: NT Logon Server Manager Replicates Files When It Should Not"
permalink: kb/225/Q225514/
---

## Q225514: SMS: NT Logon Server Manager Replicates Files When It Should Not

	Article: Q225514
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even when the "Modify user login scripts" option is NOT selected, the Systems
	Management Server Windows NT Logon Server Manager copies all files found in the
	primary domain controller's (PDC's) Repl$\Scripts (Repl\Export\Scripts)
	directory to the Netlogon share (Repl\Import\Scripts) on every backup domain
	controller (BDC) in the domain.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms winnt repl nt replication
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
