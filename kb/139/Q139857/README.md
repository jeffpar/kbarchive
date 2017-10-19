---
layout: page
title: "Q139857: XCLN: Closing Client by Double-Clicking the System Menu"
permalink: /kb/139/Q139857/
---

## Q139857: XCLN: Closing Client by Double-Clicking the System Menu

	Article: Q139857
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you close Microsoft Exchange by double-clicking the System menu or by
	choosing the Close command on the System menu, it is similar to choosing the
	Exit command from the File menu rather than the Exit And Log Off command.
	
	As a result, the Microsoft Exchange Windows client closes, but the messaging
	application programming interface (MAPI) connection is left open.
	
	CAUSE
	=====
	
	This is by design. It prevents you from having to close all other messaging
	applications (for example, Schedule+ version 7.0) when the Microsoft Exchange
	window is closed.
	
	WORKAROUND
	==========
	
	If you use a Microsoft Exchange Client Extension, it is possible to change the
	default behavior to allow the Microsoft Exchange client to Exit And Log Off when
	it is closed using the System Menu. The extension would need to watch for the
	close menu being called and then exit and log off.
	
	Please refer to the MAPI Software Development Kit (SDK) for more information on
	how to create Microsoft Exchange Client Extensions.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
