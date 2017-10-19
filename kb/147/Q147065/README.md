---
layout: page
title: "Q147065: XCLN: Not Open Attachment w/ Incorrect Extension"
permalink: /kb/147/Q147065/
---

## Q147065: XCLN: Not Open Attachment w/ Incorrect Extension

	Article: Q147065
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert a Microsoft Word for Windows version 6.0 into a mail message with
	an incorrect file name extension, such as .Dxx instead of .Doc, the document can
	not be opened even if you rename the original document or the attachment with a
	valid file name extension. When you try to open the attachment, you will get the
	following error message:
	
	  The application associated with this attachment could not be started. Verify
	  the application is installed on your system with a correct directory path.
	
	CAUSE
	=====
	
	When you insert a Microsoft Word document into a mail message, Microsoft
	Exchange immediately makes a temporary copy of that file, with the same file
	name and file name extension, and points to that copy. It is that copy that is
	transmitted with the mail message. Therefore, renaming the original document or
	the attachment will have no effect because a link has been established to the
	invalid copy.
	
	MORE INFORMATION
	================
	
	Attachments created with the Microsoft Exchange Windows 95 client and Microsoft
	Word for Windows version 7.0 can be opened, because Microsoft Word 7.0 looks at
	the file header to determine the type of file, rather than the file name
	extension.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
