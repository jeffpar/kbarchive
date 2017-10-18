---
layout: page
title: "Q131726: PC Win: Err Msg: ...Too Many Entries Selected to Complete..."
permalink: kb/131/Q131726/
---

## Q131726: PC Win: Err Msg: ...Too Many Entries Selected to Complete...

	Article: Q131726
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for Windows, you may not be able to retrieve a message that
	was sent from Microsoft Mail for AppleTalk Networks that has a large number of
	individual recipients on the To: line. If this occurs, you may get the following
	error:
	
	  There are too many entries selected to complete the operation.
	  Please select fewer entries.
	
	The mail spooler will fail to pull this message into the mail message file (MMF).
	The affected users will get the disconnected network icon, and the Windows
	client will stop receiving mail.
	
	NOTE: You will be able to read the same message in Microsoft Mail for PC
	Networks, MS-DOS workstation.
	
	CAUSE
	=====
	
	The above error will occur when a large number of recipients are selected to be
	included on the To: line when you compose a message. However, the Mail for
	AppleTalk Networks client does not have this limitation.
	
	When the message arrives, the Windows client treats it as if it is a corrupt
	message.
	
	RESOLUTION
	==========
	
	You will have to sign into Mail using the MS-DOS client, and delete the "stuck"
	message.
	
	Users should use groups when sending mail to large number of recipients. This
	will improve mail efficiency, as well.
	
	
	Additional query words: 3.20 3.20a header size macmail pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
