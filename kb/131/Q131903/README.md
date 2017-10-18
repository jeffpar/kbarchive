---
layout: page
title: "Q131903: How to Set Up IBM Token Ring PCMCIA for Windows for Workgroups"
permalink: kb/131/Q131903/
---

## Q131903: How to Set Up IBM Token Ring PCMCIA for Windows for Workgroups

	Article: Q131903
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM Token-Ring 16/4 PC Card (Credit Card) adapter (PCMCIA version) uses two
	upper-memory address ranges: RAM and ROM. The Windows for Workgroups
	PROTOCOL.INI file requires modification to reflect these addresses manually or
	through Adapter Configuration in Network Setup. This article explains the steps
	to configure the network adapter correctly for Windows for Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	In order to configure the IBM Token-Ring 16/4 PC Card adapter for Windows for
	Workgroups:
	
	1. Determine the interrupt (IRQ), I/O port address, RAM address and ROM address
	  you are going to use for the network adapter. These can be configured through
	  the notebook computer's Setup software. The RAM and ROM locations may be
	  specified as Memory Window 1 and Memory Window 2.
	
	  Example
	
	  Memory Window 1: D4h
	  Memory Window 2: D8h
	
	  In this example, the ROM starting address is D400h. The memory range is from
	  D400 to D7FF. The RAM starting address is D800h. The memory range is from
	  D800 to DFFF.
	
	2. When you configure the network adapter through Adapter Configuration in
	  Network Setup, the following is added to the PROTOCOL.INI file:
	
	     [IBM_TRCC]
	     ;IBM Token-Ring 16/4 Credit Card
	     DriverName=IBMTOK$
	     RINGSPEED=4
	     AUTORINGSPEED
	     PCMCIA
	     MAXTRANSMITS=6
	     RECVBUFS=2
	     RECVBUFSIZE=256
	     XMITBUFS=1
	     XMITBUFSIZE=2040
	     INTERRUPT=<IRQ>
	     RAM=0xD800
	     MMIO=0xD400
	
	  NOTE: The Ring Speed can be set in this section to either 4 or 16. The
	  Interrupt setting should be the same as that selected in the notebook
	  computer's Setup utility. The RAM=0xD800 corresponds to the Memory Window 2
	  setting. The MMIO=0xD400 corresponds to the Memory Window 1 setting and
	  represents the ROM address.
	
	3. Modify the CONFIG.SYS file to exclude the RAM and ROM addresses being used by
	  the adapter, as follows:
	
	     Device=c:\dos\emm386.exe noems x=D400-D7FF x=D800-DFFF
	
	  -or-
	
	     Device=c:\dos\emm386.exe noems x=D400-DFFF
	
	  NOTE: Verify that the notebook Setup utility settings for the adapter, the
	  settings specified in PROTOCOL.INI, and the excluded memory ranges in
	  CONFIG.SYS match.
	
	Additional query words: 3.11 wfw wfwg nic mac
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
