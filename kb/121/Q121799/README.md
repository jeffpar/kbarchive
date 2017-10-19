---
layout: page
title: "Q121799: PC Win: MS Word Attachments Open Multiple Copies of Program"
permalink: /kb/121/Q121799/
---

## Q121799: PC Win: MS Word Attachments Open Multiple Copies of Program

	Article: Q121799
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Mail attachments using Microsoft Word version 6.0 for Windows,
	Word may open multiple instances of itself. This behavior can potentially create
	resource problems in Microsoft Windows.
	
	CAUSE
	=====
	
	Microsoft Word 6.0 for Windows normally allows for multiple documents to be open
	in one instance of the program. For this to occur, the documents must be opened
	from within the active Microsoft Word for Windows session. When documents are
	associated with the executable file (WINWORD.EXE), Word for Windows does not
	determine whether an instance of the program is running; it just opens an
	instance of the program executable file for that particular document.
	Subsequently opening other documents attached to Mail messages will result in
	additional instances of the program being started.
	
	This behavior is the way Microsoft Word for Windows is designed to handle opening
	separate document files directly; it is not caused by the Microsoft Mail for PC
	Networks Windows client.
	
	RESOLUTION
	==========
	
	You can avoid this problem by associating a .DOC file with "Microsoft Word 6.0
	Document" rather than with WINWORD.EXE.
	
	Additional query words: 3.00 3.00b 3.20 3.20a Word multiple documents
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
