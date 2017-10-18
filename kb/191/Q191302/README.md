---
layout: page
title: "Q191302: SMS: Rservice.exe Does Not List Total Failures Correctly"
permalink: kb/191/Q191302/
---

## Q191302: SMS: Rservice.exe Does Not List Total Failures Correctly

	Article: Q191302
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RSERVICE Total Failures never equate to more than 1, regardless of the number of
	failures.
	
	Reading through the verbatim log, you can determine how many and which computers
	failed, but the summary at the bottom of the log or the screen equals 1
	regardless of whether there are a number of failures indicated by "Total
	Failures".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4 one
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
