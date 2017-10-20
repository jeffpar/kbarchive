---
layout: page
title: "Q139472: ESS488 Sound Card Cannot Be Configured for IRQ 10"
permalink: /kb/139/Q139472/
---

## Q139472: ESS488 Sound Card Cannot Be Configured for IRQ 10

{% raw %}

	Article: Q139472
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
	
	When you try to manually configure an ESS488 sound card in Device Manager, you
	may not be able to configure the card to use IRQ 10, even though you have
	configured the card itself to use IRQ 10.
	
	CAUSE
	=====
	
	Many ESS488 sound cards have been modified so that you can use IRQ 7, but not
	IRQ 10. The documentation included with the sound card may not reflect that this
	modification has been made.
	
	RESOLUTION
	==========
	
	To work around this behavior, configure the card to use IRQ 7 instead of IRQ 10.
	If IRQ 7 is not available, configure the card to use IRQ 3 or 5, or reconfigure
	other devices in your computer so that IRQ 7 is available. The card can also be
	configured for IRQ 2, but this is not recommended because IRQ 2 is used by the
	Peripheral Interrupt Controller (PIC).
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
