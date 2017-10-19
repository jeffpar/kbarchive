---
layout: page
title: "Q152335: How to Set Up the Motorola BitSurfr Pro for Dual-Channel ISDN"
permalink: /kb/152/Q152335/
---

## Q152335: How to Set Up the Motorola BitSurfr Pro for Dual-Channel ISDN

	Article: Q152335
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up the Motorola BitSurfr Pro ISDN modem for
	dual-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	To enable multilink settings for the BitSurfr Pro, follow these steps:
	
	1. Go to Start, point to Settings, click Control Panel, and then double-click
	  Modems.
	
	2. Click the BitSurfr modem, and then click Properties.
	
	3. On the Connection tab, click Advanced.
	
	4. To connect at 112,000 bps, type the following string in the Extra Settings
	  box:
	
	  <B>AT&F@B0=2%A4=1</B>
	
	  To connect at 128,000 bps, type the following string in the Extra Settings
	  box:
	
	  <B>%AT=95%A4=0@B0=2</B>
	
	5. Click OK or Close until you return to Control Panel.
	
	You also need to enter the MSN access phone number using these steps:
	
	1. On the MSN Sign-in screen, click Settings.
	
	2. Click MSN is my dial-up Internet access provider, and then click Access
	  Numbers.
	
	3. In the Service Type box, click ISDN access to the Internet and MSN.
	
	4. Click Change, next to the Primary box, and select your country, state or
	  region, and then your city to find your MSN access number.
	
	5. Select the access number of your choice and click OK.
	
	6. In the Primary box, type the access number to connect to MSN, including the
	  long distance prefix, area code, and line access number if needed, and then
	  click OK until you return to the Sign-in screen.
	
	If you experience difficulties, please call Motorola BitSurfr Pro technical
	support.
	
	NOTE: You can obtain the latest BitSurfr drivers from the Bitsurfr Software Web
	site.
	
	Additional query words: msn 1.20 1.30 2.00 2.50 2.60
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN260 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,2.6
	Issue type        : kbinfo
	
	=============================================================================
	
