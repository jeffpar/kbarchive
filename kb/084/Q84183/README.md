---
layout: page
title: "Q84183: Error Code 3 Logging into LAN Manager 2.0 in Windows"
permalink: /kb/084/Q84183/
---

## Q84183: Error Code 3 Logging into LAN Manager 2.0 in Windows

{% raw %}

	Article: Q84183
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Microsoft Windows operating system version 3.1 on a Microsoft LAN
	Manager 2.0 enhanced workstation and attempting to logon to the network through
	Windows, you may receive the following error message:
	
	  Unrecognized Network Error, Error Code 3
	
	This error message is caused by a missing LANMAN.DOS\PROFILES directory. Windows
	3.1's LANMAN.DRV driver checks this directory during the logon procedure.
	
	WORKAROUND
	==========
	
	To work around this problem, create a LANMAN.DOS\PROFILES directory.
	
	MORE INFORMATION
	================
	
	If you have LAN Manager 2.0 as your network and you have saved persistent
	connections in the [Networks] section of your WIN.INI file, then when you start
	Windows 3.1 before logging on to your network, you get prompted to log on.
	Windows then tries to restore all saved connections. The error occurs because
	the PROFILES subdirectory is missing.
	
	
	LANMAN.DRV is the Windows 3.1 driver for LAN Manager 2.0 and is installed in the
	[boot] section of your SYSTEM.INI file:
	
	     [boot]
	     network.drv=lanman.drv
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
