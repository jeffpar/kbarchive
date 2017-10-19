---
layout: page
title: "Q74684: UNIX Login Sign Disappears After Installing MS-DOS"
permalink: /kb/074/Q74684/
---

## Q74684: UNIX Login Sign Disappears After Installing MS-DOS

	Article: Q74684
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
	
	After installing MS-DOS on a computer system with both MS-DOS and UNIX, your SCO
	UNIX login sign disappears.
	
	CAUSE
	=====
	
	Installing MS-DOS version 5.0 or later changes the active partition to the
	MS-DOS partition instead of the "NON-DOS" partition. SCO UNIX is located on the
	"NON-DOS" partition.
	
	WORKAROUND
	==========
	
	Do the following to change the active partition to the "NON-DOS" partition:
	
	1. Run FDISK.
	
	2. Choose 2 to "Set Active Partition".
	
	3. Choose "NON-DOS" partition as the ACTIVE partition. This allows SCO UNIX to
	  boot first and to provide you with the login capability.
	
	4. Press ESC to exit FDISK.
	
	5. Restart the machine.
	
	The UNIX product included here is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 3rdparty 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
