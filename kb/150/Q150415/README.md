---
layout: page
title: "Q150415: FPNW Printing Causes File Cache to Grow"
permalink: kb/150/Q150415/
---

## Q150415: FPNW Printing Causes File Cache to Grow

	Article: Q150415
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you transfer large print jobs from Novell NetWare clients to a server running
	File and Print Services for NetWare (FPNW,) you notice a user interface
	performance degradation. The jobs need to have about the size of the physical
	memory of the machine.
	
	If you look at performance counters while this happens, you find that the counter
	for the file cache (Memory: Cache Bytes) is very high while the process working
	sets decline (Process: Working Set, instance _Total.)
	
	CAUSE
	=====
	
	While writing spool files the FPNW printing does not use the flag
	FILE_FLAG_SEQUENTIAL_SCAN to open the files. Thus cache manager increases the
	cache size when data is read or written since it expects the application to need
	it again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	Netware 4.0. A supported fix is now available, but is not fully regression-
	tested and should be applied only to systems experiencing this specific problem.
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the next Service Pack that contains this fix. Contact
	Microsoft Product Support Services for more information.
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbServicesNetwareSearch kbFPNW400
	Version           : winnt:4.0
	
	=============================================================================
	
