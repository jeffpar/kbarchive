---
layout: page
title: "Q311258: SMS: Collection Evaluator May Cause Many Event ID 565 Events"
permalink: kb/311/Q311258/
---

## Q311258: SMS: Collection Evaluator May Cause Many Event ID 565 Events

	Article: Q311258
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Microsoft Windows 2000 Active Directory-based environment with Systems
	Management Server (SMS) 2.0 Service Pack 2 (SP2) or later installed and success
	auditing of directory service access enabled, the SMS Service account may
	generate many Event ID 565 entries in the Security event log.
	
	CAUSE
	=====
	
	This behavior occurs because the SMS Service account's group membership is
	evaluated repeatedly as Collection Evaluator monitors collections.
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the success auditing of directory service
	accesses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms colleval
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
