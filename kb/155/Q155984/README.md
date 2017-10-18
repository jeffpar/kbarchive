---
layout: page
title: "Q155984: Using the AVM Fritz ISDN Card with MSN"
permalink: kb/155/Q155984/
---

## Q155984: Using the AVM Fritz ISDN Card with MSN

	Article: Q155984
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the AVM Fritz ISDN card, you are unable to connect to MSN, The
	Microsoft Network.
	
	CAUSE
	=====
	
	After installing the AVM Fritz ISDN card, you need to download the CAPI port
	drivers provided by the card's manufacturer.
	
	RESOLUTION
	==========
	
	The CAPI port drivers help you set up your AVM Fritz ISDN card correctly and
	install it as one of several modems. You can check the configuration by
	double-clicking the Modems icon in Control Panel. The following modems should be
	listed:
	
	- AVM ISDN - ISDN (X.75)
	
	- AVM ISDN BTX
	
	- AVM ISDN Custom Config
	
	- AVM ISDN Internet (PPP over ISDN)
	
	- AVM ISDN Mailbox. (X.75)
	
	- AVM ISDN RAS (PPP over ISDN)
	
	To use the AVM Fritz ISDN card with MSN, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click AVM ISDN Internet (PPP over ISDN), and then click Properties.
	
	4. On the Connection tab, click Advanced.
	
	5. In the Extra Settings box, type the following line:
	
	  "ATS31=1" (without the quotation marks)
	
	6. Click OK until you return to Windows.
	
	7. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	8. In the Connect Using box, click AVM ISDN Internet (PPP over ISDN).
	
	9. Click OK.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
