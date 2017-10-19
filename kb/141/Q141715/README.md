---
layout: page
title: "Q141715: Event ID 5012 Occurs with 3C589 PCMCIA Network Card"
permalink: /kb/141/Q141715/
---

## Q141715: Event ID 5012 Occurs with 3C589 PCMCIA Network Card

	Article: Q141715
	Product(s): Microsoft Windows NT
	Version(s): 3.X,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.X, 4.0 
	- Microsoft Windows NT Server versions 3.X, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade or perform a new installation of Windows NT Workstation or
	Windows NT Server with a 3Com EtherLink III (3C589B) adapter, Setup may not
	correctly detect the settings for the network interface card (NIC). If you
	continue with the installation and do not verify the settings, the following
	error message may appear when you start your computer:
	
	  At least one service or driver failed during system startup.
	
	The following event is logged in the system log:
	
	  Event: 5012.
	  Source: ELNK3
	  Description:
	
	  ELNK31: The I/O base address supplied does not match the jumpers on the
	  adapter.
	
	CAUSE
	=====
	
	This is caused by the driver not automatically setting the Bus Type and Card
	Type for PCMCIA during the installation. During Setup, it defaults to ISA Bus
	Type.
	
	RESOLUTION
	==========
	
	Reconfigure the 3C589 driver in Control Panel by choosing Network so the Bus
	Type is set to PCMCIA. You may need to modify the registry to ensure the Card
	Type and PCMCIA are enabled properly.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Elnk31\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: Pcmcia
	  Data Type: REG_DWORD
	  Data: 1
	
	5. Modify the following:
	
	  Value Name: CardType
	  Data Type: REG_DWORD
	  Data: 0x3 (Select hexadecimal radix)
	
	6. Choose OK and quit Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	If the system has a docking station network card different from the PCMCIA card,
	set the IRQ for the 3C589 to the following if the system locks up when inserted
	in the docking station:
	
	  3C589:
	     IRQ: 7
	     Base Address: 0x320
	
	  Default settings for second NIC:
	     IRQ: 10
	     Base Address: 0x300
	
	The 3C589 and 3C589B network interface cards are manufactured by 3Com
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :3.X,4.0
	
	=============================================================================
	
