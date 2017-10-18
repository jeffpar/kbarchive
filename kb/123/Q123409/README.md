---
layout: page
title: "Q123409: MSCDEX Does Not Set &quot;Name&quot; of EMS Allocation"
permalink: kb/123/Q123409/
---

## Q123409: MSCDEX Does Not Set &quot;Name&quot; of EMS Allocation

	Article: Q123409
	Product(s): Microsoft Disk Operating System
	Version(s): 2.1,2.2,2.21,2.22,2.23
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CD-ROM Extensions (MSCDEX) for MS-DOS, versions 2.1, 2.2, 2.21, 2.22, 2.23 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When it is loaded with the /E parameter, Microsoft CD-ROM Extensions for MS- DOS
	(MSCDEX) does not set the EMS handle name field associated with the handle it
	allocates for its CD-ROM buffers.
	
	The MEM /D command reports the Expanded Memory Specification handle usage and
	also shows the name of the handle's owner. When MSCDEX is loaded with Expanded
	Memory support (the /E parameter), the EMS handle that it allocates does not
	have an owner name associated with it.
	
	MORE INFORMATION
	================
	
	MSCDEX is a LIM 3.0 compliant EMS user. The EMS API to set the handle name is a
	LIM 4.0 EMS feature; therefore, MSCDEX is not designed to use it.
	
	Additional query words: 2.10 2.20 2.21 2.22 2.23
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbMSCDEXSearch kbMSCDEX210DOS kbMSCDEX220DOS kbMSCDEX221DOS kbMSCDEX222DOS kbMSCDEX223DOS
	Version           : :2.1,2.2,2.21,2.22,2.23
	
	=============================================================================
	
