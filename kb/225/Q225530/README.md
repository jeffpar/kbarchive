---
layout: page
title: "Q225530: SMS: Resource Explorer Returns &quot;File Not Found&quot; Error"
permalink: kb/225/Q225530/
---

## Q225530: SMS: Resource Explorer Returns &quot;File Not Found&quot; Error

	Article: Q225530
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to load the Resource Explorer on a computer from a remote Systems
	Management Server console, you may receive the following error message:
	
	  File not found
	
	CAUSE
	=====
	
	This behavior will occur when the Systems Management Server Administrator Tools
	are installed into a directory that has a space in it's name; that is, for
	example C:\Program Files\SmsAdmin.
	
	WORKAROUND
	==========
	
	Uninstall the Systems Management Server Administrator Tools from the computer,
	and reinstall them in a directory structure that does not include a space; for
	example: C:\Smsadmin.
	
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
	
	=============================================================================
	
