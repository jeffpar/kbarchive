---
layout: page
title: "Q70991: WD97: Auto Macros in Word"
permalink: kb/070/Q70991/
---

## Q70991: WD97: Auto Macros in Word

	Article: Q70991
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbdta kbtemplate winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Word reserves special names for macros that you can create to alter the way Word
	behaves. These are called auto macros. The auto macros in Microsoft Word are:
	
	  AutoExec
	  AutoNew
	  AutoOpen
	  AutoClose
	  AutoExit
	
	MORE INFORMATION
	================
	
	Word recognizes a macro whose name begins with "Auto" as a macro that runs
	automatically when the situation to which it applies arises. You supply the
	actual steps for the auto macro by either writing or recording the macro.
	
	You can prevent an auto macro from running by holding down the SHIFT key when you
	perform the action that triggers the macro.
	
	NOTE: There are also a variety of startup switches that can be used with Word.
	For more information about startup switches, please see the following article in
	the Microsoft Knowledge Base:
	
	  
	
	  Q70014 WD: Word for Windows Startup Switches
	
	Description of Auto Macros
	--------------------------
	
	AutoExec:
	
	The AutoExec macro runs when you start Word. This macro makes it easy to instruct
	Word to automatically make adjustments when you start Word. For example, you can
	create an AutoExec macro that automatically changes the default directory when
	you open Word for Windows.
	
	For more information about how to change the default directory, please see the
	following article in the Microsoft Knowledge Base:
	
	  
	
	  Q110629 Macro to Change Default FileSaveAs Directory
	
	The AutoExec macro runs when Word starts if the AutoExec macro was saved as part
	of the default (Normal.dot) template or if it was saved as part of a global
	add-in.
	
	To prevent AutoExec from running, type
	
	  "winword /m" (without the quotation marks)
	
	into a command prompt to start Word.
	
	AutoNew:
	
	The AutoNew macro runs after you create a new document based on a current
	template. For example, an AutoNew macro could update all the fields in a
	document, attached to a template of choice, and then run when you open a new
	document based on that template. The AutoNew macro runs when New is selected on
	the File menu in Word if the AutoNew macro was saved as part of the current
	template.
	
	The AutoNew macro does not run if the AutoNew macro was saved as part of a global
	add-in. The AutoNew macro is available when selecting Macros on the Tools menu.
	
	AutoOpen:
	
	The AutoOpen macro runs after you open a file with the FileOpen or FileFind
	command, or from the list of the last four documents that were opened (see the
	bottom of the File menu).
	
	The AutoOpen macro runs when Open is selected on the File menu and the AutoOpen
	macro was saved as part of the current template.
	
	The AutoOpen macro does not run if the AutoOpen macro was saved as part of a
	global add-in. The AutoOpen macro is available when Macros is selected on the
	Tools menu.
	
	AutoClose:
	
	The AutoClose macro runs when you close a document. The AutoClose macro will run
	when Close is selected on the File menu and the AutoClose macro was saved as
	part of the current template.
	
	The AutoClose macro will not run if the macro was saved as part of a global
	add-in. The AutoClose macro is available when Macros is selected on the Tools
	menu.
	
	AutoExit:
	
	The AutoExit macro runs when you quit Word.
	
	The AutoExit macro runs when Word quits if the macro was saved as part of the
	default (Normal.dot) template or when saved as part of a template that has been
	added into the Startup folder or added as a global template.
	
	REFERENCES
	==========
	
	"Microsoft Word for Windows Technical Reference," pages 7-8.
	
	"Microsoft Word for Windows and OS/2 Technical Reference," pages 97-99.
	
	"Using WordBasic," by WexTech Systems and Microsoft, pages 84-87.
	
	"Microsoft Word Developers Kit," Third Edition, pages 35-37.
	
	NOTE: Only Microsoft Word versions 6.0, 7.0, Word 97 and Word 98 Macintosh
	Edition support global add-ins. Earlier versions of Word do not support global
	add-ins.
	
	For more information about global add-ins, click the Office Assistant, type
	"global" (without the quotation marks), click Search, and then click to view the
	"About global templates" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: filefind vbapps
	
	======================================================================
	Keywords          : kbmacro kbdta kbtemplate winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
