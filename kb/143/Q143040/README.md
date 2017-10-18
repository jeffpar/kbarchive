---
layout: page
title: "Q143040: How to Call a Visual Basic 4.0 OLE Server from Project 4.0"
permalink: kb/143/Q143040/
---

## Q143040: How to Call a Visual Basic 4.0 OLE Server from Project 4.0

	Article: Q143040
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 allows you to build OLE Servers, and to build applications that
	can use them. These calling applications are also referred to as containers.
	Microsoft Project 4.0 is an OLE Automation Client application; therefore it can
	be used to call methods and properties from OLE servers created with Visual
	Basic 4.0. This article describes the process of using OLE servers created by
	Visual Basic 4.0 with Project 4.0. The example uses the OLE server example
	created in the following Microsoft Knowledge Base article:
	
	  Q129801 How to Create and Use a Minimal OLE Automation Server
	
	MORE INFORMATION
	================
	
	Prior to following this example, make sure you have built the OLE Server
	discussed in Q129801 and have created an EXE file.
	
	Steps to Use a Visual Basic 4.0 OLE Server with Project 4.0
	-----------------------------------------------------------
	
	1. Start Project 4.0 with the default project, Project1.
	
	2. Select Project's Tools menu and choose the Macro item from this menu. The
	  Macros dialog will then appear.
	
	3. From the Macros dialog box, select the New button. The New Macro dialog box
	  will appear with a default name of Macro1. Select OK.
	
	4. Now select Project's Tools menu and choose the References item. This will
	  bring up the References dialog box.
	
	5. From the References dialog box, select the browse button. This will bring up
	  the Browse dialog box.
	
	6. In the FileName section of the browse dialog box, change the listings to
	  *.EXE. This will allow us to look for our OLE Server we have already created
	  as an executable file.
	
	7. Use the dialog box to move to the drive and directory containing the OLE
	  server and select it. Then select the OK button.
	
	8. Now you will see Project1 in the Available References box in the References
	  dialog. Project1 should be checked, if it is not then select it. Once you
	  confirm Project1 is in the list and checked, click OK. You now have a
	  reference to the OLE server in Project.
	
	9. Place the following code into the macro.
	
	        Dim MyObj As Object
	
	          Set MyObj = CreateObject("Project1.Class1")
	
	          MsgBox MyObj.MyString
	          MsgBox MyObj.MyFunction()
	
	          Set MyObj = Nothing
	
	  Note the parentheses following the line MsgBox MyObj.Myfunction(). The
	  parentheses are not required when calling an OLE Server from Visual Basic
	  4.0, but they are required when you call an OLE Server from Project 4.0.
	
	10. Now select Project's Run menu and select the Start item. When this
	  subroutine executes, you will get two message boxes. The first one will say
	  "Life is like a box of chocolates." and the second one will say "You never
	  know what you're gonna get."
	
	Additional query words: 4.00 vb4win
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
