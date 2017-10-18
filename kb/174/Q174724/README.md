---
layout: page
title: "Q174724: XWEB: Language of the Template and Message Content Don't Match"
permalink: kb/174/Q174724/
---

## Q174724: XWEB: Language of the Template and Message Content Don't Match

	Article: Q174724
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a Microsoft Exchange Server message using Microsoft Outlook Web
	Access, the message content may appear corrupt, even though other clients who
	received the message can view it without a problem.
	
	CAUSE
	=====
	
	Confirm that the language of the template and the language of the message
	content match. If the message content requires a different code page and font
	from the template, the message content will appear corrupt, even though it is
	not.
	
	RESOLUTION
	==========
	
	If this occurs, you must manually change your browser's code page to view the
	message content correctly. Follow these steps for Microsoft Internet Explorer
	3.0:
	
	1. Click the Code Page shortcut menu in the right corner of the status bar.
	
	2. Select the correct Code Page.
	
	For Netscape Navigator 3.0, follow these steps:
	
	1. From the Options menu, choose Document.
	
	2. Select the correct Code Page.
	
	Additional query words: browser content template
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
