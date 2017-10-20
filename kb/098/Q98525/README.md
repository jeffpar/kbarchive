---
layout: page
title: "Q98525: Com 4 Not Available on AST Premium Exec Notebook Computer"
permalink: /kb/098/Q98525/
---

## Q98525: Com 4 Not Available on AST Premium Exec Notebook Computer

{% raw %}

	Article: Q98525
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to AST, COM 4 will not be available on the AST Premium Exec 3/25 SLC
	Notebook computer unless you properly load the AST CCU.EXE driver in the
	CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	The CCU.EXE driver configures COM 4 for the PCMCIA Card (an AST credit-card size
	Ethernet/modem card). The driver must be loaded in conventional memory. The
	upper memory area (UMA) D000-DFFF must be excluded when using the PCMCIA Card in
	conjunction with the CCU.EXE driver. Include the following device entries in the
	CONFIG.SYS file:
	
	  DEVICE=C:\CCU.EXE
	  DEVICE=C:\DOS\HIMEM.SYS
	  DEVICE=C:\DOS\EMM386.EXE [RAM | NOEMS] X=D000-DFFF
	
	If you MS-DOS MemMaker with aggressive scanning of upper memory settings,
	HIGHSCAN will be added to the EMM386.EXE device line in the CONFIG.SYS file. If
	COM 4 is not recognized on the AST Premium Exec after loading HIGHSCAN, run
	MEMMAKER /UNDO, and then rerun MemMaker with conservative settings.
	
	The PCMCIA Card is manufactured by AST, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For more information, contact AST.
	
	
	Additional query words: 6.22 6.00 laptop 3rd party third-party third 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
