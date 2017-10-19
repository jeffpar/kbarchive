---
layout: page
title: "Q174586: SMS: RSERVICE /Query Loops When Sites Have &gt; 1,400 Clients"
permalink: /kb/174/Q174586/
---

## Q174586: SMS: RSERVICE /Query Loops When Sites Have &gt; 1,400 Clients

	Article: Q174586
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using RSERVICE with the /QUERY option in an environment that contains more
	than 1,400 computers which have PCMSVC32 installed, you enter into a loop and
	are unable to proceed.
	
	CAUSE
	=====
	
	The number of entries is greater than the buffer space which is available for
	the query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms rservice
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
