---
layout: page
title: "Q168061: WD97: Word Appears to Hang Sending Mail on NT 3.51 with MS Mail"
permalink: kb/168/Q168061/
---

## Q168061: WD97: Word Appears to Hang Sending Mail on NT 3.51 with MS Mail

	Article: Q168061
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop kbusage word97
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to send e-mail from Microsoft Word 97 using Microsoft Mail on
	Windows NT 3.51 by clicking the File menu in Word 97, pointing to Send To, and
	clicking Mail Recipient, Word 97 will appear to stop responding (hang).
	
	CAUSE
	=====
	
	This is a focus problem. The e-mail note is behind the current Word document
	window. You cannot use Word at this time, because the e-mail note is waiting for
	you to type something into the note.
	
	This problem only occurs when using Microsoft Word 97, Microsoft Mail, and
	Windows NT 3.51.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1:
	
	To switch to the e-mail note, press ALT+TAB. When you are finished, Send the
	e-mail message. Word will respond normally.
	
	Method 2:
	
	Switch to Microsoft Mail and compose a new message from there, rather than using
	the Send To Mail Recipient command from within Microsoft Word 97.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage word97 
	Technology        : kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbOSWinNT351 kbZNotKeyword2 kbOSWinNTSearch
	Version           : WINDOWS:97; winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
