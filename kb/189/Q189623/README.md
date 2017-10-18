---
layout: page
title: "Q189623: HOWTO: Give Descriptions to Private Procedures"
permalink: kb/189/Q189623/
---

## Q189623: HOWTO: Give Descriptions to Private Procedures

	Article: Q189623
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Descriptions are generally given to Public procedures and provide more
	information concerning that particular procedure, which can be seen in the
	Object Browser. It is possible to provide descriptions for your Private
	procedures also.
	
	MORE INFORMATION
	================
	
	If you want to give a description to a Public procedure (Sub, Function,
	Property, Event) you can use the Procedure Attributes dialog. Just select
	Procedure Attributes from the Tools Menu, select the procedure Name, and type in
	a description. The description will show up in the Object Browser.
	
	If, however, you try to give a description to a Private procedure when you bring
	up the Procedure Attributes dialog, your Private procedure won't show up in the
	list of available procedures. You have to make the procedure Public first, give
	it a description, then go back and change it to Private. The Object Browser will
	then display the text.
	
	If you would like to delete the description for the procedure, you could repeat
	the process, removing the text. You could also cut and paste the code. When you
	cut and paste code, you lose the description.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1 code module:
	
	        Public Sub MyProcedure()
	            MsgBox "MyProcedure"
	        End Sub
	
	3. While you are still in the code window, select Procedure Attributes from the
	  Tools window. Enter a description for the procedure.
	
	4. Press the F2 key or select Object Browser from the View menu. Search for
	  MyProcedure and view the description you provided at the bottom of the
	  window. Close the Object Browser.
	
	5. Modify your procedure to look like the following:
	
	        Private Sub MyProcedure()
	            MsgBox "MyProcedure"
	        End Sub
	
	6. Attempt to perform step 3. Note that you can no longer enter a description
	  for this procedure.
	
	7. Perform step 4. Note that the description is still viewable in the Object
	  Browser.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbNoKeyWord kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
