---
layout: page
title: "Q320331: User Name Mapping Becomes Inconsistent in a Cluster Environment"
permalink: /kb/320/Q320331/
---

## Q320331: User Name Mapping Becomes Inconsistent in a Cluster Environment

	Article: Q320331
	Product(s): Microsoft Windows NT
	Version(s): 2.2 OEM Only,3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.2 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	User name mapping may become inconsistent across cluster nodes in a cluster
	environment.
	
	CAUSE
	=====
	
	This problem may occur if the User Name Mapping service starts without
	recognizing that a cluster exists. If this occurs,, changes that are made before
	the cluster is initialized may not be propagated to all of the cluster nodes.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To prevent this problem from occurring, add a dependency to the User Name Mapping
	component. You can make User Name Mapping dependent on the start of the Cluster
	service by editing the DependOnService registry value. Follow these steps on all
	the cluster nodes:
	
	1. Using Registry Editor, locate and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Mapsvc
	
	2. Edit the DependOnService value. Add "ClusSvc" (without the quotation marks)
	  to the list of services.
	
	For additional information about the DependOnService registry value, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q193888 How to Delay Loading of Specific Services
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX220OEM
	Version           : :2.2 OEM Only,3.0
	Issue type        : kbprb
	
	=============================================================================
	
