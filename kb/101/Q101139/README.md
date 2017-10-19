---
layout: page
title: "Q101139: PC Win: Err Msg: MAIL SYSTEM ERROR"
permalink: /kb/101/Q101139/
---

## Q101139: PC Win: Err Msg: MAIL SYSTEM ERROR

	Article: Q101139
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Mail for Windows cannot read a mail message from the postoffice,
	the following message is displayed as the text of the mail message:
	
	  ==== MAIL SYSTEM ERROR =====
	  Mail could not read the entire message from the
	  postoffice. Some parts of the message may be missing.
	  Ask the sender to resend the message.
	
	CAUSE
	=====
	
	This error message is displayed when the text of the mail message (that is, the
	.MAI file) is either corrupted or missing. If the problem is an isolated case,
	it was most likely caused by a network problem when the file was written.
	
	RESOLUTION
	==========
	
	If the problem occurs repeatedly, check the following:
	
	- Do all of the .MAI subdirectories exist (MA0-MAF)?
	
	- Does the user have persistent network problems?
	
	- Are old or custom gateway processes running on this postoffice?
	
	- Do all users have sufficient rights for all mail subdirectories?
	
	Additional query words: 3.00 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
