---
layout: page
title: "Q107756: PC Win: Err Msg: Mail System Error. Mail Could Not Read..."
permalink: /kb/107/Q107756/
---

## Q107756: PC Win: Err Msg: Mail System Error. Mail Could Not Read...

	Article: Q107756
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.0b of Microsoft Mail for Windows, you may receive an
	unreadable message. The header information (To:, From:, and Subject: fields) is
	correct, but the text indicates a MAIL SYSTEM ERROR. The error message states:
	
	  Mail could not read the entire message from the postoffice. Some parts of the
	  message may be missing. Ask the sender to resend the message.
	
	CAUSE
	=====
	
	If the mail message is unreadable due to some sort of text corruption, it must
	be resent. However, this message does not always mean the message is corrupt.
	
	Some messages that are reported to one user as unreadable are received
	successfully by other users on the postoffice. These messages are not corrupt,
	but have encountered a problem when Mail for Windows downloaded them from the
	postoffice.
	
	Mail first computes a checksum for the message, one component of which is the
	file size. If the file is locked exclusive, the client cannot get the file size,
	so it sets file size to zero (0) and when it compares the computed checksum with
	the file checksum, they do not match. This causes the MAIL SYSTEM ERROR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0b of
	Microsoft Mail for Windows. This problem was corrected in version 3.2 of
	Microsoft Mail for PC Networks.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
