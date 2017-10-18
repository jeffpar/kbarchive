---
layout: page
title: "Q156718: XCLN: Attachment Unusable in Message but Opens in Folder"
permalink: kb/156/Q156718/
---

## Q156718: XCLN: Attachment Unusable in Message but Opens in Folder

	Article: Q156718
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message with an attachment is received by the Microsoft Exchange client
	and the attachments have generic icons, trying to open them results in
	problems.
	
	With the Windows and Macintosh clients, an error message may appear:
	
	  No associated application.
	
	With the Macintosh client only, a compose note opens.
	
	However, if you drag the same attachment to the Inbox as a FreeDoc, the
	attachment picks up the correctly associated icon (that is, Word) and opens
	fine. If you drag the FreeDoc to a message window, it loses the correct icon
	again and can no longer be opened.
	
	WORKAROUND
	==========
	
	This typically occurs with long filename attachments. You should be able to work
	around the problem by sending the attachment with the correct extension.
	
	STATUS
	======
	
	This functionality is by design.
	
	MORE INFORMATION
	================
	
	FreeDocs determine the filetype by:
	
	- Checking to see if the file is an IStorage (more commonly known as 'OLE
	  DocFile'). If it is an IStorage, the CLSID embedded in it is pulled out.
	  Using the CLSID, the Microsoft Exchange client looks in the registry to see
	  whether it can determine an icon for this file. In more cases than not, there
	  is some clue in the registry about where an icon can be pulled out.
	
	- If the file is not an IStorage, the Microsoft Exchange client makes a call,
	  passing the file name, to get the file information and to request an icon for
	  it. Typically, this function just works off the extension.
	
	The file attachment code uses only the second of these methods.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
