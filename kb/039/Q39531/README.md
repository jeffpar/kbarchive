---
layout: page
title: "Q39531: How ROM BIOS Disk Limitation of 1024 Cylinders Affects MS-DOS"
permalink: /kb/039/Q39531/
---

## Q39531: How ROM BIOS Disk Limitation of 1024 Cylinders Affects MS-DOS

{% raw %}

	Article: Q39531
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems that have hard disks with more than 1024 cylinders cannot use the entire
	drive with a standard ROM BIOS or with a generic MS-DOS packaged product or the
	Microsoft MS-DOS 5 Upgrade and later MS-DOS versions. This is because the
	default IBM-PC ROM BIOS can only comprehend disks that have 1024 or fewer
	cylinders. Microsoft MS-DOS relies on an IBM-compatible ROM BIOS to communicate
	with the system hardware, and thus cannot understand disks that the ROM BIOS
	cannot understand.
	
	For information on common workarounds for the 1024-cylinder limitation, query on
	the following words in the Microsoft Knowledge Base:
	
	  " 1024 and cylinder and workarounds " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The design of the IBM ROM BIOS disk interface did not anticipate disks with more
	than 1024 cylinders. The ROM BIOS Interrupt 13H disk interface has a standard
	register interface in which the cylinder number of a disk is partly contained in
	two different registers: the 8-bit CH register contains the low-order 8 bits of
	the cylinder number, and the 8-bit CL register contains the high-order 2 bits of
	the cylinder number. When combined, this creates a 10-bit cylinder number, zero
	based, thus giving the upper limit of 1024 (0 to 1023).
	
	For OEM ROM BIOS extensions, refer to your OEM hardware technical reference
	manuals.
	
	REFERENCES
	==========
	
	"IBM PS/2 and PC BIOS Interface Technical Reference," part number 68X2260,
	available from IBMB.
	
	"Programmer's Quick Reference Series: IBM ROM BIOS" by Ray Duncan, ISBN
	1-55615-135-7, Microsoft Press
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
