---
layout: page
title: "Q184050: WD97: Assigned Selected Adjacent Text Variable Doubles"
permalink: kb/184/Q184050/
---

## Q184050: WD97: Assigned Selected Adjacent Text Variable Doubles

	Article: Q184050
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon kbmacroexample kbwordvba kbconvert KbVBA
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you create a macro to select adjacent text from left to
	right and then assign the selections to two different variables, if you then set
	the first variable to be equal to the value of the second variable, you may
	receive unexpected results. Specifically, the value of the second variable will
	be twice as many words as what you expect.
	
	For example, take the phrase "We are testing some text." If you use the following
	code to assign the second word to the variable oSelection and the third word to
	oSelection2, and if you then look at the value of the oSelection2 variable after
	the assignment statement, the value is "testing testing."
	
	Sample Macro
	------------
	
	      Sub SelctionAssign()
	
	        ActiveDocument.Content = "We are testing some text in a selection."
	
	        Set oSelection = ActiveDocument.Content.Words(2)
	        Set oSelection2 = ActiveDocument.Content.Words(3)
	
	        MsgBox "Selection one = " & oSelection.Text & Chr(13) & _
	        "Selection two = " & oSelection2.Text, Title:="Before Assigning"
	
	        oSelection.Text = oSelection2.Text
	
	        MsgBox "Selection one = " & oSelection.Text & Chr(13) & _
	        "Selection two = " & oSelection2.Text, Title:="After Assigning"
	
	     End Sub
	
	If you run this macro, the message box shows that the second variable oSelection2
	takes the value "testing testing." This is an order and position issue: if you
	select word three and then word two, or if you select word two and then word
	four, this problem will not occur.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word. If you have a selection, and if
	you insert text to the left of the first character, that text becomes part of
	the selection. To see how Word adjusts selections, follow these steps:
	
	1. Open a new document.
	
	2. Type "sample text" (without the quotation marks), and then select it.
	
	3. On the Window menu, click New Window.
	
	4. At the beginning of "sample text," type "IP" (without the quotation marks)
	  and then type any text.
	
	5. Switch to the first window.
	
	6. Whatever you typed plus sample text is selected.
	
	The sample macro in this article simulates this type of behavior in code.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon kbmacroexample kbwordvba kbconvert KbVBA 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
