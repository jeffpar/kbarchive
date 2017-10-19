---
layout: page
title: "Q195127: WD97: Converter Not Automatically Installed in Word"
permalink: /kb/195/Q195127/
---

## Q195127: WD97: Converter Not Automatically Installed in Word

	Article: Q195127
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Word 97, if you have already opened a file during the current session, you
	cannot auto-install a file converter.
	
	CAUSE
	=====
	
	Word 97 only searches for and auto-installs converters the first time you open a
	file in a Word session.
	
	WORKAROUND
	==========
	
	Auto-Installing the Converter
	-----------------------------
	
	To auto-install the converter, follow these steps:
	
	1. Copy the converter to the appropriate directory or folder.
	
	  Place the converter in the same directory as the Winword.exe file or the
	  \Program Files\Common Files\Microsoft Shared\TextConv directory.
	
	2. Save your work, quit Word, and restart Word.
	
	3. Open any document that Word cannot recognize (for example, a document of the
	  format supported by the converter, a program file, or a clipart graphics
	  file).
	
	Word will find and install the converter, and it will henceforth appear as a
	choice in the Open and Save As dialog boxes.
	
	REFERENCES
	==========
	
	For more information about supported file formats, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	  Q96119 History of WinWord File Converters Categorized by Word Release
	
	Additional query words: conversion converted converts transfer transfers translation translate problemautoinstall auto installation setup automatic install
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
