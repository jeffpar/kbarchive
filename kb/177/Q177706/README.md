---
layout: page
title: "Q177706: SMS: Missing DLLs Cause an Access Violation with Audit32"
permalink: /kb/177/Q177706/
---

## Q177706: SMS: Missing DLLs Cause an Access Violation with Audit32

	Article: Q177706
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Audit fails with an access violation error when an audit package is sent to a
	Windows NT Workstation version 3.51 client.
	
	CAUSE
	=====
	
	Windows NT Workstation 3.51 is missing the Msvcrt*.dll files on computer systems
	that come with the video adapter integrated into the motherboard. The missing
	files cause the audit to fail with an access violation error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
