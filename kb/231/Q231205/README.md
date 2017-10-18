---
layout: page
title: "Q231205: SMS: Migration Wizard Fails w/More Than 50 Characters in Name"
permalink: kb/231/Q231205/
---

## Q231205: SMS: Migration Wizard Fails w/More Than 50 Characters in Name

	Article: Q231205
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 kbsms200bug kbPackage kbPGC kbsmsProvider kbsmsUtil kbSoftwareDist
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Program Group Control (PGC) Migration Wizard, the resulting
	program name may be truncated, in which case you receive the following error
	message:
	
	  error occurred while committing data to WMI: WBEM_E_FAILED
	
	The following message is reported in the Smsprov.log file:
	
	  The program name must be at least 1 and less than 50 characters in length.
	
	CAUSE
	=====
	
	This behavior occurs if the program name exceeds the maximum 50-character limit,
	which results in an incomplete program migration.
	
	WORKAROUND
	==========
	
	To work around this behavior, ensure that when you create program names, they
	are within the character limit of 1 to 50 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 kbsms200bug kbPackage kbPGC kbsmsProvider kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
