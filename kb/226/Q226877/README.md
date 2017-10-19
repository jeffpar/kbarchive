---
layout: page
title: "Q226877: SMS: 2.0 CD Key Format Differs SQL 6.5 CD Key Format"
permalink: /kb/226/Q226877/
---

## Q226877: SMS: 2.0 CD Key Format Differs SQL 6.5 CD Key Format

	Article: Q226877
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing SQL Server 6.5 via SMS Express Setup, the CD key field does not
	allow the 15 digit CD key for SQL Server 6.5 to be entered. If you are not
	running SMS 2.0 sp1 then in order to workaround this issue you will need to
	first install SQL 6.5 and then run the SMS 2.0 Express Setup.
	
	CAUSE
	=====
	
	The CD key field found in the Express Setup is formatted xxx-xxxxxxx. The 10
	digit format works fine for the SQL 7.0 CD key, but the SQL 6.5 CD key is 15
	digits long and formatted xxxxx-xxx-xxxxxxx.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms sql setup key
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
