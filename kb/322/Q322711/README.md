---
layout: page
title: "Q322711: Problems Switching Between Client for NFS and Gateway for NFS"
permalink: /kb/322/Q322711/
---

## Q322711: Problems Switching Between Client for NFS and Gateway for NFS

{% raw %}

	Article: Q322711
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you switch between the Client for NFS service and the Gateway for NFS service
	in the same installation maintenance session, the newly installed service may
	not function as expected.
	
	CAUSE
	=====
	
	This problem may occur if all of the registry items are not updated correctly
	after you remove one of the services. Some registry values that have been
	modified may remain. These modified registry values may not apply to the new
	service, which may prevent the new service from functioning as expected.
	
	WORKAROUND
	==========
	
	If you switch between these services, separate the removal process and
	installation process of each service. Use Add/Remove Programs to remove the
	service that is being replaced, close Add/Remove Programs, and then start
	Add/Remove Programs again to add the new service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Windows Services for UNIX includes Client for NFS and Gateway for NFS. You can
	install only one of these services on a single computer. If you install Gateway
	for NFS, this service acts as the NFS client for the computer.
	
	Additional query words: solar coaster solarcoaster interix
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
