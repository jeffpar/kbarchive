---
layout: page
title: "Q196975: CRC Error Messages on Multiple-Processor Computers"
permalink: kb/196/Q196975/
---

## Q196975: CRC Error Messages on Multiple-Processor Computers

	Article: Q196975
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw kbtool kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a remote access server to transfer data over a null modem cable
	between a multiple-processor computer and a singe-processor computer, you may
	receive cyclical redundancy check (CRC) or data overrun error messages in
	Dial-Up Monitor.
	
	CAUSE
	=====
	
	The overruns were occurring because the internal buffers in the UART (FIFO's)
	filled up before the interrupt was serviced and data was lost on the RS-232 bus.
	Further debugging found that the serial interrupt is masked for longer than .087
	ms by the IDE interrupts that were being serviced.
	
	RESOLUTION
	==========
	
	There are a couple of settings in the registry that will allow the interrupts to
	be serviced quicker, set RxFIFO to 1:
	HKLM\System\CurrentControlSet\Services\Serial By default DMA is not enabled on
	Windows NT. Once enabling DMA the problem was resolved. I was able to increase
	the baud rate to 115k and transfer over 100 meg of data with no errors. Enabling
	improves CPU utilization over standard PIO, increasing system usability while
	IDE operations are in progress.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Using PCI bus master DMA, the CPU has to service only a single interrupt that is
	generated when the IDE command completes. This is compared to standard PIO,
	where the CPU has to service an interrupt from the device, every time a block of
	data becomes available to the host. Performance figures on a checked build
	showed approximately 20 to 30 percent CPU utilization using DMA, versus
	approximately 90 to 100 percent utilization during PIO transfers. Performance
	figures for DMA on a free build are even better, showing single-digit
	percentages in some cases. How to Obtain Dmacheck.exe for Windows NT [winnt] ID:
	Q191774 CREATED: 24-AUG-1998 MODIFIED: 24-AUG-1998 WinNT:4.0 For more
	information about downloading files from the Microsoft Download Center, please
	see the following article in the Microsoft Knowledge Base: ARTICLE-ID: Q119591
	TITLE : How to Obtain Microsoft Support Files from Online Services The following
	motherboards have exhibited the behavior described in this article:
	
	- Asus P2l97-DS with the Intel 440LX chip set
	
	- Micronics Helios with the Intel 440BX chip set
	
	- SuperMicro P6DBS with the Intel 440BX chip set
	
	- Tyan S1686D with the Intel 440FX chip set
	
	- Tyan S1832D with the Intel 440BX chip set
	
	- Tyan S1563 with the Intel 430HX chip set
	
	All these motherboards use the Intel I/O APIC multiple-processor S82093AA
	controller.
	
	
	Additional query words: mp multiprocessor chipset
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw kbtool kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
