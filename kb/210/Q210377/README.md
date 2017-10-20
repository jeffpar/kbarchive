---
layout: page
title: "Q210377: SMS: Network Discovery Not Reporting Domain Names of Computers"
permalink: /kb/210/Q210377/
---

## Q210377: SMS: Network Discovery Not Reporting Domain Names of Computers

{% raw %}

	Article: Q210377
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections kbDiscoverykbfaq
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Network Discovery is run and Systems collections are updated, computers on
	remote subnets may not have a domain name listed when viewing the collection.
	
	CAUSE
	=====
	
	This occurs because Network Discovery did not find these computers by Domain
	Discovery, and it therefore does not know what domain they are in.
	
	WORKAROUND
	==========
	
	To work around this problem, enable Topology, Client, and Client Operating
	System discovery.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms non-local
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections kbDiscovery kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
