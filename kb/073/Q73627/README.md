---
layout: page
title: "Q73627: Running MS-DOS 5.0 EMM386.EXE with VCPI Applications"
permalink: /kb/073/Q73627/
---

## Q73627: Running MS-DOS 5.0 EMM386.EXE with VCPI Applications

	Article: Q73627
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are running virtual control program (VCPI) applications under MS-DOS 5.0
	with upper memory block support, and the applications do not run in protected
	mode.
	
	CAUSE
	=====
	
	In EMM386.EXE version 4.20 (which shipped with MS-DOS 5.0), VCPI is turned off
	by default.
	
	NOTE: This information applies to EMM386.EXE version 4.20 and earlier. It does
	not apply to later versions of EMM386.EXE
	
	WORKAROUND
	==========
	
	You must use the RAM switch to run the applications in protected mode. VCPI
	applications cannot run in protected mode if the EMM386.EXE NOEMS switch is
	used.
	
	MORE INFORMATION
	================
	
	For programs to run in protected (80286) mode while a virtual-86 (80386) mode
	monitor is running, the two programs need to communicate. This method of
	communication is called VCPI.
	
	EMM386.EXE is fully compatible with VCPI-compliant applications; however, VCPI
	applications require that some EMS memory is available when running in protected
	mode. This means that VCPI applications cannot run unless the RAM switch is used
	with EMM386.EXE. If you are using EMS only for VCPI support, you can use RAM in
	conjunction with the P0= parameter to specify the presence of only a single 16K
	EMS page. This allows EMM386 to use all the remaining memory for UMB support.
	The disadvantage of this option is that it makes EMS available without a page
	frame, which may confuse applications that always expect a page frame when EMS
	is present.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 605-609.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
