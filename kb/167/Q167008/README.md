---
layout: page
title: "Q167008: SMS: Incorrect Workstation Attribute Set in the Setup Column"
permalink: /kb/167/Q167008/
---

## Q167008: SMS: Incorrect Workstation Attribute Set in the Setup Column

{% raw %}

	Article: Q167008
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler kbPCM smsdespooler smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After sending a package from a central site to a selection of child primary
	sites, the packages window at ALL the child sites have a "workstations"
	attribute in the setup column (meaning they are ready for distribution to
	clients), irrespective of which sites received the distributed package. However,
	the package is only usable at the sites with distribution servers that received
	the package during the distribute phase.
	
	The package at sites with no distribution server specified in the distribute
	phase should not have the workstations attribute in the setup column.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler kbPCM smsdespooler smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
