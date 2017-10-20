---
layout: page
title: "Q157054: STOP 0x0000000A when Accessing IIS After Windows NT 4 Upgrade"
permalink: /kb/157/Q157054/
---

## Q157054: STOP 0x0000000A when Accessing IIS After Windows NT 4 Upgrade

{% raw %}

	Article: Q157054
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT that accesses an Internet Information Server may
	display a blue screen with the following STOP message:
	
	  STOP: 0x0000000A (0x0000015a, 0x0000001c, 0x00000000, 0x80116bf4)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first and fourth parameters will be identical on a single processor
	x86-based system.
	
	CAUSE
	=====
	
	This problem has been known to occur when you upgrade Windows NT 3.51 servers to
	Windows NT 4.0 and these computers have Windows NT 3.51 components already on
	them that are not upgraded.
	
	For Example:
	
	1. McAfee VirusScan for Windows NT Versions 2.5.1(9607)and 2.5.2(9609) are not
	  compatible with Windows NT 4.0. If you try to install the software, the setup
	  program will not install because it detects an incompatible platform;
	  however, because the software was installed before the Windows NT computer
	  was upgraded, the Virus Scan software remains installed and can produce the
	  STOP message discussed above.
	
	2. This problem has also been known to occur after upgrading a Windows NT 3.51
	  server with Gateway Services for NetWare to Windows NT 4.0.
	
	
	RESOLUTION
	==========
	
	1. To resolve the problem, simply disable the McAfee services and follow the
	  uninstall instructions provided with the McAfee product.
	
	2. Remove Gateway Services for NetWare and reinstall the service.
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt iis 0xA gsnw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis100
	Version           : winnt:1.0,4.0
	
	=============================================================================
	

{% endraw %}
