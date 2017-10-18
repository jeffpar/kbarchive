---
layout: page
title: "Q101813: Why AutoCAD 386 Doesn't Work with Windows NT"
permalink: kb/101/Q101813/
---

## Q101813: Why AutoCAD 386 Doesn't Work with Windows NT

	Article: Q101813
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	AutoCAD 386 release 11 and 12 do not run with Windows NT because AutoCAD 386
	requires DPMI version 1.0 and Windows NT supports version 0.9. When you try to
	run AutoCAD 386 in a virtual machine, you receive the following Pharlap error
	message:
	
	  The 386 chip is currently executing in virtual 8086 mode under the control of
	  another program. You must turn off this other program in order to use 386
	  DOS-Extender to run in protected mode.
	
	MORE INFORMATION
	================
	
	The AutoCAD memory model requires the ability to map a block of a virtual
	machine's conventional memory (below 640K) into one or more of its protected
	mode segments.
	
	NOTE: The same conventional memory block is mapped by AutoCAD into multiple
	protected mode segments; therefore, any extensions must not assume a 1-to-1
	mapping between a particular conventional memory block and a particular
	segment.
	
	For AutoCAD to run from the Windows NT MS-DOS command prompt:
	
	- Microsoft would have to implement DPMI 1.0 call 0509 (Map Conventional
	  Memory) in the NT DPMI server. 386|DOS-Extender detects this functionality by
	  making DPMI call 0401 (Get DPMI Capabilities) and checking if bit 3 is set in
	  AX. This is how AutoCAD runs under OS/2 2.0.
	
	  -or-
	
	- An NT driver would need to be written with the same functionality that the
	  PHARLAP.386 device driver provides when it is loaded under Windows 3.1. This
	  functionality allows 386|DOS-Extender to remap arbitrary linear regions be
	  reading and writing PTEs for pages that are locked in memory. It also
	  requires that DPMI calls 0600 and 0601 actually lock pages into memory so
	  they don't move after they are remapped. 386|DOS-Extender detects this
	  capability by making DPMI call 0A00 with DS:ESI pointing to the string
	  "PHARLAP.LINEAR_REMAP." If the capability is present, it returns an entry
	  point that 386|DOS-Extender can call to remap linear regions.
	
	AutoCAD 386 is manufactured by Autodesk, Inc., a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: prodnt ACAD vdm session
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
