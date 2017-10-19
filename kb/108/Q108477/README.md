---
layout: page
title: "Q108477: ODIHLP.EXE Cannot Be Unloaded"
permalink: /kb/108/Q108477/
---

## Q108477: ODIHLP.EXE Cannot Be Unloaded

	Article: Q108477
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODIHLP.EXE cannot be loaded and unloaded from the MS-DOS command line. This
	ability to dynamically load and unload is available in the Novell ODI
	workstation files. Any ODI drivers loaded prior to ODIHLP.EXE (LSL.COM and the
	network card driver as a minimum) are not unloadable.
	
	To recover the memory used by these drivers, try using multiple configurations
	MS-DOS 6.0 or 6.2 so that you can access boot configurations with and without
	the ODI drivers.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 includes support for Novell NetWare connectivity by
	using a NetWare ODI workstation configuration and the ODIHLP.EXE support file.
	
	ODIHLP.EXE is a real-mode component that allows the protect-mode NDIS 3 protocols
	used by Windows for Workgroups 3.11 (NetBEUI and the IPX/SPX compatible
	transports) to work with the real-mode ODI network card drivers and LSL.COM.
	
	One benefit of ODI drivers (including MLID, LSL, IPXODI and NETX) is that they
	can be unloaded from memory at the command line (for example, IPXODI /U).
	
	ODIHLP.EXE, however, cannot be unloaded. If you want to unload the protocol
	driver(s) and NETX, ODIHLP.EXE must load before them. ODIHLP.EXE binds to the
	LSL and MLID and therefore does not allow these drivers to unload.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
