---
layout: page
title: "Q183665: XADM: Unable to Delete Attachment From Message"
permalink: kb/183/Q183665/
---

## Q183665: XADM: Unable to Delete Attachment From Message

	Article: Q183665
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a message contains multiple attachments and a user deletes one of the
	attachments and then tries to save the message, the user will receive the
	following error:
	
	  An error occurred which prevents this message from remaining open,
	  and changes cannot be saved. Do you want to copy the text in this
	  message to the clipboard?
	
	The same error may be encountered by a MAPI program if the application does the
	following:
	
	1. Opens the message.
	
	2. Gets the attachment table.
	
	3. Queries the attachment table.
	
	4. Deletes an attachment.
	
	5. Saves changes.
	
	6. Queries the attachment table.
	
	Result: The last query will return MAPI_E_NOT_FOUND.
	
	This problem only occurs with Exchange Server 5.0 SP2. It is not present in
	Exchange Server 5.0 SP1 or Exchange Server 5.5.
	
	CAUSE
	=====
	
	The deleted attachment is not correctly removed from the attachment table.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0
	SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
