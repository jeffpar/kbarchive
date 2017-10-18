---
layout: page
title: "Q165252: WD97: Setting Default Border Via Macro Not Reflected In Dialog"
permalink: kb/165/Q165252/
---

## Q165252: WD97: Setting Default Border Via Macro Not Reflected In Dialog

	Article: Q165252
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97 kbformat
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to set the default border for Borders and Shading with Visual
	Basic for Applications commands, the new default is not reflected when viewing
	the Borders and Shading dialog box (on the the Format menu).
	
	However, the change is evident when viewing the Tables and Borders toolbar.
	
	CAUSE
	=====
	
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
	
	By design, the Borders and Shading dialog box always shows the state of the
	current selection or insertion point location.
	
	The Tables and Borders toolbar is used for applying borders or drawing tables,
	and is not linked to the setting in the Borders and Shading dialog box.
	
	The following example Visual Basic for Applications macro demonstrates this
	behavior:
	
	     Sub SetDefaultBorder()
	        Options.DefaultBorderLineStyle = wdLineStyleDouble
	        Options.DefaultBorderLineWidth = wdLineWidth150pt
	     End Sub
	
	WORKAROUND
	==========
	
	To set a default border weight and style to appear in the Borders and Shading
	dialog box, you can use the following example Visual Basic for Applications
	macro and assign the macro to a menu item:
	
	     Sub SetDefaultBorderDialog()
	        With Dialogs(wdDialogFormatBordersAndShading)
	           .TopBorder = wdLineStyleDouble
	           .LeftBorder = wdLineStyleDouble
	           .BottomBorder = wdLineStyleDouble
	           .RightBorder = wdLineStyleDouble
	           .TopWeight = wdLineWidth225pt
	           .LeftWeight = wdLineWidth225pt
	           .BottomWeight = wdLineWidth225pt
	           .RightWeight = wdLineWidth225pt
	           .Show
	        End With
	     End Sub
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  " menus" (without the quotation marks)
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about Borders, from the Visual Basic Editor, click the
	Office Assistant, type "Borders" (without the quotation marks), click Search,
	and then click to view "Borders Collection Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 kbformat 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
