---
layout: page
title: "Q129766: Err Msg: Cannot Send an Embedded Message in Editable Format"
permalink: /kb/129/Q129766/
---

## Q129766: Err Msg: Cannot Send an Embedded Message in Editable Format

	Article: Q129766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax with Microsoft Fax, you receive the following
	non-delivery report (NDR):
	
	  Cannot send an embedded message in editable format
	
	CAUSE
	=====
	
	Although you can fax an attachment with Microsoft Fax, you cannot fax an
	embedded mail message. If you insert a mail message and then try to fax it, you
	receive the error message stated above.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Rather than embedding the mail message, forward it to the fax address.
	
	- Fax the mail message as text. To do so, follow these steps:
	  1. On the Insert menu, click Message.
	
	  2. In the Insert As field, click Text Only.
	
	  3. Click the message you want to send and then click OK.
	
	  4. Fax the message.
	
	  NOTE: When you insert a mail message as text, any attachments in the original
	  message are not included.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
