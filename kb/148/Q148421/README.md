---
layout: page
title: "Q148421: XCLN: Messages Marked as Read when Moved from Client"
permalink: /kb/148/Q148421/
---

## Q148421: XCLN: Messages Marked as Read when Moved from Client

{% raw %}

	Article: Q148421
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag an unread message, note, or document from the Windows 95 Exchange
	client onto either the Microsoft Windows 95 desktop or a folder not in the
	Windows 95 Exchange client, the original message becomes read.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	This is necessary in order to properly handle the read receipts. Once the message
	leaves the Windows 95 Exchange client (for example, either moved or copied from
	the Windows 95 Exchange client to another location), the receipt tracking is
	lost.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
