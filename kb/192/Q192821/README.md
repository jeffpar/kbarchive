---
layout: page
title: "Q192821: STOP 0x0000009A During Restore of Registry"
permalink: /kb/192/Q192821/
---

## Q192821: STOP 0x0000009A During Restore of Registry

{% raw %}

	Article: Q192821
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to restore the registry from a backup device (such as a tape
	drive), the restore operation fails and the system displays the following STOP
	error message:
	
	  STOP 0x0000009A
	  SYSTEM_LICENSE_VIOLATION
	
	This error appears even though Windows NT has been configured the same as the
	previous installation that you are trying to restore (domain controller type,
	same directory, and so on).
	
	CAUSE
	=====
	
	The error message is not typical of those normally associated with this STOP
	code. Verify whether the original registry (which is being restored) has been
	modified by the installation of McAfee Netshield virus protection software.
	Netshield places an extra value named ProductSuite in the following registry
	key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\ProductOptions\ProductType\ 
	
	If this value exists in the registry, the computer will generate a STOP error
	when you attempt to overwrite the registry key.
	
	RESOLUTION
	==========
	
	If the registry has been modified as noted above, there are two options to work
	around this problem:
	
	- Restore the registry to another installation of Windows NT in a different
	  directory.
	
	- Install McAfee Netshield so that the new registry key matches the previous
	  registry on the backup. This prevents the computer from detecting a
	  difference between the two when a full restore is attempted.
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
