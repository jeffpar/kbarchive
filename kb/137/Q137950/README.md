---
layout: page
title: "Q137950: BUG: Valid Event Doesn't Fire in Control Array of Text Boxes"
permalink: kb/137/Q137950/
---

## Q137950: BUG: Valid Event Doesn't Fire in Control Array of Text Boxes

	Article: Q137950
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pages 78-79 of the Visual FoxPro 3.0 Developer's Guide, has an example of
	creating a control array containing command buttons and check boxes. While this
	example works, creating a control array containing text boxes does not work as
	expected.
	
	NOTE: This example is located on page 72 of the Visual FoxPro 5.0 Developer's
	Guide. In Visual FoxPro 6.0, if you have the Online help installed, from the
	Help menu, choose Search to open the MSDN library Visual Studio 6.0 window.
	Clear the three check boxes in the lower left portion of the screen, and type
	"Creating Arrays of Members" (without the quotation marks) in the Search For
	text box. Click the first selection, to open "Chapter 3: Object Oriented
	Programming". Scroll to the bottom of the chapter and look for the heading,
	"Creating Arrays of Members".
	
	WORKAROUND
	==========
	
	The following code demonstrates how to create a form with a control array that
	has three text boxes:
	
	     *_ there are 2 bugs here they are pointed out with comments
	     PUBLIC oForm
	     oForm = CREATEOBJECT("Form")
	     oForm.AddObject("myarray","ctrlarr")
	     oForm.myarray.Visible = 1
	     oForm.Visible = 1
	
	     DEFINE CLASS ctrlarr AS Container
	     *- Make this a control array
	     DIMENSION txtdim(3)
	     ADD OBJECT txtdim(1) AS mytext WITH Top = 10
	     ADD OBJECT txtdim(2) AS mytext WITH Top = 40
	     ADD OBJECT txtdim(3) AS mytext WITH Top = 70
	
	     PROCEDURE txtdim.VALID
	        LPARAMETERS nIndex
	        WAIT WINDOW PROGRAM() + ' ' + This.Parent.txtdim(nIndex).value
	     **********************************************************************
	     * Should be able to use this syntax this(nIndex).value not
	     * this.parent.txtdim(nIndex).value***
	     **********************************************************************
	     ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS mytext AS TextBox
	     **********************************************************************
	     * If the following two lines are changed to comments, the valid in the
	     * control array won't fire ***
	     **********************************************************************
	
	     PROCEDURE VALID
	     ENDPROC
	     ENDDEFINE
	
	     *** end code
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Follow the example in the Developer's Guide. For example:
	
	     PUBLIC oForm
	     oForm = CREATEOBJECT("Form")
	     oForm.AddObject("myarray","ctrlarr")
	     oForm.myarray.visible = 1
	     oForm.Visible = 1
	
	     DEFINE CLASS ctrlarr AS Container
	     *- Make this a control array
	     DIMENSION txtdim(3)
	     ADD OBJECT txtdim(1) AS textbox WITH Top = 10
	     ADD OBJECT txtdim(2) AS textbox WITH Top = 40
	     ADD OBJECT txtdim(3) AS textbox WITH Top = 70
	
	     PROCEDURE txtdim.Valid
	     LPARAMETERS nIndex
	        WAIT WINDOW This(nIndex).Value + ' ' + STR(nindex)
	     ENDDEFINE
	
	The code should work. However, when you run it, no errors occur, but the Valid
	event does not fire.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbcode kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
