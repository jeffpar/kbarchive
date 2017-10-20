---
layout: page
title: "Q141920: MS Fax Error Message: Address Incorrect or Does Not Exist"
permalink: /kb/141/Q141920/
---

## Q141920: MS Fax Error Message: Address Incorrect or Does Not Exist

{% raw %}

	Article: Q141920
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a fax using Microsoft Exchange, your fax may be returned
	immediately as undeliverable. When you open the message, you see the following
	explanation:
	
	  The recipient's e-mail address is incorrect or does not exist. Be
	  sure to type the address correctly, and try sending the message
	  again. If the message cannot be sent, contact your administrator.
	
	CAUSE
	=====
	
	This behavior can occur if the fax client is behind the mail client in the
	delivery order.
	
	
	RESOLUTION
	==========
	
	Change the delivery order to place the fax client ahead of the mail client. To
	do so, follow these steps:
	
	1. Use the right mouse button to click the Inbox icon on the desktop, and then
	  click Properties on the menu that appears.
	
	2. Click the Delivery tab.
	
	3. Click Microsoft Fax Transport, and then move it above Microsoft Mail using
	  the arrows to the right of the box.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
