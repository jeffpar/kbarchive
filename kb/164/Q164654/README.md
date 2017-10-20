---
layout: page
title: "Q164654: SMS: SystemRole May Be Either &quot;Workstation&quot; or &quot;WorkStation&quot;"
permalink: /kb/164/Q164654/
---

## Q164654: SMS: SystemRole May Be Either &quot;Workstation&quot; or &quot;WorkStation&quot;

{% raw %}

	Article: Q164654
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Systems Management Server client's inventory, the SystemRole value (in the
	Identification group) may be defined as either "Workstation" or "WorkStation".
	When you run a query against SystemRole looking for all workstations, it only
	returns clients matching one of these values.
	
	CAUSE
	=====
	
	The 16-bit inventory agent (Invdos.exe) contains a reference to "WorkStation",
	where the letter "S" is capitalized.
	
	WORKAROUND
	==========
	
	When performing a query against the SystemRole value to locate all workstations,
	include two statements: one to reference "Workstation" and the other to
	reference "WorkStation". Be sure to connect the two query statements with an OR
	so that all possible workstations will be returned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms system role
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
