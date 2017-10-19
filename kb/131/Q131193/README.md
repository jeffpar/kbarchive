---
layout: page
title: "Q131193: Carrier Tone Heard But Modem Loses Connection"
permalink: /kb/131/Q131193/
---

## Q131193: Carrier Tone Heard But Modem Loses Connection

	Article: Q131193
	Product(s): The Microsoft Network
	Version(s): 2.6,5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): kbenv kbmsnkbfaq
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.6, 5.0, 5.1, 5.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to The Microsoft Network, you hear a carrier tone
	but after 15 or 30 seconds the modem may lose the connection.
	
	CAUSE
	=====
	
	The S7 register, which controls the amount of time the modem waits for a
	carrier, probably does not have a sufficient value for the modem to recognize a
	compatible carrier issued by the remote modem.
	
	RESOLUTION
	==========
	
	Set the S7 register to a value of at least 60. To do so, use one of the
	following methods:
	
	Method 1
	--------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you use to connect to MSN, and then click Properties.
	
	4. Click the Connection tab.
	
	5. Select the Cancel the call if not connected within <n> secs" check box,
	  where <n> is the number of seconds, and then type 60 in the Secs box.
	
	6. Click OK, and then click Close.
	
	7. Close Control Panel, and then restart the computer.
	
	
	Method 2
	--------
	
	Configure the modem to wait at least four seconds for the carrier after dialing
	the MSN access number. To do this, follow these steps:
	
	1. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	2. In the Phone Number box, type four commas after the primary MSN access
	  number.
	
	3. In the Backup Number box, type four commas after the backup MSN access
	  number.
	
	4. Click OK.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. kbimu
	
	======================================================================
	Keywords          : kbenv kbmsn kbfaq
	Technology        : kbMSNSearch kbMSN520 kbMSN510 kbMSN500 kbMSN260
	Version           : :2.6,5.0,5.1,5.2
	Issue type        : kbinfo
	
	=============================================================================
	
