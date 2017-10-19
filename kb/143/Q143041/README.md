---
layout: page
title: "Q143041: HOWTO: Call a Visual Basic 4.0 OLE Server from Excel 5.0"
permalink: /kb/143/Q143041/
---

## Q143041: HOWTO: Call a Visual Basic 4.0 OLE Server from Excel 5.0

	Article: Q143041
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 not only allows you to build OLE Servers but also to build
	applications that can use them. Microsoft Excel 5.0 is an OLE Automation Client
	application, and can therefore be used to call methods and properties from OLE
	servers created with Visual Basic 4.0. This article describes the process of
	using OLE servers created by Visual Basic 4.0 with Excel 5.0.
	
	The example is using the OLE server example created in the Microsoft Knowledge
	Base:
	
	  Q129801 HOWTO: Create and Use a Minimal OLE Automation Server
	
	MORE INFORMATION
	================
	
	Prior to following this example, make sure you have built the OLE Server
	discussed in Q129801, and have built an EXE file.
	
	Steps to Use a Visual Basic 4.0 OLE Server with Excel 5.0
	---------------------------------------------------------
	
	1. Start Excel 5.0 with the default workbook, Book1.
	
	2. Select the Excel Insert menu and choose the Macro/Module item from this menu.
	  This will insert a Visual Basic code module into our new workbook.
	
	3. Select the Excel Tools menu and choose the References item. This will bring
	  up the References dialog box.
	
	4. From the References dialog box, select the browse button. This will bring up
	  the Browse dialog box.
	
	5. In the FileName section of the browse dialog box, change the listings to
	  *.EXE. This will allow us to look for our OLE Server we have already created
	  as an executable file.
	
	6. Use the dialog box to move to the drive and directory containing the OLE
	  server and select it. Then select the OK button.
	
	7. Now you will see Project1 in the Available References box in the References
	  dialog box. Project1 should be checked; if it is not, then check it. Once you
	  confirm Project1 is in the list and checked, click the OK button. You now
	  have a reference to the OLE server in Excel.
	
	8. Place the following code into the code module.
	
	        Sub CallServer()
	
	          Dim MyObj As Object
	
	          Set MyObj = CreateObject("Project1.Class1")
	
	          MsgBox MyObj.MyString
	          MsgBox MyObj.MyFunction()
	
	          Set MyObj = Nothing
	
	        End Sub
	
	  Note the parentheses following the line MsgBox MyObj.Myfunction(). The
	  parentheses are not required when calling an OLE Server from Visual Basic
	  4.0, but they are required when you call an OLE Server from Excel 5.0.
	
	9. Now select the Excel Run menu and select the Start item. When this subroutine
	  executes, you will get two message boxes. The first one will say "Life is
	  like a box of chocolates." and the second one will say "You never know what
	  you're gonna get."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
