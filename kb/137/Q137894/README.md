---
layout: page
title: "Q137894: Setup Reports Success when it Fails to Add Invalid Components"
permalink: /kb/137/Q137894/
---

## Q137894: Setup Reports Success when it Fails to Add Invalid Components

	Article: Q137894
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run Systems Management Server Setup, it fails to generate an error
	message when you try to add a list of non-existent components that includes at
	least one existent (valid) component. Instead, Systems Management Server Setup
	generates a message that it added all components successfully, even though the
	list contains non-existent components that Setup fails to add.
	
	
	CAUSE
	=====
	
	Setup fails to check if the individual components are added successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
