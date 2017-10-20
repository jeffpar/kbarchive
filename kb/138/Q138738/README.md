---
layout: page
title: "Q138738: VESA Local Bus Device Conflicts in Windows NT"
permalink: /kb/138/Q138738/
---

## Q138738: VESA Local Bus Device Conflicts in Windows NT

{% raw %}

	Article: Q138738
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use VESA local bus devices in a Windows NT computer with a fast
	processor, one of the following STOP error messages may appear:
	
	  STOP 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL
	
	  STOP 0x0000007F
	  UNEXPECTED_KERNEL_MODE_TRAP
	
	  STOP 0x00000050
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Disable the external cache on the computer. Some BIOS manufacturers include
	  tuning parameters in the CMOS setup.
	
	  -or-
	
	- Add wait states to the L2 cache in the computer CMOS setup. This adjustment
	  may compensate for slower devices.
	
	For detailed information on the hardware, contact your computer manufacturer.
	
	MORE INFORMATION
	================
	
	A maximum of three VESA local (VL) bus connections can reside on a motherboard.
	Each slot contains up to one VL-bus device. For example, if a VL-bus device such
	as a video controller physically resides on the motherboard, only two VL-bus
	slots are then allowed in the system. The following table lists recommended
	maximum number of slots at various buffered or unbuffered speeds:
	
	 CPU Speed                    Unbuffered        Buffered
	  --------------------------------------------------------------
	
	  Less or Equal to 33 MHz      2 slot/2 device   3 slot/3 device
	  At 40 MHz                    1 slot/2 device   not recommended
	  Greater or Equal to 50 MHz   0 slot/2 device   not recommended
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
