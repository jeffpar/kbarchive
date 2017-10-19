---
layout: page
title: "Q182193: PRB: Err: Cluster Resource Dependency Can Not Be Found"
permalink: /kb/182/Q182193/
---

## Q182193: PRB: Err: Cluster Resource Dependency Can Not Be Found

	Article: Q182193
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to select the "Use Network Name as Computer Name" check box for a
	resource, you may receive the following error:
	
	  The Cluster resource dependency can not be found.
	
	This error may be generated even if your resource depends on a resource, that in
	turn depends on a network name resource.
	
	For example, if the resource being configured above is called "A" and it depends
	on a resource called "B", "B" would be the resource that depends on the network
	name resource:
	
	  A --> B --> Network Name
	
	CAUSE
	=====
	
	An indirect dependency, such as that shown above, will not be recognized by the
	Cluster Administrator.
	
	RESOLUTION
	==========
	
	If one resource uses another, there should be a direct dependency between them.
	Note that it is not necessary to add a dependency for something a resource does
	not directly use. For example, extending the illustration from above:
	
	  A --> B --> Network Name --> IP Address
	
	B does not need a dependency on the IP Address unless it uses the IP address
	directly.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
