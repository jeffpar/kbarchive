---
layout: page
title: "Q36011: Reading Serial Port Information Impossible"
permalink: /kb/036/Q36011/
---

## Q36011: Reading Serial Port Information Impossible

{% raw %}

	Article: Q36011
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS, it is possible to configure a serial port (COM1, COM2) with the
	MS-DOS MODE command or by using interrupt 14H. It is not possible to obtain the
	settings of a serial port using the MS-DOS MODE command. The ability to obtain
	this information through the interrupt 14H is an OEM ROM BIOS issue. If it is
	supported through the ROM BIOS, the information can be obtained. The standard
	IBM ROM BIOS does not support this functionality, but the IBM Advanced BIOS
	(ABIOS) does. The ABIOS services are only available on IBM (or compatible) PS/2
	systems.
	
	Additional query words: 6.22 4.00 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:4.0,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
