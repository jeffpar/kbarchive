---
layout: page
title: "Q158908: XCLN: Options Not Available in Forms Designer"
permalink: /kb/158/Q158908/
---

## Q158908: XCLN: Options Not Available in Forms Designer

	Article: Q158908
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Forms Designer, following options may be
	unavailable:
	
	  Include a link to the selected item
	  Attach a copy of the selected item
	
	These check boxes are grayed out.
	
	CAUSE
	=====
	
	The options are not available because Microsoft Exchange does not currently
	support messages as attachments for custom message types.
	
	RESOLUTION
	==========
	
	To work around this problem, do not use a custom form for the Response form's
	item type. Choose a standard type like IPM.Note or IPM.Post.
	
	1. When designing a form, on the View menu, click Form Properties.
	
	2. On the Events tab, select a standard response form.
	
	
	Additional query words: efd e-form electronic
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
