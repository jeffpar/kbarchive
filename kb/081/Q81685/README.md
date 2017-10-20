---
layout: page
title: "Q81685: Windows 3.1: KBFLOW.EXE Should Be Loaded from Virtual Machine"
permalink: /kb/081/Q81685/
---

## Q81685: Windows 3.1: KBFLOW.EXE Should Be Loaded from Virtual Machine

{% raw %}

	Article: Q81685
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you load the KBFLOW.EXE terminate-and-stay-resident (TSR) program by Artisoft
	before starting Microsoft Windows, your system may stop responding (hang) when
	opening and/or using MS-DOS virtual machines with Windows.
	
	CAUSE
	=====
	
	KBFLOW.EXE keeps data that is specific to each MS-DOS session. Therefore, it
	needs to be executed from each virtual machine.
	
	RESOLUTION
	==========
	
	Load the KBFLOW.EXE TSR in each individual virtual machine.
	
	MORE INFORMATION
	================
	
	The Artisoft product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 vm 3rdparty win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
