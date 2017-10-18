---
layout: page
title: "Q157274: How to Set Up the USR Courier I-Modem for Single-Channel ISDN"
permalink: kb/157/Q157274/
---

## Q157274: How to Set Up the USR Courier I-Modem for Single-Channel ISDN

	Article: Q157274
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 01-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up the U.S. Robotics (USR) Courier I-Modem
	ISDN modem for single-channel access to MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	To enable single-channel settings for the USR Courier I-Modem, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the USR Courier I-Modem, and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. To connect at 56,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "ATS67.2=0 S68.3 *V2=5" (without the quotation marks)
	
	  If you cannot connect with the previous string, try typing the following
	  string without spaces:
	
	  "ATS67.1=1 S68.3 *V2=5 &K0" (without the quotation marks)
	
	  To connect at 64,000 bps, type the following string in the Extra Settings box
	  without spaces:
	
	  "ATS67.2=1 S68.3 *V2=5" (without the quotation marks)
	
	  If you cannot connect with the previous string, try typing the following
	  string without spaces:
	
	  "ATS67.1=1 S68.3 *V2=5 &K0" (without the quotation marks)
	
	6. Click OK or Close until you return to Windows.
	
	If you experience difficulties, please contact U.S. Robotics technical support.
	
	Additional query words: msn kbimu I-Modem IMODEM
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbinfo
	
	=============================================================================
	
