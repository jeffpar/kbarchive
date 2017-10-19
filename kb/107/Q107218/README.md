---
layout: page
title: "Q107218: IBM SDLC and Token Ring Adapter Notes"
permalink: /kb/107/Q107218/
---

## Q107218: IBM SDLC and Token Ring Adapter Notes

	Article: Q107218
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0
	Operating System(s): 
	Keyword(s): kbhw kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM SDLC, MPCA and Token Ring adapters may cause interrupt or shared memory
	conflicts.
	
	MORE INFORMATION
	================
	
	The following information appears in the SNA Server Administration Guide.
	
	NOTE: This information was also included in the README.TXT for early SNA Server
	2.x versions.
	
	Device drivers provided by SNA Server report any interrupt, port address, or DMA
	conflicts they detect to the Windows NT System Event log.
	
	If you are using an IBM SDLC or MPCA card in an ISA or EISA bus system, you
	should do the following:
	
	- Disable SERIAL.SYS (which is enabled by default) to prevent an interrupt
	  conflict. To do this, use the Devices option in the Windows NT Control Panel.
	
	- Disable any COM ports that use interrupts that conflict with the IBM SDLC
	  adapters. This is normally done through EISA configuration programs, CMOS
	  setup programs, or jumpers on the motherboard.
	
	The IBM SDLC adapter has a known hardware conflict with the Microsoft Windows
	Sound System adapter--both attempt to use the same I/O address on the bus, which
	makes these adapters incompatible on the same PC. The Sound System adapter must
	be removed from the PC in order for the IBM SDLC adapter to work.
	
	If you are using an IBM token ring adapter in an ISA or EISA bus system, you
	should do the following:
	
	- By default, Windows NT loads PARALLEL.SYS during initialization. To avoid
	  interrupt conflicts between PARALLEL.SYS and IBMTOK.SYS, the IBM Token Ring
	  device driver, be sure to choose an interrupt other than 7 on your IBM Token
	  Ring card, or disable the Parallel driver services by using the Devices
	  option in the Windows NT Control Panel.
	
	- Disable any parallel ports that use interrupts that conflict with the IBM
	  Token Ring cards. This is normally done through EISA configuration programs,
	  CMOS setup programs, or jumpers on the motherboard.
	
	Additional query words: prodsna wss
	
	======================================================================
	Keywords          : kbhw kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbHardware 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0
	
	=============================================================================
	
