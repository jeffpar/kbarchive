---
layout: page
title: "Q235747: SMS: Software Metering Tips Nonexistent Check Boxes"
permalink: /kb/235/Q235747/
---

## Q235747: SMS: Software Metering Tips Nonexistent Check Boxes

	Article: Q235747
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbdocerr kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server Resource Guide, Chapter 22: Software Metering
	Flowcharts, page 593, in the last paragraph, it incorrectly states:
	
	  "Software license limits will not be enforced until the initial trend has
	  been calculated, unless the DO NOT ENFORCE LICENSE LIMITS FOR THIS PRODUCT
	  UNTIL A TREND HAS BEEN CALCULATED checkbox in the Software Metering
	  Properties dialog box in the SMS Administrator console is cleared."
	
	There is no check box in the Software Metering Properties dialog box labeled "DO
	NOT ENFORCE LICENSE LIMITS FOR THIS PRODUCT UNTIL A TREND HAS BEEN CALCULATED".
	The check box exists in the Software Metering console under Metered Software,
	Licensed Software properties (specific for each product)and the License
	Balancing tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This document error has been corrected in the Systems Management Server 2.0
	Service Pack 1 Release Notes.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
