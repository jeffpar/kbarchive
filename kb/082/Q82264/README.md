---
layout: page
title: "Q82264: PC Win: Err Msg: The Attached File Is Currently Open..."
permalink: kb/082/Q82264/
---

## Q82264: PC Win: Err Msg: The Attached File Is Currently Open...

	Article: Q82264
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail for Windows, the following error message may
	appear when you work with attachments:
	
	  The attached file "XXXXXXXX.XXX" is currently open. Further changes to that
	  file will not be reflected in this message.
	
	This message is displayed when the attachment is still open in its native
	application when the message containing the attachment is closed.
	
	CAUSE
	=====
	
	Mail for Windows creates a copy of the attached file before it launches the
	appropriate application. Mail then tells the application to run using this newly
	created duplicate file. When it is finished, Mail tries to clean up these
	duplicate files. Occasionally (as depicted in the following "Steps to Reproduce
	Problem" section), Mail for Windows is unsuccessful and the duplicate file is
	left in the directory specified by the TEMP environment variable.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Microsoft Mail for Windows.
	
	2. Compose a Note.
	
	3. Attach a file (such as an Excel Worksheet).
	
	4. Double-click the attachment or select the attachment and choose Open from the
	  File menu.
	
	5. Minimize the application containing the attachment.
	
	6. Close the message containing the launched attachment.
	
	7. A warning appears, indicating that the attachment is currently open. Choose
	  the OK button.
	
	8. A dialog is displayed asking, "Do you want to save message to Inbox?" Select
	  either option, Yes or No.
	
	9. Mail for Windows now attempts to delete the file in the temporary directory.
	  The native application, however, still has the attachment open, so the clean
	  up is unsuccessful.
	
	10. After closing the application, the file will still remain in the temporary
	  directory.
	
	Additional query words: 3.00 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
