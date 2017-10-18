---
layout: page
title: "Q215134: SMS: Unable to Edit Products Registered in Other Sites"
permalink: kb/215/Q215134/
---

## Q215134: SMS: Unable to Edit Products Registered in Other Sites

	Article: Q215134
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to edit the properties of a registered product in Software Metering,
	and the following error message is displayed:
	
	  The product was not registered at this site.
	
	You receive no indication of which site the product was registered in.
	
	CAUSE
	=====
	
	This behavior occurs because you are attempting to edit a product in a
	multi-site Systems Management Server hierarchy. The product was registered in
	another site that has replicated to the site that you are currently modifying.
	
	WORKAROUND
	==========
	
	To edit this registered product, follow these steps:
	
	1. Open the Systems Management Server Administrators console that is registered
	  to open the site where the product was registered.
	
	2. Expand the Tools folder.
	
	3. Right-click Software Metering, point to All Tasks, and then click Start
	  Software Metering.
	
	4. Right-click the registered product, and then click Properties.
	
	5. Complete your registered product property changes, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
