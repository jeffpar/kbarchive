---
layout: page
title: "Q80746: Dell NX-20 Requires HIMEM.SYS /M:1"
permalink: /kb/080/Q80746/
---

## Q80746: Dell NX-20 Requires HIMEM.SYS /M:1

{% raw %}

	Article: Q80746
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Dell NX20 Notebook computer displays the following error message:
	
	  Smartdrive error in extended memory allocation.
	
	CAUSE
	=====
	
	Dell has confirmed that HIMEM.SYS may default to A20 handler number 3 for the
	Phoenix Cascade BIOS on the Dell NX20. This handler is incorrect, and results in
	the error above.
	
	The proper A20 handler for this machine is 1, for IBM PC/AT class machines.
	
	When A20 handler number 3 is installed, SMARTDRV.SYS may not load when EMM386.EXE
	and/or DOS=HIGH is also in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	Use the following syntax in your CONFIG.SYS file to install the device driver
	HIMEM.SYS and to set the correct handler number:
	
	  device=[drive:][path]himem.sys /m:1
	
	(where drive and path specify the location of HIMEM.SYS).
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 610-613
	
	Online Help discussion of HIMEM.SYS, version 6.0.
	
	The product included here is manufactured by Dell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 WIN30 NX-20 laptop lap top 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
