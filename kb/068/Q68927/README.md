---
layout: page
title: "Q68927: Effect of Spawning COMMAND.COM on the Environment"
permalink: kb/068/Q68927/
---

## Q68927: Effect of Spawning COMMAND.COM on the Environment

	Article: Q68927
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
	
	If you spawn another COMMAND.COM, the child COMMAND.COM has its own environment
	space allocated to it. The size of this environment space is at least the
	minimum environment size of 160 bytes. If you start the child COMMAND.COM with
	the /e:<size> switch, the child's environment space is equal to the
	indicated <size> in bytes, rounded up to the nearest 16-byte boundary. The
	maximum allowable environment size is 32,768 bytes.
	
	A copy of the parent process's environment variables are placed in the child's
	environment space. If the parent's environment variables exceed the space
	allocated to the child, the child's environment space is automatically increased
	to allow for the parent's variables. Once again, the environment space is
	rounded up to the nearest 16-byte boundary. Any changes made to the child's
	environment have no effect on the parent's environment.
	
	MORE INFORMATION
	================
	
	By using the /e:<size> switch on COMMAND.COM, you can force the allocation
	of that much memory to the environment. In MS-DOS versions 5.0 and later, a
	default environment space of 256 bytes is allocated if no /e switch is used
	(lesser amounts can be specified using the /e:<size> switch). In earlier
	MS-DOS versions, 160 bytes is the default. The environment can grow beyond the
	allocated size, but this can occur only if there is free (unallocated) memory
	available that is contiguous to the currently allocated environment block.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
