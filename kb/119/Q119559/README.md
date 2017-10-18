---
layout: page
title: "Q119559: PC Win: Check Names Cannot Resolve Mailbox Names"
permalink: kb/119/Q119559/
---

## Q119559: PC Win: Check Names Cannot Resolve Mailbox Names

	Article: Q119559
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Check Names is one of the options available in the Microsoft Mail for Windows
	Compose screen. This option allows you to check addresses against the address
	lists by resolving the friendly names in the To and Cc lines. The Check Names
	option cannot resolve mailbox names typed in the To or Cc field unless the
	mailbox is part of the friendly name.
	
	If the mailbox name cannot be made part of the friendly name, you can use one-off
	addressing by entering a [MS:network/postoffice/mailbox] address in the To or Cc
	field. Please note that "MS" should be used to prefix the 10/10/10 address even
	though it is a PCM address.
	
	If you are using one-off addressing in MAPI, set the Address field in the MAPI
	Recipient structure to MS:network/postoffice/mailbox or set the Name field to
	[MS:network/postoffice/mailbox].
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
