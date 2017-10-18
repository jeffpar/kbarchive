---
layout: page
title: "Q157272: How to Set Up the Motorola BitSurfr for Single-Channel ISDN"
permalink: kb/157/Q157272/
---

## Q157272: How to Set Up the Motorola BitSurfr for Single-Channel ISDN

	Article: Q157272
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
	
	This article describes how to set up the Motorola BitSurfr ISDN modem for
	single-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	To enable single-channel settings for the Motorola BitSurfr modem, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the Motorola BitSurfr modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. To connect at 56,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "\Q3%A4=1%A2=95" (without the quotation marks)
	
	  To connect at 64,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "\Q3%A4=0%A2=95" (without the quotation marks)
	
	  If you cannot connect with the previous string, try one of the following
	  strings without spaces:
	
	  "\Q3%A2=95 or %A2=95@B0=1" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	If you experience difficulties, please contact Motorola technical support.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	
