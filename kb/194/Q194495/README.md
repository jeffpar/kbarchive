---
layout: page
title: "Q194495: WD97: Cannot Convert WordPerfect Password-Protected File"
permalink: /kb/194/Q194495/
---

## Q194495: WD97: Cannot Convert WordPerfect Password-Protected File

	Article: Q194495
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Word will not convert a password-protected WordPerfect file. When you
	try to open a password-protected WordPerfect file in Word, you will receive one
	of the following error messages:
	
	- File cannot be opened because of password protection.
	
	- Cannot Open File.
	
	- Converter not installed.
	
	WORKAROUND
	==========
	
	To convert a password-protected WordPerfect document in Word, you must first
	remove the password from the document in WordPerfect, and then resave the
	document in WordPerfect without a password.
	
	In WordPerfect 5.1 for MS-DOS and Windows, open the file, press CTRL+F5 (Text
	In/Out), press 2 (Password), then press 2 again (Remove). After removing the
	password, save the file and quit WordPerfect.
	
	In WordPerfect 5.2 for Windows, click Password on the File menu, click the Remove
	button, and then save the file so the change can take effect.
	
	In WordPerfect 6.x for Windows, click Save As on the File menu. Clear the
	Password Protect check box, and then resave the document without a password.
	
	
	MORE INFORMATION
	================
	
	WordPerfect 5.1 for MS-DOS and Windows contains an option to lock a document
	with a password. To lock a WordPerfect document, select Text In/Out (CTRL+F5),
	Password, Add/Change, and enter your password twice.
	
	In WordPerfect 5.2 for Windows, click Password on the File menu, type a password,
	click the Set button, retype the password, and click the Set button again.
	
	In WordPerfect 6.x for Windows, click Save As on the File menu. Click to select
	the Password Protect check box and save the document. You will be prompted to
	enter and verify the password.
	
	Microsoft Word cannot parse the unpublished password encryption employed by
	WordPerfect. This WordPerfect feature is by design.
	
	Additional query words: textconv
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
