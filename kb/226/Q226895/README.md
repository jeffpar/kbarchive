---
layout: page
title: "Q226895: SMS: APS Error When Printing Systems by File Name and File Size"
permalink: kb/226/Q226895/
---

## Q226895: SMS: APS Error When Printing Systems by File Name and File Size

	Article: Q226895
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbReport
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Systems by File Name and File Size report using the Crystal
	Reports snap-in that ships with Systems Management Server (SMS), the following
	error may be reported:
	
	  An error occurred communicating with the APS
	
	WORKAROUND
	==========
	
	To work around this issue, schedule the report to run more than once, instead of
	scheduling the report to run now.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS version 2.0. This problem
	has been corrected in the latest U.S. service pack for SMS version 2.0. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbReport 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
