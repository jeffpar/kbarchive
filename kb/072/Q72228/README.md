---
layout: page
title: "Q72228: BUG: Installing MASM 6.0 for OS/2 May Result in a Setup Error"
permalink: /kb/072/Q72228/
---

## Q72228: BUG: Installing MASM 6.0 for OS/2 May Result in a Setup Error

	Article: Q72228
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): kbsetup kbMASM kbDSupport
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the Microsoft Macro Assembler (MASM) version 6.0 for OS/2
	protected mode only, a file creation error may occur.
	
	After the setup program prompts you to insert the MS-DOS Utilities disk, the
	following error message appears:
	
	  An error occurred while creating the file ....\BIN\MLX.EXE
	
	RESOLUTION
	==========
	
	When "Ignore the error and continue" is selected, the installation will continue
	successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM for OS/2 versions 6.0,
	6.0a, and 6.0b. This is not a problem in MASM for MS-DOS versions 6.0, 6.0a, or
	6.0b. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the MASM 6.0 setup program, SETUP.EXE.
	
	2. Select the "Install the Microsoft Macro Assembler" option.
	
	3. Select "OS/2 Protected Mode".
	
	With the 720K 3.5-inch disks, the error occurs after copying H2INC.EXE from the
	MS-DOS Utilities disk.
	
	With the 1.2-megabyte 5.25-inch disks, the error occurs as soon as SETUP.EXE
	begins copying files from the MS-DOS Utilities disk. The 360K 5.25-inch disks
	are only used to install for DOS real mode, so the problem is not observed with
	these disks.
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b
	
	======================================================================
	Keywords          : kbsetup kbMASM kbDSupport 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
