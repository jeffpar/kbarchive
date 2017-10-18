---
layout: page
title: "Q84943: Using HIMEM.EXE with Win 3.0 on COMPAQs with More Than 16 MB"
permalink: kb/084/Q84943/
---

## Q84943: Using HIMEM.EXE with Win 3.0 on COMPAQs with More Than 16 MB

	Article: Q84943
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compaq Corporation has its own original equipment manufacturer (OEM) version of
	the HIMEM.SYS extended memory manager called HIMEM.EXE, which is included on the
	utilities disks that come with COMPAQ 80286-, 80386-, and 80486-based systems.
	Some of these computers are capable of supporting more than 16 MB of RAM. These
	systems are equipped with the Extended Industry Standard Architecture (EISA)
	bus.
	
	These computer models include the following:
	
	  COMPAQ SYSTEMPRO
	  COMPAQ DESKPRO 486/25
	  COMPAQ DESKPRO 386/33L
	  COMPAQ DESKPRO 486/33L
	
	Compaq's HIMEM.EXE driver allows those systems to access extended memory using
	the Extended Memory Specification (XMS). It also allows access to memory beyond
	16 MB while allowing MS-DOS-based programs to use the 64K region of memory
	located just above the 1 MB address.
	
	MORE INFORMATION
	================
	
	HIMEM.EXE, which supports more than 16 MB of memory, is intended to replace
	HIMEM.SYS. However, Microsoft Windows operating system version 3.0 does not
	support more than 16 MB of RAM. If HIMEM.EXE is used with Windows 3.0 on a
	system with more than 16 MB of RAM, data loss or corruption may occur.
	
	To avoid problems on COMPAQ systems with more than 16 MB RAM, make sure to use
	the Windows 3.0 HIMEM.SYS driver rather than the COMPAQ HIMEM.EXE driver.
	However, the version of HIMEM.EXE dated 6-14-90 will work with Windows 3.0 and
	is recommended by Compaq for use on COMPAQ machines with LESS than 16 MB of
	memory.
	
	The HIMEM.SYS driver included with Windows 3.0 supports only 16 MB of RAM. It
	automatically detects COMPAQ memory above 16 MB and prevents access to that
	memory.
	
	The HIMEM.EXE driver is installed in the CONFIG.SYS file instead of the HIMEM.SYS
	driver. The DEVICE= line should read:
	
	       DEVICE=[drive:][path]HIMEM.EXE
	
	If the computer has more than 16 MB of extended memory, the "/ISAONLY" switch
	should be added to the DEVICE= line, as follows:
	
	       DEVICE=[drive:][path]HIMEM.EXE /ISAONLY
	
	KBCategory: kb3rdparty
	KBSubcategory: win30 winmem
	
	REFERENCES
	==========
	
	"COMPAQ User Programs Reference," COMPAQ Utilities.
	
	Additional query words: 3.00 3.00a System Pro desk utility
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
