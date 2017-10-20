---
layout: page
title: "Q121718: Disabled Net Card on Compaq XL560 Is Detected By Plug and Play"
permalink: /kb/121/Q121718/
---

## Q121718: Disabled Net Card on Compaq XL560 Is Detected By Plug and Play

{% raw %}

	Article: Q121718
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Compaq XL560 EISA PCI-based and DeskPro 5100 computers have a built-in AMD
	Ethernet network interface card. When the internal network card is disabled
	through CMOS and a second network card is installed, Windows 95 detects both the
	internal and the secondary network cards during the Plug and Play detection
	portion of Setup.
	
	CAUSE
	=====
	
	The built-in network interface card is disabled from a system BIOS point of view
	only--Windows 95 recognizes it as an unconfigured device. Windows 95 treats
	unconfigured devices as PCMCIA devices and assigns them IRQ 9 and an I/O range.
	As a result, the device is recognized in the Plug and Play detection phase.
	
	RESOLUTION
	==========
	
	To correct this problem, disable the built-in network interface card through the
	Device Manager in Control Panel.
	
	To disable the internal network card in Windows 95, perform the following steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab.
	
	4. Click the plus sign next to Network Adapters.
	
	5. Click the AMD network interface card, then click the Properties button.
	
	6. Under Device Usage, change the status by clicking the option that reads
	  "Original Configuration"
	
	7. Click the OK button to accept the change, then close Device Manager and
	  Control Panel.
	
	The internal network interface card should now be disabled.
	
	Additional query words: pnp plug-and-play
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
