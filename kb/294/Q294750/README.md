---
layout: page
title: "Q294750: SMS: Mandatory Assignments Section Is Unavailable"
permalink: /kb/294/Q294750/
---

## Q294750: SMS: Mandatory Assignments Section Is Unavailable

	Article: Q294750
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbsms200 kbAdvertisement kbsmsAdmin
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Schedule tab in the Advertisement properties, the Mandatory
	Assignments section may be unavailable. Typically, you can use the New
	Assignment option (yellow star icon) to add a new mandatory schedule to the
	existing advertisement; however, this option is unavailable.
	
	CAUSE
	=====
	
	This issue can occur if you have already configured 15 mandatory assignments for
	the advertisement. The number of mandatory assignments for each advertisement
	cannot exceed 15.
	
	WORKAROUND
	==========
	
	To work around this issue, delete the older mandatory assignments until no more
	than 14 mandatory assignments are listed. You can also create an additional
	advertisement that includes additional mandatory assignments.
	
	MORE INFORMATION
	================
	
	If the number of mandatory assignments that are listed in the advertisement
	equals fifteen, you cannot schedule additional assignments; therefore, the
	option to add additional mandatory assignments is unavailable. This behavior is
	by design
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbsms200 kbAdvertisement kbsmsAdmin 
	Component         : SystemManagement
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
