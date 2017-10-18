---
layout: page
title: "Q142912: IBM Token Ring 16/4 Network Adapter II Switch Settings"
permalink: kb/142/Q142912/
---

## Q142912: IBM Token Ring 16/4 Network Adapter II Switch Settings

	Article: Q142912
	Product(s): Microsoft Windows NT
	Version(s): kb3rdparty kbhw
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following lists switch settings for the IBM Token Ring 16/4 Adapter II ISA
	network adapter:
	
	ROM ADDRESS (SW1-SW3):
	
	SW1   SW2   SW3   RPL ROM ADDRESS   I/O BASE ADDRESS
	---   ---   ---   ---------------   ----------------
	ON    ON    ON        C0000             86A0
	OFF   ON    ON        C4000             96A0
	ON    OFF   ON        C8000             A6A0
	OFF   OFF   ON        CC000             B6A0
	ON    ON    OFF       D0000             C6A0
	OFF   ON    OFF       D4000             D6A0
	ON    OFF   OFF       D8000             E6A0
	OFF   OFF   OFF       DC000             F6A0
	
	INTERRUPT LEVEL (SW4-SW5):
	
	SW4   SW5   Interrupt Requests (IRQ)
	---   ---   ------------------------
	ON    ON        IRQ  9
	OFF   ON        IRQ 10
	ON    OFF       IRQ 11
	OFF   OFF       IRQ 15
	
	WAIT STATE (SW6):
	
	SW6   State
	---   -----
	ON    Normal
	OFF   Fast
	
	ADAPTER MODE (SW7):
	
	SW7   Mode
	---   ----
	ON    Normal
	OFF   Reserved
	
	RPL (SW8):
	
	SW8   Enable/Disable
	---   --------------
	ON    RPL DISABLE
	OFF   RPL ENABLE
	
	DMA CHANNEL (SW9-SW10):
	
	SW9   SW10   Channel
	---   ----   -------
	ON    ON       5
	OFF   ON       6
	ON    OFF      7
	OFF   OFF    Not Used
	
	RING SPEED (SW11):
	
	SW11  Speed
	----  -----
	ON    4 Mbps
	OFF   16 Mbps
	
	CABLE TYPE (SW12):
	
	SW12  Type
	----  ----
	ON    STP
	OFF   UTP
	
	For additional information on the IBM Token Ring 16/4 Adapter II network adapter,
	refer to the Installation and Test Instructions guide provided with the network
	adapter.
	
	Additional query words: dip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : kb3rdparty kbhw
	
	=============================================================================
	
