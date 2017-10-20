---
layout: page
title: "Q143039: Calling Visual Basic 4.0 OLE Server from Microsoft Access 2.0"
permalink: /kb/143/Q143039/
---

## Q143039: Calling Visual Basic 4.0 OLE Server from Microsoft Access 2.0

{% raw %}

	Article: Q143039
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
	
	Visual Basic 4.0 allows you to not only build OLE Servers but build applications
	which can use them. Microsoft Access 2.0 is an OLE Automation Client
	application, therefore it can be used to call methods and properties from OLE
	servers created with Visual Basic 4.0. This article will describe the process of
	using OLE servers created by Visual Basic 4.0 with Access 2.0. The example will
	be using the OLE server example created in the Microsoft Knowledge Base article
	Q129801, "How to Create and Use a Minimal OLE Automation Server."
	
	MORE INFORMATION
	================
	
	Prior to following this example, make sure you have built the OLE Server
	discussed in Q129801, and have built an EXE file.
	
	Steps to Use a Visual Basic 4.0 OLE Server with Access 2.0
	----------------------------------------------------------
	
	1. Start Access 2.0, from the File menu select New Database and accept the
	  default database, Db1.mdb.
	
	2. From the Access 2.0 database window, select the Module Tab.
	
	3. Now select the New button at the top of the database window to build a new
	  Access Basic module.
	
	4. Type the following code in the module.
	
	     Function CallServer () As Integer
	
	       Dim MyObj As Object
	
	       Set MyObj = CreateObject("Project1.Class1")
	
	       MsgBox MyObj.MyString
	       MsgBox MyObj.MyFunction
	
	     End Function
	
	5. Save this function, by selecting the File menu and choosing the Save item.
	  Accept the default to save the module as Module1. You may now close the code
	  window.
	
	6. From the Access database window, now select the Macro Tab. Then select the
	  new button. We will now be able to write a macro which calls our Access Basic
	  code.
	
	7. From the macro design screen, select Run code from the combo box under the
	  Action column.
	
	8. Now a textbox will appear at the bottom of this screen labeled as Function
	  Name. Click on the text box, and a button with three dots will appear. Click
	  on this button.
	
	9. The Expression Builder dialog now appears. Double click on the functions
	  folder in the lower-left corner of the dialog box.
	
	10. You will see a sub folder of the functions folder labeled DB1, standing for
	  the name of our database. Double-click this folder.
	
	11. Select the paste button. The CallServer() function will be pasted in as the
	  parameter to the RunCode Macro. Select OK from the Expression Builder dialog
	  box to close the dialog box.
	
	12. Save this macro, by selecting the File menu and choosing the Save item.
	  Accept the default to save the macro as Macro1. You may now close the macro
	  window.
	
	13. Select the macro in the Database window.
	
	14. Select the run button to run the macro. When this function executes, you
	  will get two message boxes. The first one will say, "Life is like a box of
	  chocolates." The second one will say, "You never know what you're gonna
	  get."
	
	Additional query words: 4.00 vb4win text box
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
