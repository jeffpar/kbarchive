---
layout: page
title: "Q193414: BUG: SetAll Not Refreshing Text Boxes in Grid When Sparse =.F."
permalink: /kb/193/Q193414/
---

## Q193414: BUG: SetAll Not Refreshing Text Boxes in Grid When Sparse =.F.

	Article: Q193414
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a grid that contains a column or columns, with their Sparse property set
	to .F., and then using the SetAll() method to set a text box property like
	BackColor, causes the updated property not to appear in the grid text boxes
	until the grid is refreshed or gets focus.
	
	RESOLUTION
	==========
	
	As a workaround, use one of the following three methods to force the grid to be
	repainted:
	
	- Call the form's Refresh() method.
	
	  -or-
	
	- Call the grid's SetFocus() method.
	
	  -or-
	
	- Set the value of the grid's scroll bars to itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The SetAll() method of an object sets a specific property of all the objects it
	contains. You can also specify a specific base class to be affected. The
	controls can also be contained within other objects within the object whose
	SetAll is called. In this case, we are affecting text boxes within columns in a
	grid control by the form's SetAll() method.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CREATE TABLE testtab (f1 c(5), f2 c(5))
	        FOR lni = 1 TO 5
	           INSERT INTO testtab (f1, f2)  ;
	              VALUES (PADL(ALLTR(STR(lni)),5, '0'), ;
	              SUBSTR(SYS(3), 4, 5))
	        ENDFOR
	        GO TOP
	
	        PUBLIC oForm
	
	        oForm = CREATEOBJECT('form')
	        oForm.ADDOBJECT('grid1','grid')
	        oForm.grid1.COLUMNCOUNT = 2
	        oForm.grid1.VISIBLE = .T.
	
	        oForm.ADDOBJECT('text1','textbox')
	        oForm.text1.TOP = 225
	        oForm.text1.VISIBLE = .T.
	        oForm.text1.TABINDEX = 1
	        oForm.ADDOBJECT('text2','textbox')
	        oForm.text2.TOP = 225
	        oForm.text2.LEFT = 150
	        oForm.text2.VISIBLE = .T.
	        oForm.text2.TABINDEX = 2
	        oForm.SHOW
	
	        oForm.SETALL("sparse",.F.)
	        WAIT WINDOW "Textboxes in Grid will not be refreshed" TIMEOUT 1
	        oForm.SETALL("backcolor",RGB(255,0,0),"textbox")
	
	The grid text boxes do not display the correct red BackColor, while the text
	boxes on the form do.
	
	If you add any one of the following lines of code to the end of the preceding
	program, it causes the correct BackColor to display.
	
	     oForm.Refresh()
	
	     oForm.grid1.SetFocus()
	
	     oForm.grid1.ScrollBars = oForm.grid1.ScrollBars
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbOOP kbContainer kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
