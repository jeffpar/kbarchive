---
layout: page
title: "Q264946: PRB: Bandwidth Leak of USB Device on Surprise Removal"
permalink: /kb/264/Q264946/
---

## Q264946: PRB: Bandwidth Leak of USB Device on Surprise Removal

{% raw %}

	Article: Q264946
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbDDK kbOSWin2000 kbOSWin98 kbDSupport kbUSB
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Universal serial bus (USB) audio and video stream devices may not work if you
	surprise-remove the device while the application is using the device, and then
	plug the device back in.
	
	CAUSE
	=====
	
	The USB hub driver in Windows 2000 releases bandwidth only on
	IRP_MN_REMOVE_DEVICE IRP, not on IRP_MN_SURPRISE_REMOVAL.
	
	Therefore, when a USB device is surprise-removed and if the application has a
	handle to the device open, the system will not send an IRP_MN_REMOVE_DEVICE
	until the handle is closed. As a result, the bandwidth is not released. If you
	plug the device back in again, the device will not work because the system will
	not be able to release enough bandwidth.
	
	RESOLUTION
	==========
	
	To work around this problem, either exit the application that is using the
	device, or restart the system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDK kbOSWin2000 kbOSWin98 kbDSupport kbUSB 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWinAdvServSearch kbWin98
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
