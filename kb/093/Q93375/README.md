---
layout: page
title: "Q93375: Changes in EMM386.EXE Version 4.45 (MS-DOS 6.0)"
permalink: /kb/093/Q93375/
---

## Q93375: Changes in EMM386.EXE Version 4.45 (MS-DOS 6.0)

{% raw %}

	Article: Q93375
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	Version 4.45 of the Microsoft expanded memory manager (EMM386.EXE), provided with
	MS-DOS version 6.0, has the following new features:
	
	- Advanced Upper Memory Scanning
	
	- Expanded and Extended Memory Sharing
	
	- Ability to Provide Upper Memory Regions for Microsoft Windows
	
	- Ability to Load with NOEMS When No Page Frame Is Available
	
	- NOVCPI Switch for Smaller Load Size
	
	- Automatic IBM Token Ring Adapter Detection
	
	- Quiet Loading
	
	- Ability to Provide ROM Shadowing
	
	This article describes these features in detail.
	
	MORE INFORMATION
	================
	
	Advanced Upper Memory Scanning
	------------------------------
	
	EMM386.EXE can now scan the F000h-F7FFh region when the system read-only memory
	(ROM) is duplicated between F000h-F7FFh and F800h-FFFFh. Also, EMM386.EXE
	includes the ROM BASIC area on IBM PS/2 systems.
	
	By default, EMM386.EXE version 4.45 scans the C000-EFFF memory range. EMM386.EXE
	version 4.44 (which shipped with Windows 3.1) scanned the C600-DFFF memory
	range, and EMM386.EXE version 4.33 (MS-DOS 5.0) scanned the C800-DFFF memory
	range.
	
	To enable advanced upper memory scanning, add the HIGHSCAN switch to the DEVICE
	line for EMM386.EXE in the CONFIG.SYS file.
	
	Expanded and Extended Memory Sharing
	------------------------------------
	
	Previous versions of EMM386.EXE allocated as much extended memory as possible
	during the initialization phase. This tied up memory that could otherwise have
	been used by programs that use expanded memory. EMM386.EXE version 4.45 includes
	support for dynamic allocation of memory. This means EMM386.EXE can create and
	make available different types of memory as your system requirements change.
	
	Ability to Provide Upper Memory Regions for Windows
	---------------------------------------------------
	
	EMM386.EXE version 4.45 includes a new WIN= switch that defines upper memory
	regions available for use by Windows. These regions are similar to X= regions;
	memory is not mapped to those areas. But unlike X= regions, Windows (in 386
	enhanced mode) can map its own memory into these upper memory regions and make
	more conventional memory available to MS-DOS-based applications running with
	Windows.
	
	Ability to Load with No Page Frame
	----------------------------------
	
	Previous versions of EMM386.EXE do not load if expanded memory support is enabled
	and there is not enough contiguous available address space for an expanded
	memory page frame. To support MEMMAKER.EXE, EMM386.EXE 4.45 displays a warning
	message and continues to load when this situation occurs.
	
	NOVCPI Switch for Smaller Load Size
	-----------------------------------
	
	Previous versions of EMM386.EXE disable both expanded memory and virtual control
	program interface (VCPI) support when the NOEMS switch is used. EMM386.EXE 4.45
	leaves VCPI support enabled by default when the NOEMS option is used, relying on
	the expanded and extended memory sharing enhancement to supply VCPI memory.
	
	VCPI support can be disabled with the new NOVCPI switch. Using NOEMS and NOVCPI
	together results in a reduction in the amount of extended memory used by
	EMM386.EXE.
	
	Token Ring Adapter Detection
	----------------------------
	
	EMM386.EXE automatically detects the memory location of IBM Token Ring adapter
	cards and prevents the mapping of expanded or upper memory over the adapter. The
	new Token Ring adapter detection can be disabled by using the new NOTR command
	line switch.
	
	Quiet Loading
	-------------
	
	By default, EMM386.EXE version 4.45 displays messages only if it encounters an
	error condition. Adding the /VERBOSE (or /V) switch to the EMM386 line in the
	CONFIG.SYS file forces EMM386.EXE to display status and error messages while
	loading.
	
	To display status messages without adding the /V switch, press and hold down the
	ALT key while EMM386.EXE starts and loads.
	
	For more information on the EMM386.EXE switches, type "help emm386" (without the
	quotation marks) at the MS-DOS command prompt.
	
	Ability to Provide ROM Shadowing
	--------------------------------
	
	EMM386.EXE version 4.45 includes a new ROM= switch that defines regions of
	read-only memory (ROM) for EMM386.EXE to "shadow." EMM386.EXE copies the
	contents of the ROM to extended memory (RAM) and maps the ROM addresses to this
	memory. Specifying this switch can speed up your system if it does not already
	use shadow RAM.
	
	Additional query words: 6.00 XMS EMS free up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
