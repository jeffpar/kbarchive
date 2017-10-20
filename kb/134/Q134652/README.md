---
layout: page
title: "Q134652: GP Fault Or System Hang Using Windows NT Server Tools"
permalink: /kb/134/Q134652/
---

## Q134652: GP Fault Or System Hang Using Windows NT Server Tools

{% raw %}

	Article: Q134652
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.1; winnt:3.0; :2.2c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Server Tools User Manager for Domains or Print Manager
	for Domains under Windows 3.1 with Network Client 3.0 for MS-DOS or LAN Manager
	2.2c, a General Protection (GP) fault occurs or the computer stops responding
	(hangs).
	
	CAUSE
	=====
	
	The MS-DOS-based client network operating systems (Network Client for MS-DOS and
	LAN Manager for MS-DOS), use basic redirectors that do not support named pipes.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Configure Network Client for MS-DOS or LAN Manager for MS-DOS to use the full
	  redirector.
	
	-or-
	
	- Use Windows for Workgroups 3.11.
	
	Additional query words: prodnt 3.11 3.10 2.20 wfw wfwg win31 lanman error message appears gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbZNotKeyword kbLanManSearch kbZNotKeyword3 kbNetworkClientSearch kbWin310 kbLanMan220c kbNetworkClient300DOS
	Version           : WINDOWS:3.1; winnt:3.0; :2.2c
	
	=============================================================================
	

{% endraw %}
