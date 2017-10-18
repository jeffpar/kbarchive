---
layout: page
title: "Q67780: BUG: PWB May Record Incorrect Paths for Dependencies in Makefile"
permalink: kb/067/Q67780/
---

## Q67780: BUG: PWB May Record Incorrect Paths for Dependencies in Makefile

	Article: Q67780
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a program list with dependencies in directories other than the project
	(makefile) directory may result in the Programmer's WorkBench (PWB) version 1.0
	and 1.1 recording the wrong paths to these dependencies.
	
	RESOLUTION
	==========
	
	Changing the location of the project makefile or changing the names of the
	subdirectories will generate the correct paths for dependencies in the makefile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The following steps illustrate the problem:
	
	1. Create subdirectories named TEST and TESTA under the same directory, with
	  sample files FILE1.C in TEST and FILE2.C in TESTA.
	
	2. Invoke PWB from the TESTA directory.
	
	3. Create a program list.
	
	4. Add FILE1.C and FILE2.C with full path.
	
	5. Save the list.
	
	The resulting makefile will contain the line:
	
	  OBJS = file2.c file1.c
	
	The correct line should read:
	
	  OBJS = file2.c ..\TEST\file1.c
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
