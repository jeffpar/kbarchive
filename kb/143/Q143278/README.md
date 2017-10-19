---
layout: page
title: "Q143278: 28,800 bps Modem May Connect to MSN at a Slower Speed"
permalink: /kb/143/Q143278/
---

## Q143278: 28,800 bps Modem May Connect to MSN at a Slower Speed

	Article: Q143278
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbhw kbmsn kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you connect to MSN, The Microsoft Network, using a 28,800 bps modem and a
	28,800 bps access number, you may be connected to MSN at a slower speed than
	28,800 bps.
	
	CAUSE
	=====
	
	Depending on the access number, your modem may actually connect at 28,800 bps,
	26,400 bps, or 24,000 bps. We have adjusted the connection speed for some
	Internet access phone numbers to ensure a stable connection.
	
	STATUS
	======
	
	We expect this adjustment to be temporary. We are working on other ways to
	improve connection stability.
	
	MORE INFORMATION
	================
	
	This issue arises because of the V.34 and V.42 standards used by various modems.
	Your modem may establish a 28,800 bps connection but be unable to negotiate V.42
	compression. This leads to the inability to connect, slow throughput, and
	dropped sessions. A modem that fails to negotiate V.42 compression at 28,800 bps
	may successfully negotiate V.42 compression at slower speeds (such as 26,400 bps
	or 24,000 bps). The speed can also vary depending on the local phone company and
	phone line conditions.
	
	Additional query words: msn baud rate
	
	======================================================================
	Keywords          : kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
