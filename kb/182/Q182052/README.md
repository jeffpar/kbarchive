---
layout: page
title: "Q182052: SMS: Program Group Control Causes Intermittent Dr. Watson Errors"
permalink: /kb/182/Q182052/
---

## Q182052: SMS: Program Group Control Causes Intermittent Dr. Watson Errors

{% raw %}

	Article: Q182052
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If clients are running Program Group Control (PGC) and have several shared
	applications within a shared group, it is possible that the client will see Dr.
	Watson errors when it starts up. The error is 0xc0000005.
	
	CAUSE
	=====
	
	The cause is in the memory allocation within the Icon count routines.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article.
	
	Additional query words: prodsms boot boots startup
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
