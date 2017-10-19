---
layout: page
title: "Q157270: How to Set Up Motorola BitSurfr Pro for Single-Channel ISDN"
permalink: /kb/157/Q157270/
---

## Q157270: How to Set Up Motorola BitSurfr Pro for Single-Channel ISDN

	Article: Q157270
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbhw kbmsn kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up the Motorola BitSurfr Pro ISDN modem for
	single-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	The following instructions work with version 1G of the BitSurfr Pro. You can get
	the latest BitSurfr drivers from the BitSurfr Software Web site
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the Motorola BitSurfr Pro modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. To connect at 56,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "AT&F%A4=1" (without the quotation marks)
	
	  To connect at 64,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "AT&F" (without the quotation marks)
	
	  If you cannot connect with the previous string, try typing one of the
	  following strings without spaces:
	
	  "\Q3%A2=95 or %A2=95@B0=1" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	If you experience difficulties, please contact Motorola technical support.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbhw kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	
