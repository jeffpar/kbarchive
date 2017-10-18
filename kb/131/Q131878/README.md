---
layout: page
title: "Q131878: Microsoft Exchange Client Keeps Unsent Mail in Outbox"
permalink: kb/131/Q131878/
---

## Q131878: Microsoft Exchange Client Keeps Unsent Mail in Outbox

	Article: Q131878
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you quit Microsoft Exchange with unsent mail in the Outbox, you receive the
	following message:
	
	  There is still unsent mail in the Outbox. You may want to send it the
	  next time you use Microsoft Exchange.
	
	This behavior is not the same as in previous versions of Microsoft Mail products.
	Previous versions offer you the option of sending unsent mail in the Outbox
	before the program closes.
	
	CAUSE
	=====
	
	Microsoft Exchange does not offer an option to send unsent mail when you quit
	the program because of the complexity of simultaneous, multiple service
	providers. This avoids the possible launch of asynchronous dial-up sessions with
	service providers during exit.
	
	RESOLUTION
	==========
	
	You can force mail in the Outbox to be sent before you quit Microsoft Exchange
	by clicking Deliver Mail Now on the Tools menu.
	
	MORE INFORMATION
	================
	
	If you click Save on the File menu, or if you reopen the message and then close
	it, the message becomes inactive. You need to open the message and send it
	again.
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
