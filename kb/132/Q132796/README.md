---
layout: page
title: "Q132796: HP Ethertwist PC Lan Adapter/16 Plus Error Message"
permalink: kb/132/Q132796/
---

## Q132796: HP Ethertwist PC Lan Adapter/16 Plus Error Message

	Article: Q132796
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
	
	When you use the HP Ethertwist PC Lan Adapter/16 Plus, you may receive an error
	message (one of various error messages), but the adapter card functions
	correctly.
	
	CAUSE
	=====
	
	The HP Ethertwist PC Lan Adapter/16 Plus can operate in an I/O mapped mode with
	no upper memory use (default), or in memory mapped mode with a 2 kilobyte upper
	memory buffer.
	
	The Windows 95 driver provided to Microsoft by Hewlett-Packard does not have an
	option for I/O mapped mode.
	
	RESOLUTION
	==========
	
	To stop the error messages from appearing, reset the adapter card to memory
	mapped mode using the manufacturer-supplied Setup program (HPlanset.exe).
	
	For instructions about how to use the adapter card Setup program, refer to the
	documentation that came with the card, or contact the manufacturer.
	
	MORE INFORMATION
	================
	
	If you use HPlanset.exe to configure the adapter card for I/O mode, Windows 95
	notifies you that the card is not responding correctly, but the card functions
	correctly anyway. As long as the card is in I/O mode, when you start the
	computer, the warning message appears.
	
	After the warning messages are generated, the driver then automatically sets the
	adapter card to memory mapped mode for operation.
	
	Additional query words: PC LAN Adapter/16 TP Plus 27247
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
