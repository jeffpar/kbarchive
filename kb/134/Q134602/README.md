---
layout: page
title: "Q134602: Zenith Zplayer Adapter Not Compatible with 32-Bit Drivers."
permalink: /kb/134/Q134602/
---

## Q134602: Zenith Zplayer Adapter Not Compatible with 32-Bit Drivers.

{% raw %}

	Article: Q134602
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
	
	The Zenith Zplayer PCMCIA CD-ROM adapter does not function correctly using
	Windows 95 32-bit drivers.
	
	CAUSE
	=====
	
	The 32-bit PCMCIA drivers included with Windows 95 are not compatible with the
	Zenith Zplayer PCMCIA adapter.
	
	RESOLUTION
	==========
	
	To disable the 32-bit PCMCIA drivers, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the PCMCIA adapter.
	
	3. Click the check box for the current configuration to clear it.
	
	4. Click OK or Close until you return to Control Panel. Restart your computer.
	
	5. To use the PCMCIA adapter with real-mode drivers, use the installation
	  program included with the adapter.
	
	Do not run the PCMCIA Wizard to install the 32-bit PCMCIA drivers.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact Zenith.
	
	MORE INFORMATION
	================
	
	The Zenith Zplayer adapter is a combination ESS sound card and proprietary
	CD-ROM drive. The CD-ROM drive functions properly with real-mode drivers. The
	hardware detection portion of Setup detects the card as an ESS sound card and
	MIDI port.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
