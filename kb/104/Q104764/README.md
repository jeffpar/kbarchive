---
layout: page
title: "Q104764: IRQ Conflicts on Gateway 2000 Computers"
permalink: kb/104/Q104764/
---

## Q104764: IRQ Conflicts on Gateway 2000 Computers

	Article: Q104764
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	When installing Windows NT on some Gateway 2000 computers, IRQ
	conflicts may arise because of the default settings for COM ports or
	modems. If you have a built-in modem, it is usually set up
	to use COM1 and IRQ 4. There are also two additional COM ports
	configured as On Board COMA and On Board COMB in your computer CMOS.
	If a modem is installed, On Board COMA will normally have the
	following settings by default:
	
	  On board COMA:      COM3
	
	           COMA_IRQ:  IRQ-5
	
	When installing other devices that use an IRQ, such as network cards
	or sound cards, you may encounter IRQ conflicts if those devices are
	configured to use IRQ 5.
	
	For example, the Gateway may also include a Sony CDU-31A CD-ROM drive
	which uses IRQ 5 under Windows NT. If you follow the guidelines for
	installing that device in Windows NT, the CD-ROM still may not work
	properly. The IRQ conflict can be avoided by changing the COMA_IRQ
	setting in the CMOS or by setting up the device to use a different
	IRQ. To adjust IRQ settings, press CTRL+ALT+ESC at a command prompt or
	during boot to access the CMOS setup (ESC+F1 may also work). COMA_IRQ can
	be set to 4, 5, 9,
	or Disabled.
	
	For additional information on using the Sony CDU 31A with Windows NT,
	query on the following words in the Microsoft Knowledge Base:
	
	  sony cdu
	
	For additional information on Gateway computers, contact Gateway
	technical support at (800) 846-2301.
	
	The products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
