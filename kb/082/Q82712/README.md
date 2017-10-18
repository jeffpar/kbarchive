---
layout: page
title: "Q82712: HIMEM.SYS /EISA Switch"
permalink: kb/082/Q82712/
---

## Q82712: HIMEM.SYS /EISA Switch

	Article: Q82712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HIMEM.SYS driver that ships with Windows 3.1 (version 3.07, dated 3/10/92,
	size 13824 bytes), provides an additional command-line switch that allows
	HIMEM.SYS to use all of the Extended Industry Standard Architecture (EISA)
	memory installed in the system.
	
	If you have an EISA system that has memory available, and HIMEM.SYS and/or
	Windows is not using all the memory on the system, adding the /EISA switch to
	the CONFIG.SYS file as follows may make more memory available for use:
	
	  DEVICE=C:\HIMEM.SYS /EISA
	
	NOTE: This command may cause conflicts if any drivers using extended memory are
	loaded from the CONFIG.SYS file before HIMEM.SYS.
	
	MORE INFORMATION
	================
	
	The /EISA command-line switch has been added to allow HIMEM.SYS to use all the
	EISA memory installed in an EISA system. The switch is ignored on non- EISA
	systems. HIMEM.SYS maintains its former behavior when this switch is not used.
	
	When the /EISA switch is not used (or when the MS-DOS version 5.0 version of
	HIMEM.SYS is used), only the amount of contiguous extended memory identified by
	Int 15H/88H (get extended memory size) is allocated by HIMEM.SYS. If a system
	has 24 MB of memory installed (and all extended memory was in one contiguous
	block starting at 1 MB) and Int 15H/88H reports 16 MB available, HIMEM will use
	only 16 MB, leaving the remainder unused and unavailable. Several original
	equipment manufacturer's (OEM) BIOS implementations never indicate more than 16
	MB of available memory through Int 15H/88H regardless of how much more memory
	may be installed. Therefore, on one of these machines with more than 32 MB of
	memory installed, most of it is not usable with HIMEM.SYS, EMM386.EXE, and
	Windows 3.0.
	
	This behavior is not a problem in HIMEM.SYS. HIMEM.SYS behaves this way (without
	the /EISA switch) because it cannot be sure there isn't some other driver loaded
	before HIMEM.SYS that is already hooking the Int 15H/88H interrupt and
	allocating extended memory for its own use.
	
	If no other drivers using extended memory are loaded before HIMEM.SYS in the
	CONFIG.SYS file, the /EISA switch can safely be used to force HIMEM.SYS to
	allocate all EISA memory, not just the amount returned by Int 15H/88H. This can
	make a lot more extended memory that conforms to the Extended Memory
	Specification (XMS) available.
	
	Some older programs that used extended memory (such as Windows 3.0) do not work
	properly with extended memory addresses above 16 MB. Using the /EISA switch on
	machines with more than 16 MB may allow Windows 3.1 to use more memory, but will
	cause Windows 3.0 to fail. Users that plan to switch back and forth between
	Windows 3.1 and Windows 3.0 may not want to use the /EISA switch.
	
	Additional query words: 3.10 3.1 XMS DPMI
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
