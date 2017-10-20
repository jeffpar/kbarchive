---
layout: page
title: "Q139740: Slow Performance with Sierra Semiconductor Chip Set Modem"
permalink: /kb/139/Q139740/
---

## Q139740: Slow Performance with Sierra Semiconductor Chip Set Modem

{% raw %}

	Article: Q139740
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a modem with a Sierra Semiconductor chip set, you can connect
	to MSN, The Microsoft Network, but it may take a long time to display a new
	window and its contents, even though the modem icon on the taskbar shows a
	nearly continuous green light that indicates that data is being received.
	
	CAUSE
	=====
	
	This behavior occurs with modems with a Sierra Semiconductor 14,400 bps chip
	set. Modems used by MSN contain the Rockwell chip set. The Sierra Semiconductor
	14,400 bps chip set is not fully compatible with the Rockwell chip set.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. On the General tab, click your modem, and then click Properties.
	
	4. On the General tab, click 57600 (or 115200 if it is available) in the Maximum
	  Speed box.
	
	5. On the Connection tab, click Advanced.
	
	6. Click the Use Error Control check box to clear it.
	
	7. Click OK or Close until you return to Windows.
	
	These settings cause the computer to access the modem's FIFO buffers as fast as
	possible, and reduce the chip set's workload by reducing the compression and
	error-correction overhead.
	
	If performance remains unacceptably slow, the only solution is to purchase a
	modem using a Rockwell-compatible chip set.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN250 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	
	=============================================================================
	

{% endraw %}
