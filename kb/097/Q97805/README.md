---
layout: page
title: "Q97805: General Protection Fault in UNIDRV.DLL on an HP III Printer"
permalink: /kb/097/Q97805/
---

## Q97805: General Protection Fault in UNIDRV.DLL on an HP III Printer

{% raw %}

	Article: Q97805
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install HPPCL third-party scalable font support on a
	Hewlett-Packard (HP) LaserJet III printer (using the HPPCL5MS.DRV printer
	driver), you may receive a general protection (GP) fault in UNIDRV.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the PFM and PCM files generated
	by the PCL soft font installer (FINSTALL.DLL), which most third-party developers
	use to build the PCM/PFM files they distribute with their products. This problem
	does not occur if PFM/PCM files are built to the specifications described in the
	Windows 3.1 Device Driver Development Kit (DDK).
	
	Microsoft has confirmed this to be a problem in FINSTALL.DLL. We are researching
	this problem and will post new information here as it becomes available.
	
	
	Additional query words: 3.10 LJIII lj 3 laser jet gpf wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
