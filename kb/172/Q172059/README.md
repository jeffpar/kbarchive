---
layout: page
title: "Q172059: HOWTO: Show a Modal Form from an OLE Server DLL"
permalink: /kb/172/Q172059/
---

## Q172059: HOWTO: Show a Modal Form from an OLE Server DLL

{% raw %}

	Article: Q172059
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Showing a modal form from an out-of-process OLE Server is generally not
	recommended. One reason is that the modal form may be displayed behind the
	client program, making it difficult for the user to see that it needs to be
	addressed. Another problem is that while the method of the OLE Server is still
	processing, the client program may not handle Paint messages, which can cause
	the client screen to become cluttered by the images of other windows that have
	overlaid it.
	
	Finally, if an OLE Server is just performing a service and is not responsible for
	any of the user interface, it is more appropriate to raise an error and return
	that error to the client program than for the OLE Server itself to show a
	message box.
	
	MORE INFORMATION
	================
	
	One way to show a modal form from a client program is to use an OLE DLL as the
	server application. The DLL will run in the address space of the client.
	Consequently, any forms shown by the OLE DLL will automatically have the client
	program's form as a parent.
	
	The steps below outline how to create an out-of-process OLE Server DLL that shows
	a modal form inside Excel 7.0.
	
	Step-by-Step Example
	--------------------
	
	This example has three parts:
	
	1. Making a DLL from Visual Basic 4.0.
	
	2. Making a DLL from Visual Basic 5.0 or Visual Basic 6.0.
	
	3. Calling the DLL from Excel.
	
	Part 1: Making a DLL from Visual Basic 4.0
	
	1. Start a new project. Form1 is created by default.
	
	2. On Form1, place a CommandButton, and place the following code in the
	  CommandButton:
	
	        Private Sub Command1_Click()
	        Unload Me
	        End Sub
	
	3. Insert a class module by choosing Insert...Class Module from the menu.
	
	4. In the Class module, place the following code:
	
	        Public Sub ShowModal()
	        Form1.Show 1
	        End Sub
	
	5. Press the F4 key to bring up the Properties window for the class, and change
	  the Name of the class to clsShowForm. Set Instancing to Createable MultiUse,
	  and set Public to True.
	
	6. From the Tools menu, choose Options, and select the Project tab. Change the
	  project name to prjShowForm, select OLE Server, and change the Application
	  Description to "Show Project Example" (without the quotes).
	
	7. Also in the Project tab, switch the Startup Form to Sub Main(). Click OK in
	  the Options dialog box.
	
	8. Add a regular module to the project by choosing Module from the Insert menu.
	
	9. Place a main subroutine into it:
	
	        Sub main()
	
	        End Sub
	
	10. From the Filemenu, choose Make OLE DLL to make the OLE Server. This creates
	  the DLL and registers the OLE Server on the system.
	
	Part 2: Making a DLL from Visual Basic 5.0 or Visual Basic 6.0
	
	1. Start a new ActiveX DLL project. Class1 is created by default.
	
	2. In the Class module, place the following code:
	
	        Public Sub ShowModal()
	        Form1.Show 1
	        End Sub
	
	3. Press the F4 key to bring up the Properties window for the class, and change
	  the Name of the class to clsShowForm. Set Instancing to MultiUse.
	
	4. Add a form... From the Project menu, choose Add Form
	
	5. On Form1, place a CommandButton, and place the following code in the
	  CommandButton:
	
	        Private Sub Command1_Click()
	        Unload Me
	        End Sub
	
	6. From the Tools menu, choose Options, and select the Project tab. Change the
	  project name to prjShowForm, select OLE Server, and change the Application
	  Description to "Show Project Example" (without the quotes).
	
	7. Also in the Project tab, switch the Startup Object to None.
	
	8. From the Filemenu, choose Make OLE DLL to make the OLE Server. This creates
	  the DLL and registers the OLE Server on the system.
	
	Part 3: Calling the DLL from Excel
	
	1. Start Excel, and by default it will start in Book1. This is important because
	  the example above uses the Caption of Excel to find the window handle. From
	  the Insert menu, choose Macro Module to go into the VBA editor.
	
	2. Place the following code in the editor:
	
	        Sub test()
	        Dim x As Object
	        Set x = CreateObject("prjShowForm.clsShowForm")
	        x.ShowModal
	        End Sub
	
	3. Run the code in the Excel editor and it will show the modal form provided by
	  the OLE Server DLL. It will be shown modally in front of Excel until the form
	  is dismissed. If the same form is shown from an out-of-process OLE Server,
	  two undesirable characteristics will manifest themselves: Excel will fail to
	  paint as the modal form is moved around and it will be possible to click on
	  Excel to bring it to the foreground.
	
	Additional query words: KBACTIVEX KBDLL kbVBp kbdsd kbDSupport kbVBp400 kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
