---
layout: page
title: "Q228771: PDF Import of Inventory Rules Does Not Validate Date Criteria"
permalink: /kb/228/Q228771/
---

## Q228771: PDF Import of Inventory Rules Does Not Validate Date Criteria

{% raw %}

	Article: Q228771
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 15-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to retrieve inventory data, a Software Inventory Rule that is
	created by a PDF import process may not return the data.
	
	CAUSE
	=====
	
	This problem can occur because when a PDF is imported in SMS, the inventory rule
	syntax and date are not validated. Because of this, the package may be unable to
	locate the appropriate file.
	
	RESOLUTION
	==========
	
	To work around this problem, manually create an inventory package in the SMS
	Administrator to check syntax.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
