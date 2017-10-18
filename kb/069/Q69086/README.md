---
layout: page
title: "Q69086: EMM386 DMA Buffer and SCSI Devices"
permalink: kb/069/Q69086/
---

## Q69086: EMM386 DMA Buffer and SCSI Devices

	Article: Q69086
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	3.00 3.00a
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using EMM386.EXE in a system equipped with a SCSI host adapter, you
	may receive the error:
	
	  EMM386:\377DMA buffer is too small. Add D=nn parameter and reboot.
	
	CAUSE
	=====
	
	Direct memory access (DMA) is used by SCSI host adapters for data transfer.
	EMM386 maintains a buffer for DMA data transfers. This error indicates that the
	DMA buffer maintained by EMM386.EXE is not large enough to handle the size of
	DMA transfers made by the SCSI device.
	
	RESOLUTION
	==========
	
	As the message states, the error can be eliminated by using EMM386 DMA buffer
	size parameter D= in the CONFIG.SYS file as follows:
	
	  DEVICE=EMM386.EXE D=128
	
	Start at a value of 32 and increase in increments of 16 until the error no longer
	appears. The default value is 16, the maximum value is 256.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
