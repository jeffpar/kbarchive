---
layout: page
title: "Q240271: Event 1045 When Bringing IP Address Resource Online"
permalink: /kb/240/Q240271/
---

## Q240271: Event 1045 When Bringing IP Address Resource Online

{% raw %}

	Article: Q240271
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Cluster service attemtpts to bring one or more resources with an IP
	address online, the following event may appear in the System Event log:
	
	  Cluster IP address "IP address" could not create the required TCP/IP
	  Interface.
	
	CAUSE
	=====
	
	This behavior occurs because the Cluster service tried to bring an IP address
	online. The resource properties may specify an invalid network or malfunctioning
	adapter. This event may be registered if you replace a network adapter with a
	different model and continue to use the old or inappropriate driver. As a
	result, the IP address resource cannot be bound to the specified network.
	
	This event message may also be displayed if you are using an OEM-provided driver
	with the same name as the normal retail version of the adapter and choose to
	update the driver with the non-OEM version when applying a service pack.
	
	Mismatched versions of SSDs or other drivers requiring some form of
	synchronization between nic cards can also cause this behavior.
	
	RESOLUTION
	==========
	
	To resolve this behavior, resolve the network adapter driver issue or change the
	properties of the IP address resource to reflect the proper network for the
	resource. This problem may also be caused by a malfunctioning adapter or a
	conflict between similar network adapters and accompanying drivers. You may want
	to eliminate adapters from the configuration in an attempt to determine which
	adapter may be causing the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
