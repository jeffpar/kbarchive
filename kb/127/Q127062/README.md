---
layout: page
title: "Q127062: Mouse Hangs After Windows 95 Hardware Detection"
permalink: /kb/127/Q127062/
---

## Q127062: Mouse Hangs After Windows 95 Hardware Detection

	Article: Q127062
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95 on a computer using Viva Computers' VITEX
	RS232 (HMC83451) serial card, the mouse stops responding (hangs) after Setup
	finishes its hardware detection if the mouse is installed on COM1.
	
	CAUSE
	=====
	
	Setup detects the COM1 port on the VITEX RS232 card as a parallel port because
	of the addressing scheme used on the card, causing the mouse to stop responding.
	
	WORKAROUND
	==========
	
	To install Windows 95 on a computer containing this card, the mouse must be
	installed on COM2 in order to use the mouse after Setup's hardware detection.
	
	
	MORE INFORMATION
	================
	
	The VITEX RS232 serial card has two chips, a UART 16550 and an RS232 (HMC83451).
	The card supports two serial RS232 ports and one printer port. Because of the
	addressing scheme used on the card, Setup detects the COM1 port as a printer
	port.
	
	According to Viva Computers, the VITEX RS232 (HMC83451) card has been
	discontinued and has been replaced by the VITEX RS232 (HMC83450) card, which
	does not include a printer port.
	
	
	The products discussed here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
