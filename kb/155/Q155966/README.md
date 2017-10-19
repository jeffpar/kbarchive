---
layout: page
title: "Q155966: Using Elsa Microlink ISDN/TLV34 to Connect to MSN"
permalink: /kb/155/Q155966/
---

## Q155966: Using Elsa Microlink ISDN/TLV34 to Connect to MSN

	Article: Q155966
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an Elsa Microlink ISDN/TLV34 modem, you may receive the
	following message when you attempt to connect to MSN, The Microsoft Network:
	
	  No dial tone.
	
	CAUSE
	=====
	
	By default, the Elsa Microlink ISDN/TLV34 modem uses the V.120 protocol, which
	MSN does not support.
	
	RESOLUTION
	==========
	
	Change the protocol to PPP by adding the following extra setting:
	
	  "AT%P1" (without the quotation marks)
	
	To add this setting, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. Type the following line in the Extra Settings box:
	
	  "AT%P1" (without the quotation marks)
	
	6. Click OK until you return to Windows.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
