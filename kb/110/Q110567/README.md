---
layout: page
title: "Q110567: At Work PC Fax ErrMsg: Attachment Type Was Not Supported"
permalink: /kb/110/Q110567/
---

## Q110567: At Work PC Fax ErrMsg: Attachment Type Was Not Supported

	Article: Q110567
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send files as attachments using Microsoft At Work PC Fax, you receive
	the following error message:
	
	  Error: Attachment type was not supported
	
	CAUSE
	=====
	
	This problem can occur when you send a fax with an unprintable attachment using
	the Facsimile Format option, or when you send an attachment that has a file
	extension that has no association to a program.
	
	RESOLUTION
	==========
	
	Because you cannot send unprintable files using a Group3 fax, you must change
	your message format from Facsimile Format to Email Format. For more information,
	see the Setting Fax Options in the Microsoft At Work PC Fax chapter in your
	Microsoft Workgroup Add-On for Windows "User's Guide."
	
	NOTE: Facsimiles sent with the Email Format option can only be sent to another
	Microsoft At Work PC Fax using a Class1 modem.
	
	You may still receive the error message noted above with a printable document.
	This problem occurs when there is no associated object-linking- and-embedding
	(OLE) server capable of printing your document.
	
	To work around this problem, print the document as follows:
	
	1. From the File menu of your application, choose Print.
	
	2. Choose Setup.
	
	3. Choose Microsoft At Work PC Fax on FAX and then choose OK.
	
	NOTE: These steps may vary slightly, depending on the application from which you
	are printing.
	
	MORE INFORMATION
	================
	
	To determine if no associated OLE server capable of printing your document
	exists, try to drag the document file from File Manager to Print Manager. If
	this fails, no associated OLE server capable of printing your document is
	available.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
