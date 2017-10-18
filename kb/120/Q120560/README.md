---
layout: page
title: "Q120560: Step-Up Runs MAKESYS but Fails SETUP w/Insufficient Memory Err"
permalink: kb/120/Q120560/
---

## Q120560: Step-Up Runs MAKESYS but Fails SETUP w/Insufficient Memory Err

	Article: Q120560
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MS-DOS 6.22 MAKESYS command is run, an area of memory exists in which
	Step-Up runs MAKESYS and then subsequently fails when SETUP is called. Errors
	indicating that there is insufficient memory to run the MAKESYS-invoked SETUP
	portion can occur even though the MAKESYS portion ran without generating any
	errors.
	
	CAUSE
	=====
	
	Before starting, MAKESYS ensures that its own memory requirement (a minimum of
	171 kilobytes [K] available memory) is met. MAKESYS does NOT ensure that there
	is enough available memory to run the SETUP portion. SETUP fails unless at least
	386K of memory is available.
	
	
	RESOLUTION
	==========
	
	Because the SETUP portion has a higher available-memory requirement than
	MAKESYS, be sure to run a memory check before you run MAKESYS. Run the MEM
	command to check available memory. Make sure that at least 386K of available
	memory exists before you try to run MAKESYS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.22. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.22 step up free memory
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
