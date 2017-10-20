---
layout: page
title: "Q124038: VIEWNAD Does Not Display Platform Type Correctly"
permalink: /kb/124/Q124038/
---

## Q124038: VIEWNAD Does Not Display Platform Type Correctly

{% raw %}

	Article: Q124038
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using VIEWNAD to display the network applications database (NAD) for a
	Systems Management Server site, the Platform entries display 10 byte values.
	These entries do not contain valid platform bitmasks and are not usable.
	
	CAUSE
	=====
	
	VIEWNAD is parsing the NAD incorrectly for platform data. This causes the data
	to be invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
