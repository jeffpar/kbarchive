---
layout: page
title: "Q235347: WD97: Styles and AutoText Not Copied to New Template"
permalink: /kb/235/Q235347/
---

## Q235347: WD97: Styles and AutoText Not Copied to New Template

	Article: Q235347
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new template based on your Normal.dot template, the following
	attributes are not copied to the new template:
	
	- All user-defined styles
	
	- Changes made to default (built-in) styles
	
	- Text that you typed in Normal.dot
	
	- Built-in AutoText entries (Attention Line, Closing, Header/Footer, Mailing
	  Instructions, Reference Line, Salutation, and Subject Line)
	
	NOTE: This problem does not occur for any other template you may use to base your
	new template on.
	
	CAUSE
	=====
	
	Because items stored in the Normal template are available from any Word
	document, these items are not copied to the new template.
	
	WORKAROUND
	==========
	
	To include all style definitions when creating a new template based on Normal,
	use any of the following methods.
	
	Method 1: Create a new document based on Normal and save it as a template.
	--------------------------------------------------------------------------
	
	1. On the File menu, click New.
	
	2. On the General tab, click Blank Document. Under Create New, click Document,
	  and then click OK.
	
	3. On the File menu, click Save As.
	
	4. In the Save As dialog box, change the Save as type to Document Template
	  (*.dot), and then click OK.
	
	  NOTE: You may want to change the file name before saving your new template.
	
	Method 2: Use the Organizer.
	----------------------------
	
	Copy the styles you want from the Normal template into your new template using
	the Organizer. To access the Organizer, click Style on the Format menu.
	
	REFERENCES
	==========
	
	For more information about the Organizer, click the Office Assistant, type
	Organizer, click Search, click Use settings from another document or template,
	and then click Copy styles, AutoText entries, toolbars, or macros to a
	template.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: conversion convert
	
	======================================================================
	Keywords          : kbusage kbdta kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
