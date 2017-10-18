---
layout: page
title: "Q113345: Support for PCI Computers and Peripherals in Windows NT 3.1"
permalink: kb/113/Q113345/
---

## Q113345: Support for PCI Computers and Peripherals in Windows NT 3.1

	Article: Q113345
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT version 3.1 should run on PCI bus computers if its SCSI and video
	adapters are non-PCI or have a PCI driver specifically designed for Windows NT
	version 3.1.
	
	MORE INFORMATION
	================
	
	Peripheral Component Interconnect (PCI) standard is a local-bus technology that
	is becoming increasingly common in new desktop computers. A blueprint or
	specification rather than something physical, it is a method of holding together
	PC components--the processor, memory, hard disk, etc.--that makes PCI computers
	and peripherals differ from other computers and peripherals currently
	available.
	
	The March 1994 Windows NT Version 3.1 hardware compatibility list includes a
	number of PCI bus computers. In general, Windows NT 3.1 should work on PCI
	computers. The current Windows NT hardware abstraction layer (HAL) does not
	support PCI functionality, but should allow Windows NT to run in a mode that is
	ISA/EISA compatible.
	
	If an adapter is working under Windows NT 3.1, it probably is running in a
	non-PCI or ISA/EISA compatible mode. Problems are most likely to arise with PCI
	adapters rather than PCI computers.
	
	Support Issues for PCI Adapters
	-------------------------------
	
	1. PCI computers should work with any adapter on the Windows NT hardware
	  compatibility list (HCL).
	
	2. Some, but not many, vendors are including PCI adapters in their PCI
	  computers. To work with Windows NT 3.1, the adapter must include a Windows NT
	  3.1 PCI driver, and any driver support issues must be referred to the
	  manufacturer. Presently there are no PCI adapters or peripherals on the
	  Windows NT 3.1 HCL.
	
	
	3. OEM Windows NT 3.1 PCI drivers do not enable Windows NT to support PCI
	  functionality--they simply allow the PCI adapter to function in an ISA/EISA
	  compatible mode, so it may work under Windows NT. Again, there are no plans
	  to support PCI functionality under Windows NT 3.1.
	
	
	4. PCI video adapters should work with Windows NT 3.1 because most of the calls
	  work with standard video BIOS.
	
	
	5. SCSI adapters may or may not work depending on the manufacturer's
	  implementation.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
