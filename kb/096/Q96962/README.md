---
layout: page
title: "Q96962: Printing Problems When Using Disney Sound Source"
permalink: /kb/096/Q96962/
---

## Q96962: Printing Problems When Using Disney Sound Source

	Article: Q96962
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Disney Sound Source with Microsoft Windows, you may receive one of
	the following error messages if you try to print from a Windows- based
	application while playing sounds through Disney Sound Source:
	
	  Printer on LPT1: is busy
	
	-or-
	
	  LPT1 is being used by another application
	
	CAUSE
	=====
	
	Disney Sound Source is a parallel device for playing waveform (.WAV) sounds and
	has no MIDI capability. It uses a parallel pass-through adapter to plug into the
	parallel port on a computer and can go between the parallel port and a parallel
	printer cable. The above error is caused by a limitation in the hardware design
	of this product.
	
	WORKAROUND
	==========
	
	You may be able to decrease the chances of receiving this error message by
	setting the printer connection to LPTx.DOS (where <x> is the number of the
	parallel port) in the Printers dialog box of Control Panel.
	
	MORE INFORMATION
	================
	
	Disney Sound Source is manufactured by a Disney, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 wave sound timeout lpt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
