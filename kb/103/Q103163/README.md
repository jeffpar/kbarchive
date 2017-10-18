---
layout: page
title: "Q103163: PC Win: Microsoft Word Send Option Sends Icon or Text"
permalink: kb/103/Q103163/
---

## Q103163: PC Win: Microsoft Word Send Option Sends Icon or Text

	Article: Q103163
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Word version 2.0 or 2.0a for Windows, in conjunction with
	version 3.0 or 3.2 of Microsoft Mail for Windows, the Word Send option (from the
	File menu) will send the document as an attachment in icon form. If you use Word
	2.0b or 2.0c for Windows, the Send option will send the document as unformatted
	text in the body of the mail message.
	
	Word versions 2.0 and 2.0a use a macro to send mail messages as an attachment in
	icon form. Word versions 2.0b and later are MAPI aware applications and, for
	purposes of sending attachments, make calls to the Mail application programming
	interface (API). The Word document is not sent as an icon; it is converted to
	ASCII text and is sent as unformatted text in the body of the mail message. This
	is the default setting for Word 2.0b and later.
	
	To change the default setting and enable you to send mail messages as an
	attachment in icon form, do the following:
	
	1. From the Microsoft Word Tools menu, choose Options.
	
	2. Select General.
	
	3. Under Settings, Select the Send Mail As Attachment check box.
	
	Making this selection will force Word to send the document to Mail as an
	attachment in icon form, thus retaining the document's original formatting.
	
	Additional query words: 3.00 3.20 iconic iconized
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
