---
layout: page
title: "Q152336: How to Set Up the 3Com Impact for Dual-Channel ISDN"
permalink: kb/152/Q152336/
---

## Q152336: How to Set Up the 3Com Impact for Dual-Channel ISDN

	Article: Q152336
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up the 3Com Impact IQ ISDN modem for
	dual-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	The following procedure works with version 2021 of the 3Com Impact IQ. You may
	obtain the latest 3Com drivers from the 3Com Impact web site. To enable
	dual-channel settings for the 3Com Impact, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the 3Com Impact IQ modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. To connect at 112,000 bps, type the following string in the Extra Settings
	  box:
	
	  S60=56 S61=2 S71=1 S80=1
	
	  If you cannot connect with the previous string, try the following string
	  without spaces:
	
	  \Q3S60=56S70=0S71=1S80=1
	
	  To connect at 128,000 bps, type the following string in the Extra Settings
	  box:
	
	  S60=64 S61=2 S71=0 S80=1
	
	  If you cannot connect with the previous string, try the following string
	  without spaces:
	
	  \Q3S60=64S70=0S71=1S80=1
	
	6. Click OK until you return to Windows.
	
	If you experience difficulties using the 3Com Impact IQ modem, please call 3Com
	technical support.
	
	Additional query words: msn 1.30 2.00 2.50 2.60.
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.6
	Issue type        : kbhowto
	
	=============================================================================
	
