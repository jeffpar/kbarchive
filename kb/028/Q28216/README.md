---
layout: page
title: "Q28216: PRB: Cannot Backup Distribution Disks"
permalink: /kb/028/Q28216/
---

## Q28216: PRB: Cannot Backup Distribution Disks

{% raw %}

	Article: Q28216
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While trying to make backup copies of the Microsoft Macro Assembler (MASM) 5.1
	distribution disks one of the disks will not copy. The disk that will not copy
	is labeled "Microsoft CodeView and Utilities for MS-OS/2."
	
	CAUSE
	=====
	
	The disk should be fine. The information on this disk is required only by
	individuals who have MS-OS/2 and was intentionally saved on a high-density
	formatted disk.
	
	RESOLUTION
	==========
	
	Since OS/2 must be run on a 286 or 386 machine, reading this disk will not be a
	problem since these machines typically have high-density floppy drives.
	
	If your machine is less than a 286, you probably have a low-density disk drive
	and you will not be able to read this disk; however, you will not be running
	under MS-OS/2 and will not need the information on the disk anyway.
	
	Additional query words: 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	
	=============================================================================
	

{% endraw %}
