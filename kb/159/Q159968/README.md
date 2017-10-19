---
layout: page
title: "Q159968: WD97: Macro to Turn All Field Codes On and Off"
permalink: /kb/159/Q159968/
---

## Q159968: WD97: Macro to Turn All Field Codes On and Off

	Article: Q159968
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses two methods for turning fields codes on or off. The first
	method adds a built-in button to the Standard toolbar. The second method uses
	Microsoft Visual Basic for Applications to create a macro that turns all field
	codes in a document on or off.
	
	MORE INFORMATION
	================
	
	Use one of the following methods to toggle fields codes on or off.
	
	Method 1: Add the built-in View Field Codes button to the Standard toolbar
	--------------------------------------------------------------------------
	
	1. On the View menu, point to Toolbars, and then click Customize.
	
	2. Click the Commands tab.
	
	3. In the Categories list, click View.
	
	4. In the Commands list, click View Field Codes.
	
	5. Drag View Field Codes to the Standard toolbar. Release the mouse button when
	  you see a vertical bar indicating the location on the toolbar where the
	  command will be inserted.
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu (or on the Balloon Help menu if you are using a version of the
	Macintosh operating system earlier than 8.0), click the Index button in Word
	Help, type the following text
	
	  " menus, commands " (without the quotation marks)
	
	and then click Show Topics. Select the "Add a command or other item to a menu"
	topic, and click Go To. If you are unable to find the information you need, ask
	the Office Assistant.
	
	Method 2: Use the ShowFieldCodes property
	-----------------------------------------
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following Visual Basic macro uses the ShowFieldCodes property and displays a
	message in the status bar to indicate whether field codes are on or off. The
	StatusBar command can be replaced by other commands depending on the purpose of
	the macro.
	
	     Sub ToggleAllFieldCodes()
	        If ActiveWindow.View.ShowFieldCodes Then
	           ActiveWindow.View.ShowFieldCodes = False
	           StatusBar = "Field Codes Off"
	        Else
	           ActiveWindow.View.ShowFieldCodes = True
	           StatusBar = "Fields Codes On"
	        End If
	     End Sub
	
	Method 3: Toggling Field Code Viewing On or Off
	-----------------------------------------------
	
	The following two code examples are a simpler approach to the previous code;
	however; there is no trap for the current field code state.
	
	Example 1:
	
	     ActiveWindow.View.ShowFieldCodes = Not ActiveWindow.View.ShowFieldCodes
	
	Example 2:
	
	     ActiveWindow.Document.Fields.ToggleShowCodes
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q99954 Macro to Toggle All Document Field Codes On and Off
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
