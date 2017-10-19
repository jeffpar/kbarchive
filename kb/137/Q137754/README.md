---
layout: page
title: "Q137754: Attachment Types Supported in Microsoft Exchange"
permalink: /kb/137/Q137754/
---

## Q137754: Attachment Types Supported in Microsoft Exchange

	Article: Q137754
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following attachment types are supported by Microsoft Exchange:
	
	- Multipurpose Internet Mail Exchange (MIME) (also known as Multimedia Internet
	  Mail Exchange)
	
	  NOTE: The Microsoft Network (MSN) does not support MIME.
	
	- UUENCODE
	
	MORE INFORMATION
	================
	
	To select the attachment type used for sending attachments in Internet mail,
	follow these steps:
	
	1. In Control Panel, double-click the Mail And Fax icon.
	
	2. Open the Internet Mail profile, click Internet Mail, and then click
	  Properties.
	
	3. On the General tab, click Message Format. To use MIME format, click the Use
	  MIME When Sending Messages check box to select it. To use UUENCODE format,
	  clear the Use MIME When Sending Messages check box.
	
	4. Click OK.
	
	MIME Details:
	
	The MIME format has certain defined file types. To see the available file types
	for MIME format, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. On the File Types tab, registered file types are listed in the Registered
	  File Types box. Click each file type and check the File Type Details box to
	  see if Content Type MIME is listed. If it is, the file type is available for
	  MIME file attachment.
	
	NOTE: Microsoft Exchange includes a native Internet mail connector that supports
	both the Request for Comment (RFC) 822 and RFC 1521 (MIME) specifications.
	
	UUENCODE Details:
	
	UUENCODE coding and decoding is taken care of automatically if both the sending
	and receiving mail programs support UUENCODE. If not, you must run a UUENCODE or
	UUDECODE tool to convert a non-ASCII text message. Microsoft does not supply
	UUENCODE or UUDECODE tools.
	
	For information about how to obtain an RFC document, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
