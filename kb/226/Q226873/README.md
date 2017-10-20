---
layout: page
title: "Q226873: SMS: Group Permissions Fail if Group Name Contain Extended Char."
permalink: /kb/226/Q226873/
---

## Q226873: SMS: Group Permissions Fail if Group Name Contain Extended Char.

{% raw %}

	Article: Q226873
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Within the Software Metering tool:
	
	1. Resource manager imports group names with lowercase extended characters if
	  the import is completed shortly after site installation.
	
	2. Group permissions do not function when the accounts are in the system with
	  lowercase extended characters.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you should take these precautions:
	
	- Enter groups manually, all converted to uppercase.
	
	- Wait 4 hours before importing resources.
	
	- Create custom groups with all uppercase names, no extended characters in each
	  domain.
	
	- Do not create the same group name in any two domains.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
