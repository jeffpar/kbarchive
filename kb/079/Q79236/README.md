---
layout: page
title: "Q79236: Hydro Plus/Prolock Program Hangs with DOS=HIGH"
permalink: /kb/079/Q79236/
---

## Q79236: Hydro Plus/Prolock Program Hangs with DOS=HIGH

{% raw %}

	Article: Q79236
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Plus 3 Software has confirmed Hydro Plus engineering package will cause system
	hangs if MS-DOS is loaded into the high memory area (HMA).
	
	Vault Company produces a security program called Prolock Security System that
	must load before Hydro Plus may be accessed.
	
	To resolve the problem, disable the following line in the CONFIG.SYS file:
	
	  DOS=HIGH
	
	MORE INFORMATION
	================
	
	Hydro Plus uses a security program by Vault Company called Prolock Security
	System to run with Hydro Plus. This security program must load before Hydro Plus
	may be accessed. It is the Prolock Security System that causes the system hangs,
	not Hydro Plus. Plus 3 Software recommends loading MS-DOS low, or in
	conventional memory (that is, not in the HMA.)
	
	The Prolock Security System program code is incorporated within the Hydro Plus
	program code. The security program expects a "wrap-around" when calling a memory
	address beyond 1024K. When MS-DOS is loaded into the HMA (which is between 1024K
	and 1088K), a memory "wrap-around" is not performed and Prolock Security System
	will cause the system to lock up.
	
	
	Extended memory may be accessed along with the upper memory area. It is only the
	DOS=HIGH line in the CONFIG.SYS file that causes the system to hang.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 hang lockup 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
