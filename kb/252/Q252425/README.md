---
layout: page
title: "Q252425: SMS: Discovered Clients Not Installed By Windows NT"
permalink: /kb/252/Q252425/
---

## Q252425: SMS: Discovered Clients Not Installed By Windows NT

{% raw %}

	Article: Q252425
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbDiscovery kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable Windows NT Remote Installation, you do not install all
	discovered clients. The number of clients that are installed depends on the
	configuration.
	
	CAUSE
	=====
	
	This issue can occur if the Client Configuration Manager (CCM) tool does not
	receive a Client Configuration Request (CCR) for all the clients.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The hotfix for this article is dependent upon other developed fixes and you must
	install it as a complete package for compatibility.
	
	For additional information about the contents of this consolidated fix, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbDiscovery kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
