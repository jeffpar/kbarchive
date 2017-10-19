---
layout: page
title: "Q205405: WD97: Undo or Redo Button on Menu Bar May Cause Stack Fault"
permalink: /kb/205/Q205405/
---

## Q205405: WD97: Undo or Redo Button on Menu Bar May Cause Stack Fault

	Article: Q205405
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you customize the Word menu bar by adding commands including the Undo or
	Redo button, when you rest your pointer over the Undo or Redo button, an error
	message similar to the following may appear:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at 0167:3072dfd2.
	
	NOTE: The actual memory address may vary.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following appropriate for your
	situation:
	
	Method 1: Turn Off ScreenTips (ToolTips)
	----------------------------------------
	
	To prevent this problem after you add the Undo button to the menu bar in Word,
	turn off ScreenTips. To do this, follow these steps:
	
	1. On the Tools menu, click Customize.
	
	2. On the Options tab, clear the Show ScreenTips on toolbars check box.
	
	3. Click Close.
	
	Method 2: Add the Undo Button to a Different Menu or Toolbar
	------------------------------------------------------------
	
	Do not add the Undo or Redo button to the Word menu bar. Instead, add the button
	to a custom toolbar or custom menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information about customizing your toolbars and menus, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q191179 WD97: Customizing and Sharing Toolbars in Microsoft Word
	
	For more information about customizing toolbars, click the Office Assistant, type
	"customizing toolbars" (without the quotation marks), click Search, and then
	click to view "add a button to a toolbar."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
