---
layout: page
title: "Q165078: WD97: Some Open Shortcuts Changed"
permalink: kb/165/Q165078/
---

## Q165078: WD97: Some Open Shortcuts Changed

	Article: Q165078
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Word 7.0 macro converted to Word 97, a SendKeys command may not
	activate the desired button command in the Open dialog box (on the File menu,
	click Open).
	
	CAUSE
	=====
	
	A Search The Web button was added causing some buttons to move to a different
	position in the Open dialog box.
	
	MORE INFORMATION
	================
	
	Microsoft has integrated Web functionality into the Open dialog box for all
	Microsoft Office programs. A Search The Web button was added to the Open dialog
	box, moving several buttons to new locations. The following table lists the
	command buttons available in the Open dialog box, along with their respective
	shortcut keys and equivalent SendKeys command:
	
	Command Button                 Shortcut Key      SendKeys Command
	--------------                 ------------      ----------------
	
	
	Up One Level                   ALT+1             SendKeys "%1"
	Search The Web                 ALT+2             SendKeys "%2"
	Return To Previous Location    ALT+3             SendKeys "%3"
	Add To Favorites               ALT+4             SendKeys "%4"
	List                           ALT+5             SendKeys "%5"
	Details                        ALT+6             SendKeys "%6"
	Properties                     ALT+7             SendKeys "%7"
	Preview                        ALT+8             SendKeys "%8"
	Commands & Settings            ALT+9             SendKeys "%9"
	
	NOTE: The remaining buttons and shortcut keys for the Open dialog box remain
	unchanged.
	
	REFERENCES
	==========
	
	For more information about SendKeys, start the Visual Basic Editor, click the
	Office Assistant, type "SendKeys" (without the quotation marks), click Search,
	and then click to view "SendKeys Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 97 OFF97 8.0
	
	======================================================================
	Keywords          : kbmacro kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
