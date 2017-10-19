---
layout: page
title: "Q235731: Remote Control Cannot Connect to Child Site Client Via RAS"
permalink: /kb/235/Q235731/
---

## Q235731: Remote Control Cannot Connect to Child Site Client Via RAS

	Article: Q235731
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server attempts to remote control a client by means of a
	Remote Access Service (RAS) connection. The autodials fail with the following
	error message:
	
	  "Remote Control Agent not found".
	
	Establish a dial-up connection before initiating Remote Control.
	
	CAUSE
	=====
	
	The Remote Control connection times out before a session is established through
	the RAS dial-up connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
