---
layout: page
title: "Q235752: SMS: Prompted Queries May Return Bad Data and Hang MMC"
permalink: kb/235/Q235752/
---

## Q235752: SMS: Prompted Queries May Return Bad Data and Hang MMC

	Article: Q235752
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
	
	When running prompted queries in Systems Management Server 2.0, the results may
	show up as blank records with an Icon at the left of each row. If you attempt to
	click on one of the blank rows, the MMC might hang. Trying to execute the same
	query code from Access using the ODBC / WBEM interface produces blank rows as
	well.
	
	WORKAROUND
	==========
	
	The following is WQL code for a query which does not work:
	
	  SELECT ..... FROM SMS_G_System_SoftwareFiles as swfile INNER JOIN SMS_R_SYSTEM as sys ON swfile.ResourceID = sys.ResourceID Where ...
	
	The following change in the WQL code allows the query to run properly:
	
	  SELECT ..... FROM SMS_R_SYSTEM as sys INNER JOIN SMS_G_System_SoftwareFiles as swfile ON swfile.ResourceID = sys.ResourceID Where
	
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
	
