---
layout: page
title: "Q132784: Windows 95 Does Not Start on Dell Omniplex"
permalink: /kb/132/Q132784/
---

## Q132784: Windows 95 Does Not Start on Dell Omniplex

{% raw %}

	Article: Q132784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a PCI card in one of the PCI expansion slots of the Dell
	Omniplex computer, Windows 95 does not start.
	
	CAUSE
	=====
	
	The Dell Omniplex has two PCI slots and four interrupts available for PCI cards:
	9, 10, 11, and 15. The Dell Omniplex ships with three interrupt- claiming PCI
	devices installed: a video card on the motherboard that claims IRQ 9, an NCR 810
	SCSI card on the motherboard that controls the hard drive and the CD ROM, and an
	external NCR SCSI. Each of these devices uses a different interrupt, leaving one
	PCI IRQ line available for the remaining PCI slot.
	
	If you use the remaining interrupt by installing an ISA card (for example, an ISA
	network card or sound card), and then try to plug a PCI network card into the
	remaining slot, the PCI network card is forced to share an interrupt.
	
	According to the specification for this bus architecture, PCI devices can share
	interrupts. However, the NCR SCSI controller does not share interrupts
	correctly. If the controller for the hard drive is forced to share an interrupt,
	the computer stops responding (hangs) when the controller tries to access the
	disk when Windows 95 starts.
	
	RESOLUTION
	==========
	
	Remove the PCI card that you added and adjust the resources of your non-PCI
	cards so that none of them are using interrupts 9, 10, 11, or 15. Then reinstall
	the PCI card so that Windows 95 can redetect it.
	
	The Dell Omniplex computer is manufactured by Dell Computer Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: CR 810 PCI SCSI
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
