---
layout: page
title: "Q72364: Virus Reduces Total Conventional Memory"
permalink: /kb/072/Q72364/
---

## Q72364: Virus Reduces Total Conventional Memory

{% raw %}

	Article: Q72364
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems infected by some computer viruses will indicate conventional memory
	stops at 638K rather than 640K. This can cause problems with applications that
	check for the presence of a full 640K of conventional memory before loading.
	
	Many of the customers reporting this problem have noted that after booting from
	the hard drive, programs like CHKDSK indicate total conventional memory is 638K,
	but after booting from the floppy disk drive, CHKDSK indicates 640K total
	conventional memory. (This will not always be the case, because the bootable
	floppy disk might also be infected by the virus.) In both cases, the Power On
	Self Test (POST) counts 640K of conventional memory during the memory test.
	
	MORE INFORMATION
	================
	
	When some computer viruses install, they become "memory resident" by
	decrementing the BIOS data area's "base memory size in K" field (address 00413H)
	by 2K and then loading into the upper 2K of conventional memory. As a result,
	programs that determine the base memory size via BIOS interrupt 12H (or by
	directly reading the contents of 00413H) will report less conventional memory
	than is actually installed in the system. An example of such a virus is the
	"Stoned" virus and its various strains ("Stoned-II," "Stoned-A," and so forth).
	
	Performing a low-level format on infected hard drives is one technique for
	eliminating these viruses. (Warning: The low-level format will erase ALL data
	contained on your hard drive.) There are also commercially available "vaccine"
	programs that can detect and remove viruses without erasing other data contained
	on your disk.
	
	If you suspect that your computer has a virus and you are using MS-DOS 6.0 or
	later, run Microsoft Anti-Virus. If you are running an earlier version of
	MS-DOS, either obtain MS-DOS 6.0 or later, or obtain help from a third- party
	virus-correction service or vendor.
	
	
	NOTE: Some computer systems (primarily PS/2-type systems with the MicroChannel
	Architecture [MCA]) allocate 2K of conventional memory to the extended BIOS data
	area. On these systems, a reduction in conventional memory is probably not due
	to the presence of a computer virus. For more information on the extended BIOS
	data area query on the following words:
	
	  " extended and bios and data and area and mem " (without the quotation marks)
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
