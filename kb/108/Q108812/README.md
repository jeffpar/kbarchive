---
layout: page
title: "Q108812: BackColor Erases Existing Graphics on Form or Picture Control"
permalink: kb/108/Q108812/
---

## Q108812: BackColor Erases Existing Graphics on Form or Picture Control

	Article: Q108812
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting the BackColor property on forms or picture boxes at run time erases all
	previous printed graphics and output, including a persistent bitmap. This
	behavior is by design. Setting the ForeColor property does not affect the
	graphics or print output that are already drawn.
	
	Setting the BackColor property on other controls, such as list boxes, text boxes,
	or combo boxes, does not erase previously added items.
	
	MORE INFORMATION
	================
	
	NOTE: A persistent bitmap is a bitmap, accessed with the Image property, that
	stores output from graphics methods in memory. For more information, see the
	following items in the Visual Basic Help menu:
	
	- AutoRedraw property
	
	- persistent bitmap
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a list box and a picture box to Form1.
	
	3. Double-click the form to open the code window. Add the following code to the
	  Form Load event:
	
	     Sub Form_Load ()
	        form1.Show 'In Load event, must show form before Print works
	
	        picture1.ForeColor = QBColor(1)
	        picture1.BackColor = QBColor(11)
	        picture1.Print "color1"
	        form1.ForeColor = QBColor(1)
	        form1.BackColor = QBColor(12)
	        form1.Print "color1"
	        list1.ForeColor = QBColor(1)
	        list1.BackColor = QBColor(11)
	        list1.AddItem "color1"
	
	        MsgBox "click to see next color"
	        picture1.ForeColor = QBColor(2)
	        picture1.BackColor = QBColor(10)  'This BackColor erases picture1
	        picture1.Print "color1"
	        form1.ForeColor = QBColor(2)
	        form1.BackColor = QBColor(13)  'This BackColor erases form1
	        form1.Print "color1"
	        list1.ForeColor = QBColor(2)
	        list1.BackColor = QBColor(10)  'This BackColor doesn't erase List1
	        list1.AddItem "color2"
	
	        MsgBox "click to see next color"
	        picture1.ForeColor = QBColor(4)
	        picture1.BackColor = QBColor(14)  'This BackColor erases picture1
	        picture1.Print "color1"
	        form1.ForeColor = QBColor(4)
	        form1.BackColor = QBColor(8)  'This BackColor erases form1
	        form1.Print "color1"
	        list1.ForeColor = QBColor(4)
	        list1.BackColor = QBColor(14)  'This BackColor doesn't erase List1
	        list1.AddItem "color3"
	
	     End Sub
	
	4. Start the program or press the F5 key. Click OK to see the next color. To end
	  the program, close the form.
	
	Here are the results:
	
	- Changing the Form1.BackColor property erases the text that you previously
	  printed on Form1.
	
	- Changing the Picture1.BackColor property erases the text that you previously
	  printed on Picture1.
	
	- Changing the List1.BackColor property does not erase the text that you
	  previously added to the List1 list box.
	
	All of this behavior is by design.
	
	Additional query words: 2.00 3.00 delete remove blank out
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	
	=============================================================================
	
