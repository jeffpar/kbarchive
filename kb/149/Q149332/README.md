---
layout: page
title: "Q149332: Problems Connecting to MSN with U.S. Robotics Sportster Modem"
permalink: /kb/149/Q149332/
---

## Q149332: Problems Connecting to MSN with U.S. Robotics Sportster Modem

{% raw %}

	Article: Q149332
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kbhw kbmsn kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems connecting to MSN, The Microsoft Network, with a
	U.S. Robotics Sportster 28,800 bps modem.
	
	CAUSE
	=====
	
	U.S. Robotics Sportster 28.8 modems with a firmware revision prior to 4/18/95
	have known problems.
	
	If you have updated firmware, you may experience connection problems because the
	U.S. Robotics Sportster 28.8 modem attempts to connect at 28,800 bps, and
	sometimes MSN modems cannot connect at this speed.
	
	RESOLUTION
	==========
	
	You can obtain a firmware revision dated 4/18/95 or later from U.S. Robotics.
	Make sure to have the UPC bar code and serial number of the modem available.
	
	If you have updated firmware, you can increase your possibility of connecting by
	limiting the modem speed to 26,400 bps. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the following command:
	
	  "&N13" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	You may also be able to connect using a slower speed if you disable VFC or V.34
	by using one of the following commands in the Extra Settings box:
	
	  Command     Function
	  -------------------------
	  ATS56=128   Disables VFC
	  ATS56=64    Disables V.34
	  ATS56=0     Modem reset
	  &N0         Modem reset
	
	NOTE: You can enter one command, or you can experiment with combinations of
	commands.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
