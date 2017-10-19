---
layout: page
title: "Q161491: XCLN: Mac Screen Shot Attachment Won't Open on Windows Client"
permalink: /kb/161/Q161491/
---

## Q161491: XCLN: Mac Screen Shot Attachment Won't Open on Windows Client

	Article: Q161491
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a screen shot from the Exchange Macintosh client to the Exchange
	Windows client, the Windows client cannot open the screen shot.
	
	If you send the Macintosh screen shot as an attachment in a message, and the user
	of the Windows client tries to open the attachment, the user receives the
	following error message:
	
	  Unable to open attachment.
	  Incomplete or missing association for file.
	
	If you cut and paste the Macintosh screen shot into the message itself and send
	it using a Macintosh client, when the Windows client opens the message, the
	following error message will appear in the message body:
	
	  Error: unloaded OLE object or mail attachment.
	
	CAUSE
	=====
	
	The Windows operating system does not recognize the Macintosh screen print.
	
	WORKAROUND
	==========
	
	NOTE: The following two workaround procedures work for attachments only.
	
	- From the Macintosh client, save the file as a Microsoft PowerPoint file or
	  another file type that is recognized by the Windows client.
	
	  For example, do the following:
	
	  1. Start the Exchange Macintosh client.
	
	  2. Create a screen snapshot (Apple key+SHIFT+3). This places a file called
	     Picture(x) in the root of the startup disk.
	
	  3. Open Picture(x). On the Edit menu, click Select All, and then click Copy.
	
	  4. Open PowerPoint, and choose a New Blank Presentation.
	
	  5. On the Edit menu, click Paste.
	
	  6. On the File menu, click Save As. In the Save As Type box, click either
	     Presentation or PowerPoint 3.0 file.
	
	  7. When you send the attachment, use the PowerPoint file.
	
	  -or-
	
	- Open the Exchange Windows client. Save the attachment as a Macintosh picture
	  file.
	
	  For example:
	
	  1. Start the Exchange Windows client.
	
	  2. Highlight the message.
	
	  3. On the File menu, click Save As, and then click Save These Attachments
	     Only.
	
	  4. Rename the file to <file name>.pct.
	
	  5. Open the attachment of the message with the appropriate application, such
	     as Picture It.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange versions 4.0 and 5.0
	for Macintosh and for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
