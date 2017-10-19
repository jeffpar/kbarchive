---
layout: page
title: "Q72304: OPTI 486 Memory Chips Require Special AWARD BIOS"
permalink: /kb/072/Q72304/
---

## Q72304: OPTI 486 Memory Chips Require Special AWARD BIOS

	Article: Q72304
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
	
	There are some Pioneer and other 80486 motherboards that come equipped with OPTI
	memory chips and an AWARD BIOS. Revisions A, B, and C of the OPTI memory chips
	have a conflict with HIMEM.SYS and may return the following error at bootup:
	
	  Cannot enable A20 handler
	
	The following are the OPTI 486 Chip revisions and the necessary BIOS' for use
	with HIMEM.SYS:
	
	  If you have OPTI
	  chip revision:       You need to:
	  ----------------     ------------
	       A               Call Award Software at (415) 968-4433 for
	                          more information.
	       B               Obtain the OPTI Revision of AWARD BIOS 3.14.
	       C               Obtain the OPTI Revision of AWARD BIOS 3.14.
	       D               Your BIOS should be the correct revision.
	
	MORE INFORMATION
	================
	
	Using alternate handlers with HIMEM.SYS will not work. The problem lies in a
	conflict between the memory chips and the AWARD BIOS. According to AWARD
	Software, there is a special revision of AWARD BIOS 3.14 that will correct this
	problem on the B and C releases of the OPTI memory chips. Revision A of the OPTI
	memory chips may not allow the A20 handler to be enabled regardless of BIOS
	version.
	
	IMPORTANT: The AWARD BIOS revision offered to correct this problem is NOT the
	standard AWARD BIOS 3.14. The BIOS must be specified as the OPTI revision of the
	AWARD BIOS 3.14. If the OPTI revision is not specified, then the standard BIOS
	upgrade will be delivered and it WILL NOT correct the problem.
	
	Revision D of the OPTI memory chips does not have this conflict and should
	function normally with HIMEM.SYS.
	
	For more information, contact AWARD Software at (415) 968-4433.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 6.21 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
