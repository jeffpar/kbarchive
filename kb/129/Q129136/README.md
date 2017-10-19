---
layout: page
title: "Q129136: XCLN: Pointer Doesn't Change When New Mail Is Received"
permalink: /kb/129/Q129136/
---

## Q129136: XCLN: Pointer Doesn't Change When New Mail Is Received

	Article: Q129136
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You configure your client to notify you of new mail using the Briefly Change The
	Pointer notification option in the Options dialog box. However, when you receive
	new mail on a Microsoft Exchange Windows 95 and Windows NT clients, the pointer
	does not change as expected.
	
	CAUSE
	=====
	
	When you receive new mail, the pointer will only change when it is inside the
	Microsoft Exchange client window. If the pointer is in another application or
	outside the Microsoft Exchange window, it will not change when new mail arrives.
	This is due to a limitation of cursor control on the 32-bit Windows platforms.
	
	RESOLUTION
	==========
	
	With 32-bit Windows platforms, you can take advantage of other notification
	options, such as playing a sound or displaying a notification message. In
	addition, Windows 95 will automatically display a new mail notification icon on
	its taskbar.
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
