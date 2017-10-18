---
layout: page
title: "Q174446: Fax Appears in Sent Items Folder But Fax Is Not Sent"
permalink: kb/174/Q174446/
---

## Q174446: Fax Appears in Sent Items Folder But Fax Is Not Sent

	Article: Q174446
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax using Microsoft Exchange or Windows Messaging, the
	fax may not be sent although the fax does appear in the Sent Items folder.
	
	CAUSE
	=====
	
	This behavior can occur if an unnecessary "1" is entered in the For Long
	Distance box in Dialing properties. Dialing properties is designed to
	automatically add a "1" before a telephone number that has an area code
	different from your own.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the unnecessary "1" from Dialing properties. To do
	this, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Modems.
	
	2. Click Dialing Properties, and then remove the unnecessary "1" from the For
	  Long Distance box.
	
	3. Click OK, and then click OK.
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:1.0
	
	=============================================================================
	
