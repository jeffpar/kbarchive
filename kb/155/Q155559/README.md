---
layout: page
title: "Q155559: NWRDR Cannot Perform UNC Operations on NDS Server Objects"
permalink: /kb/155/Q155559/
---

## Q155559: NWRDR Cannot Perform UNC Operations on NDS Server Objects

{% raw %}

	Article: Q155559
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Client Services for NetWare (CSNW) or the Gateway
	Services for NetWare (GSNW), the following command lines do not work:
	
	  dir \\ndstreename\cn=server_object.container.container\volume\subdir
	
	  dir \\ndstreename\volume_object.container.container\subdir
	
	CAUSE
	=====
	
	The Multiple UNC Provider (MUP) does not correctly handle UNC names consisting
	of server objects instead of volume objects.
	
	RESOLUTION
	==========
	
	Use volume objects when using the MUP (and UNC path names).
	
	An example of a successful command would be to do a directory listing to the
	container and not to the lower level subdirectory. For example:
	
	     Dir \\NTMARST\RED_41A_SYS.MAIN.MS
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
