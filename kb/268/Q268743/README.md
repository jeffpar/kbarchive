---
layout: page
title: "Q268743: PRB: Passing DeviceObject to HalAssignSlotResources Is Mandatory"
permalink: /kb/268/Q268743/
---

## Q268743: PRB: Passing DeviceObject to HalAssignSlotResources Is Mandatory

{% raw %}

	Article: Q268743
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:
	Operating System(s): 
	Keyword(s): kbDDK kbKMode kbOSWin2000 kbDSupport kbGrpDSNTDDK
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HalAssignSlotResources returns STATUS_INVALID_PARAMETER_3 if the DeviceObject
	parameter is NULL.
	
	CAUSE
	=====
	
	HalAssignSlotResources is obsolete and is exported only to support existing
	drivers. Drivers of Plug and Play (PnP) devices are assigned resources by the
	PnP Manager, which passes resource lists with each IRP_MN_START_DEVICE request.
	
	On a computer running Windows 2000, all the bus-related hardware abstraction
	layer (HAL) functions are patched to call the actual bus driver. Because the bus
	driver tracks resources on a PDO basis, the system needs a device object to
	simulate (fake) a PDO.
	
	RESOLUTION
	==========
	
	You must specify a device object when you use HalAssignSlotResources.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDK kbKMode kbOSWin2000 kbDSupport kbGrpDSNTDDK 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : WINDOWS:; winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
