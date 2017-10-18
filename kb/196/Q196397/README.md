---
layout: page
title: "Q196397: XADM: Using V1 Certificates After Applying 5.5 Service Pack 1"
permalink: kb/196/Q196397/
---

## Q196397: XADM: Using V1 Certificates After Applying 5.5 Service Pack 1

	Article: Q196397
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Exchange Server 5.5 Service Pack 1, Key Management Server
	requires a Certificate Authority source (that is, Microsoft Certificate Server)
	to distribute security keys.
	
	Organizational regulations may not permit V3 certificates or specific
	organizational units may want to continue using the original (pre-Service Pack 1
	installation) Key Management Server interface.
	
	CAUSE
	=====
	
	Microsoft Exchange Server 5.5 Service Pack 1 adds the X.509-V3 Certificate
	enhancement automatically when applied.
	
	This is by design.
	
	WORKAROUND
	==========
	
	To work around this problem and implement functional configuration
	(Configuration prior to installation of Service Pack 1), perform the following
	steps:
	
	1. Start the Exchange Server 5.5 Administrator program, select the properties of
	  the CA object in the 'Site/Configuration' container and log on as the
	  Certificate Authority with the appropriate user name and password.
	
	2. Click the 'Enrollment' tab.
	
	3. Click the V1 Only radio button, and then click Apply.
	
	4. Stop and restart the Key Management Service.
	
	MORE INFORMATION
	================
	
	Additional information regarding the advantages of using V3 certificates can be
	found in the Support\Docs directory of the Microsoft Exchange 5.5 CD or the
	Microsoft Exchange Server 5.5 Resource Guide.
	
	Additional query words: KM Key Management V1 V3 X.509
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
