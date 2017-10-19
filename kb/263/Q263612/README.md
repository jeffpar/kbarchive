---
layout: page
title: "Q263612: PRB: Unable to Add a Performance Counter on Windows 2000"
permalink: /kb/263/Q263612/
---

## Q263612: PRB: Unable to Add a Performance Counter on Windows 2000

	Article: Q263612
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbPerfMon kbSDKWin32 kbDSupport kbGrpDSKernBase
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a counter in the Add Counters dialog box in the Performance
	Monitor utility (PerfMon.exe), the Add button may be disabled. Consequently, the
	corresponding performance counter cannot be monitored through Performance
	Monitor.
	
	CAUSE
	=====
	
	The Add button is disabled if the Performance Extension DLL for the selected
	performance object reports that there are currently 0 instances of the object.
	This behavior is also seen if the Performance Extension DLL reports that there
	are 0 instances for a performance object that doesn't even support instance
	data.
	
	RESOLUTION
	==========
	
	The PERF_OBJECT_TYPE structure describes object-specific performance information
	that is returned by a Performance Extension DLL. This structure contains a
	member called NumInstances that specifies the number of object instances for
	which counters are provided.
	
	If the performance object will never provide instance data by means of
	PERF_INSTANCE_DEFINITION structures, the NumInstances value should be set to
	PERF_NO_INSTANCES, or -1. If the performance object supports 0 or more
	instances, the NumInstances value should reflect the current number of instances
	of the object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbPerfMon kbSDKWin32 kbDSupport kbGrpDSKernBase 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
