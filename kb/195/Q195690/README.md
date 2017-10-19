---
layout: page
title: "Q195690: WD97: No Response When Selecting Form Letters for Mail Merge"
permalink: /kb/195/Q195690/
---

## Q195690: WD97: No Response When Selecting Form Letters for Mail Merge

	Article: Q195690
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you click Mail Merge on the Tools menu and then click Create, nothing
	happens when you click Form Letters.
	
	CAUSE
	=====
	
	This problem may occur if one of the following is installed:
	
	- TextBridge Pro 98
	
	  -or-
	
	- Via Voice (manufactured by IBM)
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	TextBridge Pro 98
	-----------------
	
	If you are using TextBridge Pro 98, do either of the following:
	
	- Uninstall TextBridge Pro 98.
	
	  -or-
	
	- End the task for Instant Access.
	
	  WARNING: The following method may cause unpredictable behavior. Use extreme
	  caution when you end a task in Microsoft Windows. Make sure no visible
	  programs are currently running and save all unsaved data before performing
	  this procedure.
	
	  To end the task for Instant Access, follow these steps:
	
	  1. Press CTRL+ALT+DELETE to display the Microsoft Windows 95 Close Program
	     dialog box.
	
	  2. In the list of tasks, click to select Instant Access.
	
	  3. Click End Task.
	
	You can also remove Microsoft Word from the Instant Access control panel so that
	it does not affect Word.
	
	Via Voice
	---------
	
	Uninstall Via Voice.
	
	MORE INFORMATION
	================
	
	Instant Access is part of TextBridge Pro 98. Its application file,
	Instantaccess.exe, is a control panel that allows you to select those
	applications within which you want to run TextBridge.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164686 WD97: Instant Access OCR, Word Proofreader Commands Unavailable
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranties, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: optical character recognition
	
	======================================================================
	Keywords          : kbdta winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
