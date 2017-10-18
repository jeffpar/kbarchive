---
layout: page
title: "Q137452: Options Not Available When Connecting with Remote Mail"
permalink: kb/137/Q137452/
---

## Q137452: Options Not Available When Connecting with Remote Mail

	Article: Q137452
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Remote Mail feature of Microsoft Exchange, the following
	options may be unavailable when you click either the Connect And Update Headers
	or the Connect And Transfer command on the Tools menu:
	
	- Send Mail
	
	- Receive Marked Items
	
	CAUSE
	=====
	
	Incoming mail delivery or outgoing mail delivery, or both, have been disabled in
	the properties for the Microsoft Mail service in the current Microsoft Exchange
	profile.
	
	RESOLUTION
	==========
	
	To enable incoming and outgoing mail delivery, follow these steps:
	
	1. In Microsoft Exchange, click Services on the Tools menu.
	
	2. Click Microsoft Mail, click Properties, and then click the Delivery tab.
	
	3. Click the Enable Incoming Mail Delivery and the Enable Outgoing Mail Delivery
	  check boxes to select them.
	
	4. Click OK.
	
	Additional query words: ras grayed greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
