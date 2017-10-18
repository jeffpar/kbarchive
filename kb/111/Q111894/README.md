---
layout: page
title: "Q111894: SMTP: Attachment Names Change Case on Outgoing Mail"
permalink: kb/111/Q111894/
---

## Q111894: SMTP: Attachment Names Change Case on Outgoing Mail

	Article: Q111894
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mail Gateway to SMTP may send outgoing mail with attachment names that have
	changed case. This may be a problem for hosts with case-sensitive filenames.
	
	MORE INFORMATION
	================
	
	The attachment names are changed to upper case from Mail for Windows. When you
	compose a message and choose the Attach button, you see a list of files to pick
	from in lower case. Once you pick one and it shows up in the message, the name
	is in upper case. After the SMTP gateway delivers the message, it is still in
	upper case.
	
	WORKAROUND
	==========
	
	You can use the Mail for PC Networks, MS-DOS workstation. If you type the
	filename of the attachment, the case is preserved through the SMTP gateway.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
