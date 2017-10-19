---
layout: page
title: "Q175664: Error Creating Dependency for Quorum Resource"
permalink: /kb/175/Q175664/
---

## Q175664: Error Creating Dependency for Quorum Resource

	Article: Q175664
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to make a physical disk resource dependent on another resource,
	and the physical disk resource is also the quorum device, you may observe the
	following error message:
	
	  Error 5069 - The cluster quorum resource is not allowed to have any
	  dependencies.
	
	CAUSE
	=====
	
	The quorum resource should not have any dependencies on any other resources.
	However, it is acceptable for other resources to be dependent on the physical
	disk resource that is also the quorum device. By definition, the quorum device
	must be accessible to bring other resources online. Therefore, if the quorum
	resource were to wait on any other resource to reach an online state, the
	cluster service could not start.
	
	RESOLUTION
	==========
	
	To avoid the error message, do not attempt to make the quorum device dependent
	upon any other resource. Also, keep this condition in mind when changing the
	quorum disk designation to an existing physical disk resource, in case it has a
	dependency on some other resource.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
