---
layout: page
title: "Q82792: Meaning of SYSTEM.INI's MaxCOMPort Switch"
permalink: /kb/082/Q82792/
---

## Q82792: Meaning of SYSTEM.INI's MaxCOMPort Switch

	Article: Q82792
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1's SYSTEM.INI MaxCOMPort
	switch can be used to increase the number of COM ports that the enhanced-mode
	Windows Virtual Communications Device (VCD) can support. Obtaining support for
	more than four COM ports for Windows applications still requires a different
	communications driver.
	
	MORE INFORMATION
	================
	
	A system may have more than four COM ports. IBM originally provided space for
	four COM ports in the BIOS port table in its first PC, so four is the limit for
	a default configuration for MS-DOS. To support more than four ports, a special
	MS-DOS device driver is necessary. Addressing the additional COM ports is the
	responsibility of this device driver. Most MS-DOS communications applications
	talk directly to the port hardware, so some of them do support more than four
	COM ports without requiring a special MS-DOS device driver.
	
	The Windows communications driver (COMM.DRV) also assumes a limit of four COM
	ports. It is possible for a COM driver to support more, but the interface
	routines in USER.EXE limits the maximum to nine. There is no method to configure
	COMM.DRV to support more; however, with the Device Development Kit (DDK)
	sources, it is possible to build a new COM driver that can support more by
	changing a single equate.
	
	The Virtual Communications Device (VCD) for 386 enhanced mode can be configured
	to support more than four COM ports; the extra ports are addressable only from
	MS-DOS applications unless COMM.DRV is replaced. The SYSTEM.INI MaxCOMPort=
	switch in the [386Enh] section can specify a higher number. This switch assumes
	that the COM ports are each addressed through separate I/O ports. There are some
	multiport adapters that have all of the COM ports share a common set of I/O
	ports, and then an index value is written to it that indicates which COM port is
	being addressed. These multiplexed cards are not supported by VCD.
	
	
	Additional query words: 3.10 modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
