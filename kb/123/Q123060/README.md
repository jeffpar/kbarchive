---
layout: page
title: "Q123060: PC Win: How to Send Read-Only Attachments"
permalink: /kb/123/Q123060/
---

## Q123060: PC Win: How to Send Read-Only Attachments

	Article: Q123060
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes you may need to send a document in Microsoft Mail for Windows that
	recipients cannot edit or where control of its contents must be maintained by
	the document's owner. To do this, create a pointer in Windows Object Packager
	that sets up a universal naming convention (UNC) connection to the original
	document, which is stored on a read-only network share:
	
	1. Create a read-only share on a server and save your document in this share.
	
	2. In the Windows Accessories group, open Object Packager. From the Edit menu,
	  choose Command Line.
	
	3. In the Command Line box, enter a UNC path and filename (in the form
	  \\<server_name>\<share_name>) of the document you want to send.
	
	4. Choose the Insert Icon button to create an icon for your document.
	
	5. To copy the package to the clipboard, choose Copy Package from the Edit menu.
	
	6. Start Microsoft Mail for Windows and create a new mail message. Choose Paste
	  from the Edit menu to paste your pointer into Mail.
	
	When you send your message, the recipient will be able to view the document but
	not edit it, thereby protecting its contents.
	
	Additional query words: 3.00 3.00b 3.20 3.20a read only document
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
