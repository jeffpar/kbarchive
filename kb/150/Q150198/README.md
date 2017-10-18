---
layout: page
title: "Q150198: Bus Contention and PCI, EISA, and ISA"
permalink: kb/150/Q150198/
---

## Q150198: Bus Contention and PCI, EISA, and ISA

	Article: Q150198
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a nightly backup of your system and during that period of time you
	get network disconnect errors in the event log, it is very likely that you are
	encountering bus contention between your network card and the SCSI controller
	that may be hosting your tape backup unit.
	
	Because SCSI controllers are most often involved in this type of issue, this
	article focuses on SCSI, but bus contention can potentially affect the function
	of any card or built-in accessory port in the system including mice, video,
	keyboard, and any other I/O system.
	
	MORE INFORMATION
	================
	
	There are hardware issues that occur rarely and are on the surface
	indistinguishable from software-based problems. These issues most often occur
	when there are a number of same function cards in a given computer. For example
	a given hardware platform has several different SCSI cards in the system, one or
	more in the slots and perhaps an onboard (built-in) SCSI controller in some of
	the more modern boards. This can occur with any group of cards in a
	multi-interface system board (any combination of PCI, EISA and ISA).
	
	WORKAROUND
	==========
	
	The best test (and potential workaround) for this problem is to choose an ISA
	board to replace your PCI (or EISA) board's function (for example, replace a PCI
	network card with an ISA network card) and see whether the problem ceases. If
	substituting the ISA board eliminates the problem, you may want to contact your
	various hardware vendors to investigate why and where this conflict is occurring
	if you want to continue to use the card in question.
	
	An alternative is to simplify your setup. For example, you could place your tape
	unit on the onboard SCSI chain and eliminate one of the extra SCSI controllers.
	This issue should not occur in an all-ISA or all-EISA configuration. Although
	with the ISA configuration you will have the familiar problem of I/O address as
	IRQ conflict resolution, most of these conflicts are self-evident.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTAdvSerSearch kbWinNTAdvServ351 kbWinNTAdvServ350
	Version           : :3.5,3.51
	
	=============================================================================
	
