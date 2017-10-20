---
layout: page
title: "Q104189: MSD Reports an 80287 Math Coprocessor as an 80387"
permalink: /kb/104/Q104189/
---

## Q104189: MSD Reports an 80287 Math Coprocessor as an 80387

{% raw %}

	Article: Q104189
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Diagnostics (MSD) utility versions 2.0a (which ships with Windows
	3.1) and 2.01 (which ships with MS-DOS 6.0) may report an 80287 math coprocessor
	as an 80387 coprocessor.
	
	Other diagnostic software may display similar results or say that the coprocessor
	is not functioning properly.
	
	CAUSE
	=====
	
	This problem is caused by the design of the hardware.
	
	MORE INFORMATION
	================
	
	The following 80287 math coprocessors have been confirmed by their manufacturers
	as being detected incorrectly by various diagnostic software programs or
	utilities:
	
	- Intel 287XL
	
	- Cyrix 82S87
	
	To obtain correct information regarding your 80287 coprocessor, use diagnostic
	software provided with the hardware, or call the manufacturer for assistance.
	
	Intel Customer Support (800) 538-3373 or (503) 629-7354
	Cyrix Customer Support (800) 462-9749 or (214) 994-8387
	
	Intel has a "FaxBack" number that you can use to obtain diagnostic information.
	To obtain the Intel FaxBack article #3064, "Intel Math CoProcessors and
	Diagnostic Programs," call Intel FaxBack at (800) 525-3019 or (503) 629-7576.
	
	Additional query words: 6.22 6.00 6.20 287 387 PROCESSOR CO 3.1 MATHCO
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
