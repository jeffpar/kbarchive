---
layout: page
title: "Q76817: Fountain 286 Computer Slows After MS-DOS 5 Upgrade"
permalink: /kb/076/Q76817/
---

## Q76817: Fountain 286 Computer Slows After MS-DOS 5 Upgrade

{% raw %}

	Article: Q76817
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Fountain 286 8/12 MHz computer will perform at 8 MHz after the installation
	of MS-DOS 5 Upgrade. HIMEM.SYS, which is added to the CONFIG.SYS file during
	MS-DOS 5.0 setup, may be causing the reduced speed.
	
	To correct this problem, use the MACHINE:12 switch and set the CPUCLOCK switch to
	On with the HIMEM.SYS driver.
	
	MORE INFORMATION
	================
	
	The following syntax should be used for the device driver HIMEM.SYS in the
	CONFIG.SYS file:
	
	  device=[drive:][path]himem.sys /machine:12 /cpuclock:on
	
	This will enable A20 handler number 12, instead of the default number 1, and
	allow the CPU clock to affect the processing speed of HIMEM.SYS. Note: Though
	the computer's processing speed may increase, XMS access speed may decrease.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
