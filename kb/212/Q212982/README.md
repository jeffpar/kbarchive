---
layout: page
title: "Q212982: SMS: Deleting an Object Does Not Delete Class Permissions"
permalink: kb/212/Q212982/
---

## Q212982: SMS: Deleting an Object Does Not Delete Class Permissions

	Article: Q212982
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete an object, this does not delete the class security rights
	(permissions) associated with the object.
	
	
	CAUSE
	=====
	
	This problem occurs when you are creating packages while logged on as a user
	with permissions equivalent to a Domain Administrator, but not those of a Local
	Administrator.
	
	WORKAROUND
	==========
	
	To work around this problem, create the package while you are logged on as the
	Local Administrator. No separate class permissions are created for that package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
