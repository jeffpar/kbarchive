---
layout: page
title: "Q265002: INFO: Multiple LUN USB Storage Devices Are Not Supported"
permalink: /kb/265/Q265002/
---

## Q265002: INFO: Multiple LUN USB Storage Devices Are Not Supported

{% raw %}

	Article: Q265002
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDK kbUSB
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 2000 and Windows 98 do not support multiple logical unit number (LUN)
	universal serial bus (USB) storage devices.
	
	MORE INFORMATION
	================
	
	The driver for USB mass storage devices, Usbstor.sys, follows the USB Mass
	Storage Specification 1.0. This driver implements both Bulk Only and CBI
	specifications. However, Usbstor.sys doesn't support multiple LUNs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDK kbUSB 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWinAdvServSearch kbWin98
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
