---
layout: page
title: "Q85681: Future Domain SCSI Host Adapters Do Not Require Double Buffer"
permalink: /kb/085/Q85681/
---

## Q85681: Future Domain SCSI Host Adapters Do Not Require Double Buffer

	Article: Q85681
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Future Domain technical support has confirmed that the double buffering portion
	of SMARTDrive 4.0 that is provided with Windows 3.1 is not required on all
	Future Domain model TMC-8X 8-bit and TMC-16X 16-bit SCSI controllers (where X is
	an integer completing the model number).
	
	MORE INFORMATION
	================
	
	Although Windows 3.1 Setup may install SMARTDrive with double buffering in the
	CONFIG.SYS file, it is not required and may degrade the performance of the
	computer.
	
	The following is a list of the Future Domain SCSI controller models that do not
	require double buffering:
	
	- TMC-820, 830, 840, 850, 860, 870, 875, 880, 885, 850M, 860M, 885M
	
	- TMC-1650, 1660, 1670, 1680
	
	According to Future Domain technical support, these particular models of SCSI
	controllers do not use DMA access, and would not require the double buffering
	portion of SMARTDrive to be loaded.
	
	Disabling Double Buffering
	--------------------------
	
	To disable the double buffering portion of SMARTDrive, remove the following line
	from the CONFIG.SYS file:
	
	       DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	For further information on Future Domain controllers, and how to determine the
	SCSI model number, contact Future Domain technical support at (714) 253-0428.
	
	Additional query words: 3.10 double_buffer db smart drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
