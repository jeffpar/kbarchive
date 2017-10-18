---
layout: page
title: "Q210354: SMS: When Changing Package Access Accounts Must Update Package"
permalink: kb/210/Q210354/
---

## Q210354: SMS: When Changing Package Access Accounts Must Update Package

	Article: Q210354
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbPackage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 gives you the ability to set access priveledges on
	Package access points. If you change the Access Account properties, the package
	must be updated on all distribution servers where this package resides in order
	for these changes to take affect. To update your distribution points after
	making this type of change, right-click the Distribution Points node and select
	Update Distribution Points on the All Tasks menu.
	
	MORE INFORMATION
	================
	
	Updating the distribution servers does not merely update the Access Account
	properties, it refreshes the entire package, including all source files (if the
	package contains any).
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
