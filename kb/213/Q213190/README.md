---
layout: page
title: "Q213190: SMS: Can't Register Apps with No Extension in Original Name Mode"
permalink: /kb/213/Q213190/
---

## Q213190: SMS: Can't Register Apps with No Extension in Original Name Mode

	Article: Q213190
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable original-name mode under "Program name policy" for Software
	Metering, the client looks in the header of the program to find the program
	name. This name in the header may or may not have an extension. Programs that do
	not have an extension (such as CharMap) cannot be registered because you are
	unable to save the entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
