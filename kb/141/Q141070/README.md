---
layout: page
title: "Q141070: PC Win:Attachment Saved as 0 Byte File if First 126 Bytes Null"
permalink: kb/141/Q141070/
---

## Q141070: PC Win:Attachment Saved as 0 Byte File if First 126 Bytes Null

	Article: Q141070
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send an attachment where the first 126 bytes (or more) are null, and the
	recipient saves the file to his or her hard disk, it will be saved as a 0 byte
	file.
	
	Additionally if you try to run the attachment by double-clicking it, you will
	receive the following error message:
	
	  The application for the attached file 'filename' (or one of its components)
	  could not be found.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.x of Microsoft Mail
	for Windows. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	
	Additional query words: 3.00 3.20 3.50 zero bytes mssfs.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail350 kbMail320
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
