---
layout: page
title: "Q247228: Attachmate Advanced ISCA PCI Adapter Stays Pending"
permalink: kb/247/Q247228/
---

## Q247228: Attachmate Advanced ISCA PCI Adapter Stays Pending

	Article: Q247228
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an SDLC connection with an Attachmate Advanced ISCA PCI adapter,
	the connection may stay pending, and the Application event log may record the
	following error message:
	
	  Unable to Contact First Required Interrupt.
	
	This problem occurs on some systems with a BIOS that assigns PCI interrupts to
	PCI adapters outside the ISA range of interrupt 1 through 15. This has been
	reported in the Compaq 3500 series.
	
	WORKAROUND
	==========
	
	To work around this issue, set the IRQ table to mapped IRQs. The following is an
	example of how to do this on a Compaq 3500:
	
	1. Ensure the adapter is installed in BUS 0. To determine if the adapter is in
	  BUS 0, locate the processor. The first 4 slots located closest to the
	  processor are usually the first bus, BUS 0. The PCI specification calls out 4
	  bus loads (single adapters).
	
	2. Press the F10 key during startup to access the BIOS.
	
	3. Use the CTRL-A key combination to open the Advanced Features menu.
	
	4. Choose Review the Hardware Settings.
	
	5. In the View and Edit Details section, select the Full Table and Mapped
	  option. This forces PCI devices to use IRQs 2 through 15.
	
	MORE INFORMATION
	================
	
	A more thorough discussion of this issue is beyond the scope of this article;
	however, more information is available on the following Web sites:
	
	  http://www.compaq.com/support/techpubs/whitepapers
	  http://www.microsoft.com/hwdev/pci
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
