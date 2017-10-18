---
layout: page
title: "Q104422: PC Win: Mail Doesn't Recognize Word for Macintosh Attachment"
permalink: kb/104/Q104422/
---

## Q104422: PC Win: Mail Doesn't Recognize Word for Macintosh Attachment

	Article: Q104422
	Product(s): Microsoft Mail For PC Networks
	Version(s): MACINTOSH:4.0,5.0,5.1,6.0,6.0.1; WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	- Microsoft Word for the Macintosh, versions 4.0, 5.0, 5.1, 6.0, 6.0.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0, 3.0b, 3.1, and 3.2 of Microsoft Mail for Windows, you may
	receive the following error when you try to open a Microsoft Word version 4.0,
	5.0, 5.1, 6.0, or 6.01 for Macintosh document.
	
	  STOP!
	  The application for the attached "<filename>.DOC" (or one of its
	  components) could not be found.
	
	CAUSE
	=====
	
	The Word for Macintosh document was saved in Word for Windows format and must
	still be converted. As a result, Mail for Windows is not able to recognize the
	attachment.
	
	This error occurs because of the 128-byte MacBinary file header that contains the
	file creator and file type information. There needs to be an entry in the
	MSMAIL.INI file to handle the MacBinary file headers.
	
	RESOLUTION
	==========
	
	For Word versions 4.0, 5.0, or 5.1 for the Macintosh, add the following line to
	the [Mac File Types] section in the MSMAIL.INI file:
	
	  MSWD:BINA=.DOC
	
	This will allow Microsoft Mail for Windows to be able to recognize and strip the
	MacBinary file header.
	
	For Word version 6.0 for the Macintosh, add the following line to the [Mac File
	Types] section in the MSMAIL.INI file:
	
	  MSWD:W6BN=.DOC
	
	MORE INFORMATION
	================
	
	To launch Word for Windows from the Mail Windows client, you can double- click
	the attachment icon, provided you have associated *.DOC files with Word for
	Windows in the Windows File Manager. To associate a file in File Manager, choose
	Associate from the File menu. Specify the .DOC extension and associate it with
	Word for Windows.
	
	Additional query words: 3.00 3.00b 3.10 3.20 launch begin WinWord
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbWordMacSearch kbMailSearch kbZNotKeyword3 kbWord400Mac kbWord500Mac kbWord510Mac kbWord600Mac kbWord601Mac kbMail300 kbMail320 kbMail300b
	Version           : MACINTOSH:4.0,5.0,5.1,6.0,6.0.1; WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
