---
layout: page
title: "Q82790: SYSTEM.INI's NetDMASize= Switch and NetBIOS"
permalink: /kb/082/Q82790/
---

## Q82790: SYSTEM.INI's NetDMASize= Switch and NetBIOS

	Article: Q82790
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows operating system version 3.1's SYSTEM.INI switch NetDMASize=
	specifies the DMA buffer size (in kilobytes) for NetBIOS transport software if a
	network has been installed. The entry must appear under the [386ENH] section of
	SYSTEM.INI:
	
	     NetDMASize=<kilobytes>
	
	MORE INFORMATION
	================
	
	This entry affects only the behavior of 386 enhanced mode. Especially on MCA
	machines, many network devices use DMA (Direct Memory Access). On these
	machines, a larger DMA buffer is required only if the network is loaded. This
	value will override the DMABufferSize entry if and only if a NetBIOS network is
	loaded before starting Windows and the size specified is larger than the size
	specified for DMABufferSize (default DMABufferSize is 16K).
	
	For Micro Channel Architecture (MCA) machines (IBM PS/2 or compatible), the
	default NetDMASize is 32K. For non-MCA machines, the default value is 0 because
	most ISA (Industry Standard Architecture) network adapters do not use DMA.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
