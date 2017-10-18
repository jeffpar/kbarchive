---
layout: page
title: "Q153474: Err Msg: Modem Is Busy or Not Found."
permalink: kb/153/Q153474/
---

## Q153474: Err Msg: Modem Is Busy or Not Found.

	Article: Q153474
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, with a Creative Labs
	19200 Data Fax Modem or a NEC 28.8 Data Fax Modem, you may receive the following
	error message:
	
	  Modem is busy or not found.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Use Error Control option and add the
	following extra setting:
	
	  Creative Labs 19200 Data Fax: "AT$F0H0" (without the quotation marks)
	
	  NEC 28.8 Data Fax Modem: "AT&F0" (without the quotation marks)
	
	To disable the Use Error Control option and add the extra setting, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the appropriate extra setting.
	
	6. Click the Use Error Control check box to clear it.
	
	7. Click OK or Close until you return to Control Panel.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kberrmsg kbhw kbHardware kbfaq
	Technology        : kbMSNSearch kbMSN500 kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,2.51,2.52,2.6,5.0
	Issue type        : kbprb
	
	=============================================================================
	
