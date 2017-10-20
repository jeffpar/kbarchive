---
layout: page
title: "Q226505: SMS: Read/View Rights at Instance Level Not Providing Access"
permalink: /kb/226/Q226505/
---

## Q226505: SMS: Read/View Rights at Instance Level Not Providing Access

{% raw %}

	Article: Q226505
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users granted read, read resource, and view collected files rights only to a
	specific collection at the instance level are unable to view hardware, hardware
	history, software inventory, or collected files information for any members of
	that collection through Resource Explorer. Resource Explorer launches
	successfully, but no data is displayed except for Last Scan Date under Last
	Software Scan.
	
	WORKAROUND
	==========
	
	To work around this problem, grant the users read and read resource rights at
	the collection class level.
	
	Note that this will give the users the ability to view inventory for all
	collections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
