---
layout: page
title: "Q184191: Inserted CardBus PCMCIA Adapter Not Rebalanced Properly"
permalink: /kb/184/Q184191/
---

## Q184191: Inserted CardBus PCMCIA Adapter Not Rebalanced Properly

	Article: Q184191
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbhw osr2 win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CardBus multifunction network adapter/modem cards may not function properly. On
	some computers (such as Hewlett-Packard OmniBook computers with a TI 1131
	CardBus controller) the card may experience a resource conflict for a memory
	resource required by the second function on the card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and Windows
	95 OEM Service Release versions 2, 2.1, and 2.5.
	
	
	MORE INFORMATION
	================
	
	When you insert the multifunction CardBus card, the card is identified and the
	network adapter is detected and installed. The modem is then detected and
	installed. When the computer is restarted, the modem is flagged with a resource
	conflict.
	
	Additional query words: card bus osr2 osr2.1 osr2.5 hp
	======================================================================
	Keywords          : kbenv kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
