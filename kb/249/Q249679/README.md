---
layout: page
title: "Q249679: XCLN: Word Document Becomes Mail Message in Outlook 2000"
permalink: /kb/249/Q249679/
---

## Q249679: XCLN: Word Document Becomes Mail Message in Outlook 2000

	Article: Q249679
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook 2000 is open and you send a Microsoft Word document to a mail recipient
	using the Send To and Mail Recipient options on the Word File menu. If you
	cancel the process and decide to save the document, that document becomes a mail
	message.
	
	CAUSE
	=====
	
	This occurs as the file is saved, the message header is added to it.
	
	RESOLUTION
	==========
	
	To avoid the behavior described in the "Symptoms" section, when you are prompted
	to save the document, choose not to. However, if you have already chosen to save
	the file, when you open it again, it looks like a mail message. You can return
	the mail message to a Word document format by using either of the two following
	methods:
	
	- On the File menu, click Save As, and save the file in Rich Text Format. Then
	  reopen the file, and save it as a Word document.
	
	-or-
	
	- On the File menu, click Send To, click Mail Recipient, click File, click
	  Close, and then click Yes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
