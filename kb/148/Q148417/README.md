---
layout: page
title: "Q148417: FP: How to Set Up a Form to Post Results by E-mail"
permalink: kb/148/Q148417/
---

## Q148417: FP: How to Set Up a Form to Post Results by E-mail

	Article: Q148417
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0; WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q196461.
	
	For a Microsoft FrontPage 98 version of this article, see Q194088.
	
	SUMMARY
	=======
	
	This article describes how to set up a FrontPage form to submit form results as
	an e-mail attachment rather than saving the results in a file. Note that some
	browsers may not support the mailto Uniform Resource Locator (URL).
	
	NOTES:
	
	- Microsoft Internet Explorer, versions 2.0, 3.0, and 4.0 do not support the
	  inclusion of form output to a mailto URL.
	- Posting results by e-mail works only if the client has a Post Office Protocol
	  3 (POP3) compliant e-mail system.
	
	MORE INFORMATION
	================
	
	To set up a form to submit results as an e-mail attachment, follow these steps:
	
	1. In FrontPage Editor, create a form.
	
	2. Right-click any object in the form, and then click Properties on the menu
	  that appears.
	
	  The form will be outlined by a dashed box.
	
	3. Click Form.
	
	4. From the Form Handler list, click Custom CGI Script and then click Settings.
	
	5. In the Action box, type the following, replacing everything after "mailto:"
	  with the actual e-mail address you want to use:
	
	     mailto:example@microsoft.com
	
	6. In the Method box, type or select Post, and then click OK.
	
	7. Click OK twice.
	
	When your form is submitted, your e-mail program starts and opens a New Message
	window. The form will be sent as a text attachment if the sender's e-mail system
	and Web browser support this type of action. If the sender's Web browser does
	not support the mailto URL, the sender can insert the text and manually send the
	message.
	
	Additional query words: 1.00a front page vermeer technologies inc. post get electronic mail e-mail
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :; MACINTOSH:1.0; WINDOWS:1.0,1.1
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
