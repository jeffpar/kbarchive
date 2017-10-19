---
layout: page
title: "Q248365: SMS: Secondary Site Clients Receive Unintended Advertisements"
permalink: /kb/248/Q248365/
---

## Q248365: SMS: Secondary Site Clients Receive Unintended Advertisements

	Article: Q248365
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200preSP2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advertisements that are sent to a secondary site target collection may not be
	updated to reflect collection dynamics. Because of this, if a client is removed
	from a collection that has an advertisement targeted, it may continue to receive
	the advertisement.
	
	CAUSE
	=====
	
	Offer Manager on secondary sites does not recognize collection deltas and leaves
	a populated instruction file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information about how to do so, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 and 2.0 SP1. This problem was first corrected in Systems Management
	Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms secondary site advertisements unintended
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200preSP2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
