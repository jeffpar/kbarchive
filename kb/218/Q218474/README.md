---
layout: page
title: "Q218474: SMS: UNC Package Source Cannot Contain Space Characters"
permalink: /kb/218/Q218474/
---

## Q218474: SMS: UNC Package Source Cannot Contain Space Characters

	Article: Q218474
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbsms200bug kbPackage kbsmsAdmin kbSoftwareDist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When configuring a package to connect using a UNC path in Systems Management
	Server version 2.0, the package may fail if the package source directory
	contains spaces.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the package to connect using a drive
	letter or rename the package source directory to remove the spaces.
	
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
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbsms200bug kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
