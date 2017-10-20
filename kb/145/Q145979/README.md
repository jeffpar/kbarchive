---
layout: page
title: "Q145979: XCLN: Unable to Open Attachments Without File Extensions"
permalink: /kb/145/Q145979/
---

## Q145979: XCLN: Unable to Open Attachments Without File Extensions

{% raw %}

	Article: Q145979
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a message that has file with no extension (.DOC, .TXT,
	.XLS,...) attached to it, even if the host application is installed in the
	system, the following error is displayed:
	
	  The application associated with this attachment could not be started. Verify
	  the application is installed on your system with a correct directory path.
	  C:\WINDOWS\TEMP\<filename>.
	
	NOTE: On all client platforms, the attachment can be dragged into the Inbox and
	viewed regardless of the presence of the extension. On the Windows 95 Microsoft
	Exchange client, the file can also be opened in the Explorer window or the
	desktop.
	
	CAUSE
	=====
	
	When a document is dragged to the Inbox and then opened, the OLE specification
	calls for the application, such as Microsoft Exchange, to look at an internal
	pointer within the file itself to determine which OLE server application needs
	to be activated. However, when a file is placed in a message as an attachment,
	there is no way to determine the internal OLE identifier. A file extension such
	as .DOC would be required to have Microsoft Word open the attached document.
	
	RESOLUTION
	==========
	
	All documents that are made attachments in message must be given a file
	extension. This is a default setting in most Microsoft Windows based
	applications.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
