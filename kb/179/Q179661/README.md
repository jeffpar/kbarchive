---
layout: page
title: "Q179661: WD97: File Sharing Options Are Ignored"
permalink: kb/179/Q179661/
---

## Q179661: WD97: File Sharing Options Are Ignored

	Article: Q179661
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a document that was saved in an earlier Microsoft Word format
	(such as Word 6.0/95, Word 2.x for Windows, or Word 6.x for MS-DOS), you are
	neither prompted to enter a password nor to open the document as read-only, even
	though the original file used these File Sharing Options.
	
	NOTE: All of the Word 6.0/95 converters produce the same results.
	
	MORE INFORMATION
	================
	
	When you initially save a Word 97 document in the format of an earlier version
	of Word, and select any File Sharing Options, you receive the following
	message:
	
	  This document is password protected. Saving the document in a format other
	  than the current version of Word will result in the loss of this protection.
	  Do you want to continue?
	
	Clicking OK saves the document in the format of the earlier version of Word, but
	the password protection is lost. Clicking Cancel cancels the save operation.
	
	To find Microsoft Word File Sharing Options, click Save As on the File menu and
	then click Options.
	
	The following File Sharing Options are available:
	
	- Password To Open
	
	- Password To Modify
	
	- Read-Only Recommended
	
	Password To Open
	----------------
	
	If you type a Password To Open, Word will only open the document as read- only
	when someone types the correct password. If you open a document as read-only and
	change it, you must save it again with a different name. If you forget or lose
	the password, you cannot open your document.
	
	A password is case-sensitive and can contain up to 15 characters, including
	letters, numerals, and symbols.
	
	Password To Modify
	------------------
	
	If you type a Password To Modify, Word will only open the document for editing
	when a user types the correct password. If you forget or lose the password, you
	can only open your document as read-only.
	
	Read-Only Recommended
	---------------------
	
	When Word opens the file, it displays a recommendation that others open the
	document as read-only. If you open the document as read-only and change it, you
	must save it again with a different name. You can select the Read-Only
	Recommended check box without setting any passwords.
	
	NOTE: When you convert a Microsoft Word 97 document to Word 6.x or Word 7.0
	format, all document protection is lost. For additional information on
	conversion limitations from Word 97 to Word 6.x or Word 7.0, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q157088 WD97: Limitations Converting Documents from Word 97 to 6.x/95
	
	REFERENCES
	==========
	
	For additional information on the Word 6.0/95 File Format and Password
	Protection, please see the following articles in the Microsoft Knowledge Base:
	
	  Q162602 WD97: Questions About Saving in the Word 6.0/95 File Format
	
	  Q168098 WD97: Password Protection Lost When Saving as Earlier Version
	
	  Q110109 WD: Password Protection Lost When Saving as Previous Versions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
