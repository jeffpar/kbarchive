---
layout: page
title: "Q131782: &quot;Code 10&quot; Reported with PCMCIA Network Card on TravelMate 5000"
permalink: /kb/131/Q131782/
---

## Q131782: &quot;Code 10&quot; Reported with PCMCIA Network Card on TravelMate 5000

	Article: Q131782
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
	
	When you are using a Texas Instruments (TI) TravelMate 5000 computer with a
	PCMCIA network adapter and protected-mode drivers for the PCMCIA socket and
	adapter, the adapter is detected and identified correctly by Windows 95, but you
	may see an exclamation point in a yellow circle next to the adapter in Device
	Manager. When this is the case, if you view the properties for the adapter,
	"Code 10" is displayed in the Device Status box.
	
	CAUSE
	=====
	
	The CMOS setting for PCMCIA I/O Addressing is set to Minimum. This setting does
	not appear to cause any problems when you are using a PCMCIA modem or hard disk,
	or when you are using a PCMCIA network adapter with real-mode drivers for the
	socket and adapter. However, this setting does cause problems when you are using
	a PCMCIA network adapter with protected-mode drivers for the socket and
	adapter.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, change the CMOS setting for PCMCIA I/O Addressing from
	Minimum to Maximum. For information about changing CMOS settings on your TI
	TravelMate 5000 computer, please refer to the computer's documentation or
	manufacturer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
