---
layout: page
title: "Q156960: SMS: Collected Files Do Not Show as a UNC in Administrator"
permalink: kb/156/Q156960/
---

## Q156960: SMS: Collected Files Do Not Show as a UNC in Administrator

	Article: Q156960
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbsmsAdmin smsadminkbfixlist
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view collected files for a client from a remote Systems Management
	Server Administrator user interface (UI) console, LocalFileName shows the local
	path location for the file, instead of showing the UNC path (the UNC path was
	displayed in Systems Management Server 1.1). As a result, if Systems Management
	Server Administrator is run on a computer other than the site server, you will
	be unable to use the Administrator UI to open any collected files located on the
	site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop kbsmsAdmin smsadmin kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
