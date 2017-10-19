---
layout: page
title: "Q179105: WD97: Word Attachment Not Readable Upon Receipt Via E-Mail"
permalink: /kb/179/Q179105/
---

## Q179105: WD97: Word Attachment Not Readable Upon Receipt Via E-Mail

	Article: Q179105
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 18-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a Microsoft Word document as an attachment through e-mail, upon
	receipt, it contains large amounts of random, garbled text.
	
	CAUSE
	=====
	
	This problem may occur when there is a mismatch in encoding types between the
	sending e-mail client and the receiving e-mail client, such as Microsoft
	Outlook.
	
	WORKAROUND
	==========
	
	For information about how to recover the attached file from the encoded text,
	and for additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q171436 OL97: E-mail Contains Text Instead of Attachment
	
	
	Any further questions about encoding schemes need to be sent to your Internet
	provider or e-mail software manufacturer.
	
	MORE INFORMATION
	================
	
	The Internet was not designed to carry binary files. It is only able to transfer
	messages made up of ASCII text characters. To resolve this problem and to allow
	various file types to be sent over the Internet, and to be exchanged between
	diverse operating systems, encoding methods have been developed.
	
	The two major encoding methods are Multipurpose Internet Mail Extensions (MIME)
	and Uuencode. Files encoded with either of these methods generally have
	information in the text header to identify the type.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q179323 Encoding and Decoding: Overview and List of Third-Party Vendors
	
	Additional query words: word8 word97
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
