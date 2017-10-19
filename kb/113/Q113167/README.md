---
layout: page
title: "Q113167: PC Win: How Open Attachments Are Handled"
permalink: /kb/113/Q113167/
---

## Q113167: PC Win: How Open Attachments Are Handled

	Article: Q113167
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, the directory
	specified by the TEMP environment variable is used when an attachment is opened
	from within a mail message.
	
	For example, if you open a Microsoft Word document, Mail first writes the file to
	C:\<temp>\<file>.DOC, where <temp> is the directory specified
	by the TEMP environment variable and <file> is the name of the file. Next,
	Mail reads the Windows registration database and calls the application with the
	following command line:
	
	  winword.exe c:\<temp>\<file>.doc
	
	When you close the message that contains the attachment, Mail tries to delete
	this temporary file. If the file is still open in the associated application,
	Mail displays the following dialog box:
	
	  The attached file <FILE>.DOC is currently open. Further changes to that
	  file will not be reflected in this message.
	
	If you choose OK, the message closes and the attachment remains in the
	C:\<temp> directory until you delete it.
	
	If you modify the attachment and save the changes, the following dialog box
	appears when the message is closed:
	
	  Do you want to save changes to <Message Subject> in <folder
	  name>?
	
	If you choose Yes, the changes will be saved in the message that contains the
	attachment, and the file in the temporary directory will be deleted. If you
	choose No, the message will be closed unchanged and the temporary file will be
	deleted, therefore discarding any modifications you made to the file.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
