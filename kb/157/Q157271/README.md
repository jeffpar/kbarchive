---
layout: page
title: "Q157271: How to Set Up the 3Com Impact for Single-Channel ISDN"
permalink: kb/157/Q157271/
---

## Q157271: How to Set Up the 3Com Impact for Single-Channel ISDN

	Article: Q157271
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up the 3Com Impact ISDN modem for
	single-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	The following procedure works with version 2021 of the 3Com Impact.
	
	To enable single-channel settings for the 3Com Impact, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the 3com Impact modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. To connect at 56,000 bps, type the following string in the Extra Settings
	  box:
	
	  "S60=56 S61=2 S71=1 S80=0" (without the quotation marks)
	
	  If you cannot connect with the previous string, try typing the following
	  string without spaces:
	
	  "\Q3S60=56S70=0S71=1S80=0" (without the quotation marks)
	
	  To connect at 64,000 bps, type the following string in the Extra Settings
	  box:
	
	  "S60=64 S61=2 S71=0 S80=0" (without the quotation marks)
	
	  If you cannot connect with the previous string, try typing the following
	  string without spaces:
	
	  "\Q3S60=64S70=0S71=1S80=0" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	If you experience difficulties, please contact 3Com technical support.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	
