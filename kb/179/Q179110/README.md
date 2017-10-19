---
layout: page
title: "Q179110: XCLN: Macintosh Client Flashes Splash Screen Without Starting"
permalink: /kb/179/Q179110/
---

## Q179110: XCLN: Macintosh Client Flashes Splash Screen Without Starting

	Article: Q179110
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Exchange Macintosh client, the Exchange splash screen appears
	then disappears. The client never loads, and no error message is generated.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft OLE Extension is not loaded before you
	try to start the Microsoft Exchange client. With System 7.x or higher, the
	Extensions Manager ships with the operating system. This Control Panel allows
	the user to activate or deactivate any extensions that are found in the System
	folder, Extensions subfolder.
	
	WORKAROUND
	==========
	
	Check to see whether the Microsoft OLE Extension has been deactivated via the
	Extensions Manager. If so, reactivate it. If the Microsoft OLE Extension is
	missing completely, then the Exchange client should be removed and reinstalled.
	Refer to the following Knowledge Base articles for more information and for
	removal and reinstallation of the Macintosh client:
	
	Q158519 XCLN MAC: Removing and Reinstalling the Macintosh Client Q156028 XCLN
	MAC: List of Files Installed and Used
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0
	
	=============================================================================
	
