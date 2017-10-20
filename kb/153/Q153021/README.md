---
layout: page
title: "Q153021: DOC: ListView Sort Only on Text of ListItem"
permalink: /kb/153/Q153021/
---

## Q153021: DOC: ListView Sort Only on Text of ListItem

{% raw %}

	Article: Q153021
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the SortOrder Property of a ListView control states that
	you can "sort from the beginning of the alphabet (A-Z), the earliest date, or
	the lowest number." This is incorrect. All sorting is done only on the textual
	representation of the items being sorted. This means, for example, that the
	number "11000" will be sorted before the number "2000" if a sort is done in
	ascending order. This can also affect the sorting of dates, depending on the
	format of the date in the text property of the ListItem object.
	
	MORE INFORMATION
	================
	
	This sorting functionality is provided by the Comctl32.dll file that ships with
	all 32-bit Windows operating systems. Comctl32.ocx wraps this .dll file to
	provide Windows 95-style common controls to Visual Basic programmers. If a
	series of documents is created and sorted in Explorer, it will show the same
	behavior noted in this article and demonstrated in the Step To Reproduce sample
	below. When in ascending order, numbers will be sorted before alphabetic
	characters, and A will be sorted before Z. Special characters such as accents,
	umlauts, tildes, and carets are sorted immediately after the character preceding
	them, without the corresponding special character. These rules are reversed when
	sorting is done in descending order.
	
	Steps To Reproduce Behavior:
	----------------------------
	
	1. Start Visual Basic 4.0, 32-bit version. Form1 is created by default.
	
	2. Add a single ListView control to the form.
	
	3. Add this code to the form:
	
	        Private Sub Form_Click()
	            ListView1.SortOrder = 0
	            ListView1.Sorted = True
	            MsgBox "Sorted in ascending order"
	        End Sub
	
	        Private Sub Form_Load()
	            Dim i As ListItem
	
	            Set i = ListView1.ListItems.Add(, , "2000")
	            Set i = ListView1.ListItems.Add(, , "11000")
	        End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Click once
	  on the form and dismiss the "Sorted in ascending order message box". Observe
	  that the number "11000" has been sorted before the number "2000".
	
	Microsoft has confirmed this to be a documentation error in the products
	mentioned at the beginning of this article. This error has been corrected in the
	documentation for Visual Basic 5.0 and 6.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
