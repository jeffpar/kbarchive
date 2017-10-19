---
layout: page
title: "Q187738: Upgrade to IIS 4.0 May Give Extra Virtual Directories"
permalink: /kb/187/Q187738/
---

## Q187738: Upgrade to IIS 4.0 May Give Extra Virtual Directories

	Article: Q187738
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After an upgrade from Internet Information Server (IIS) 1.0, 2.0, or 3.0 on a
	computer with multiple virtual servers, you may find that you have extra virtual
	directories under each server that were not defined under the previous version.
	
	MORE INFORMATION
	================
	
	Under IIS 1.0, 2.0, and 3.0, a virtual directory could be defined without an IP
	address. This virtual directory was considered "global" for all servers on that
	computer. Under IIS 4.0, this is no longer the case, and all virtual directories
	must be explicitly defined for each Web server.
	
	During the upgrade process, if the Setup program notices that the server has a
	"global" virtual directory, Setup adds the virtual directory to each of the Web
	sites on the computer, because there is no way to determine which server the
	original virtual directory was defined for.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
