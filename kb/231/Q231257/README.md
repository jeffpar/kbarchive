---
layout: page
title: "Q231257: SMS: Software Metering Does Not Reserve License When Checked Out"
permalink: /kb/231/Q231257/
---

## Q231257: SMS: Software Metering Does Not Reserve License When Checked Out

	Article: Q231257
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbSecurity kbsms200 kbsms200bug kbAudit kbsmsMeter
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer checks out a license, and then restarts when it is connected to
	the network, the license is released upon startup. The workstation can continue
	to use the checked-out license, and the server can also allocate that license to
	other computers. The server retains the record of the checked-out license but
	does not indicate that the license is "in use" for that client.
	
	WORKAROUND
	==========
	
	To work around this issue, release the checked-out license (close the
	appropriate program) before you restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version for Microsoft Systems
	Management Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbSecurity kbsms200 kbsms200bug kbAudit kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
