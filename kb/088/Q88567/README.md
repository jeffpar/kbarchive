---
layout: page
title: "Q88567: Seagate SCSI Adapters ST-01 and ST-02 and Windows"
permalink: kb/088/Q88567/
---

## Q88567: Seagate SCSI Adapters ST-01 and ST-02 and Windows

	Article: Q88567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Seagate ST-01 and ST-02 SCSI host adapters can be configured to work with
	Microsoft Windows; however, you need to resolve the following two issues to
	allow these cards to function correctly:
	
	- Excluding ST-01 and ST-02 in the upper memory area (UMA)
	
	- Using ST-02 with an RLL controller
	
	MORE INFORMATION
	================
	
	Excluding ST-01 and ST-02 in UMA
	--------------------------------
	
	The Seagate model ST-01 and ST-02 SCSI host adapters use a memory address space
	in the upper memory area (UMA) between 640 and 1024K. This address used is
	defined by the JP-1 jumper on the card.
	
	After determining the card's address, exclude it in the SYSTEM.INI file with an
	EMMEXCLUDE=xxxx-yyyy in the [386Enh] section, or exclude it with your UMA
	provider, such as EMM386.EXE, if you are using one.
	
	No pins
	connected         EMMEXCLUDE=C800-CBFF     X=C800-CBFF
	
	Pins C&D
	connected         EMMEXCLUDE=CC00-CFFF     X=CC00-CFFF
	
	Pins A&B and
	C&D connected     EMMEXCLUDE=DC00-DFFF     X=DC00-DFFF
	
	Using ST-02 With an RLL Controller
	----------------------------------
	
	If you are using a Seagate ST-02 SCSI controller and a RLL controller in the same
	machine, then make sure the RLL is the primary controller or you can't use the
	ST-02 to control your floppy drives.
	
	To make the RLL controller the primary controller, make sure that you change its
	ROM address in the UMA to be lower than the SCSI controller's address. For
	example, if the RLL controller is at D400, and the ST-02 is at D000, move the
	RLL controller to C800.
	
	This may require changing the SCSI controller address also. Check the hardware
	manuals for this information.
	
	The Seagate products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3rdparty 3.00 3.00a 3.10 3.11 CGATE c gate scuzzy
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
