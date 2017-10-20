---
layout: page
title: "Q138918: How to Make a Modal List Box on a Form"
permalink: /kb/138/Q138918/
---

## Q138918: How to Make a Modal List Box on a Form

{% raw %}

	Article: Q138918
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When doing data entry there are times when you want the user to make a selection
	before moving on. This article shows how to make a list box that the user cannot
	leave until they make a selection.
	
	MORE INFORMATION
	================
	
	If you are not familiar with creating classes or using the Form Designer and the
	different controls please see Chapters 9 - 11 in the Developer's Guide.
	
	Steps to Make a Modal List Box
	------------------------------
	
	1. Create a new class based on a Container. Name it MyList, and store it in
	  Mylib.
	
	2. Set the following Properties for the MyList container:
	
	  BackStyle = "0-Transparent" (without the quotation marks)
	  BorderWidth = "0" (without the quotation marks)
	  Height = "195" (without the quotation marks)
	  Width = "165" (without the quotation marks)
	
	3. Add a new Property to the class, and call it Flag.
	
	4. Add a list box to the container, and set the following properties for the
	  list box:
	
	  Height = "190" (without the quotation marks)
	  Left = "3" (without the quotation marks)
	  Top = "3" (without the quotation marks)
	  Width = "160" (without the quotation marks)
	  RowSourceType = "1-Value" (without the quotation marks)
	  RowSource = "One,Two,Three" (without the quotation marks)
	
	5. In the GotFocus event of MyList, enter the following code:
	
	     This.Flag = .F.
	
	6. In the LostFocus event of MyList, enter the following code:
	
	     IF !This.Flag
	        This.List1.SetFocus
	     ENDIF &&Returns focus to the list if no selection is made
	
	7. In the Click event of List1, enter the following code:
	
	     IF !This.Parent.Flag
	        This.Parent.Flag = .T.
	     ENDIF &&Lets them leave if they click to make a selection.
	
	8. In the Valid event of List1, enter the following code:
	
	     IF !This.Parent.Flag
	        This.Parent.Flag = .T.
	     ENDIF &&Lets them leave if they made a selection with the keyboard.
	
	9. Save the class, and then close the Class Designer.
	
	10. Create a new Form.
	
	11. Place a text box on the form, and then place the MyList container class on
	  the form. Then place a second text box on the form. Save the Form and then
	  run it.
	
	If you press the TAB key to move into the list box, you will not be able to press
	the TAB key to move back out unless you pick an item from the list using the
	mouse or keyboard.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
