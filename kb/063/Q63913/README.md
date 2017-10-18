---
layout: page
title: "Q63913: SMARTDrive, RAMDrive, and IBM PCS EMS Drivers"
permalink: kb/063/Q63913/
---

## Q63913: SMARTDrive, RAMDrive, and IBM PCS EMS Drivers

	Article: Q63913
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The Microsoft Windows version 3.0 SMARTDrive and RAMDrive files are not
	compatible with the EMS driver and expanded memory emulator IBM ships with
	its Personal Communication/3270 version 1.01. With these drivers loaded,
	the following symptoms occurs:
	
	1. If SMARTDrive and/or RAMDrive are configured to load into extended memory
	  after PCSXMAEM.SYS and PCSX2EMS.SYS are loaded, the machine reboots.
	
	2. If SMARTDrive and/or RAMDrive are configured to load into expanded memory
	  after PCSXMAEM.SYS and PCSX2EMS.SYS are loaded, they return the message
	  "Expanded memory status show error."
	
	Additional query words: 3.00 3.0 3.0a 3.00a winmem win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
