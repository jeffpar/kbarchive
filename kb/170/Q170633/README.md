---
layout: page
title: "Q170633: XWEB: Requirements For Internet Explorer File Attachment Support"
permalink: kb/170/Q170633/
---

## Q170633: XWEB: Requirements For Internet Explorer File Attachment Support

	Article: Q170633
	Product(s): Microsoft Exchange
	Version(s): Windows:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook Web Access (OWA) client in Microsoft Internet
	Explorer or Netscape Navigator, you may receive the following error message
	while attempting to add an attachment to a new mail message:
	
	  Internet Explorer cannot open the Internet Site
	  HTTP://<Exchange Server>/Exchange/exupload.dll.
	
	  The server returned an invalid or unrecognized response.
	
	CAUSE
	=====
	
	The following requirements must be met in order for Microsoft Internet Explorer
	3.0x for Windows to allow the ability to add file attachments to mail messages:
	
	1. Internet Explorer for Windows, version 3.02 or higher.
	
	2. Internet Explorer 3.02 File Upload Add-on for Windows 95 and Windows NT
	  (RFC1867.EXE) installed on the client computer.
	
	NOTE: This add-on only needs to be applied to the Windows versions of the
	browser.
	
	For Internet Explorer for Macintosh, you must be running version 3.01a or higher.
	For Netscape Navigator, you must be running 3.02 or higher.
	
	MORE INFORMATION
	================
	
	For more information about the File Upload Add-on for Internet Explorer, please
	read the Readme.txt file located on the Microsoft Exchange Server 5.0 SP1 CD or
	in the following Microsoft Knowledge Base article:
	
	  Q154481 Readme.txt: Microsoft Exchange version 5.0 Service Pack
	
	Additional query words: Attachments IE Fail rfc1867.exe
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : Windows:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
