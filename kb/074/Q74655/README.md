---
layout: page
title: "Q74655: Tandy 1000 TX Video Memory Uses the High Memory Area (HMA)"
permalink: /kb/074/Q74655/
---

## Q74655: Tandy 1000 TX Video Memory Uses the High Memory Area (HMA)

{% raw %}

	Article: Q74655
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to load HIMEM.SYS on a Tandy 1000 TX, you receive the following
	error message:
	
	  VDISK Memory Allocator Already Installed: XMS Driver Not Installed.
	
	CAUSE
	=====
	
	The Tandy 1000 TX, an 80286 machine, uses the high memory area (HMA) for video
	memory. According to the Tandy Corporation, video memory is hard-wired to the
	A20 line. As a result, HIMEM.SYS does not load.
	
	Third-party XMS memory managers also encounter a similar message.
	
	MORE INFORMATION
	================
	
	The Tandy 1000 TX is manufactured by Tandy Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty 1000TX
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
