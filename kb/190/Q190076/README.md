---
layout: page
title: "Q190076: HOWTO: Avoid GPF When Using a VB6 DLL with a VB5 UserControl"
permalink: kb/190/Q190076/
---

## Q190076: HOWTO: Avoid GPF When Using a VB6 DLL with a VB5 UserControl

	Article: Q190076
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a PropertyBag interface is passed out of a Visual Basic 5.0 UserControl
	into a Visual Basic 6.0 DLL, and the Visual Basic 6.0 server uses the Contents
	property of the PropertyBag interface, the server produces the following error:
	
	  Compile error: Function of interface marked as restricted, or the function
	  uses as Automation type not supported in Visual Basic.
	
	MORE INFORMATION
	================
	
	A PropertyBag object is passed into an object through the ReadProperties and
	WriteProperties events in order to save and restore the state of the object. The
	problem described in this article occurs when a Visual Basic 5.0 PropertyBag
	interface is passed into a Visual Basic 6.0 server, which then attempts to
	de-reference a non-existent VTable entry for the Contents property.
	
	This occurs because the Contents property of the PropertyBag interface in version
	6.0 did not exist in version 5.0.
	
	To avoid binary incompatibility when inter-mixing Visual Basic 5.0 and Visual
	Basic 6.0 components, use the PropertyBag_VB5 interface in Visual Basic 6.0
	projects and do not use the Contents property.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic 6.0 ActiveX DLL project. A project named Project1
	  and a class module named Class1 are created by default. From the Properties
	  Page, change the project Name property to PropHandler2.
	
	2. From the Class1(Code) window, enter the following code:
	
	        Public Sub Test(obj As PropertyBag)
	           Dim vnt As Variant
	           vnt = obj.Contents
	           obj.Contents = vnt
	        End Sub
	
	3. From the File menu, choose Make PropHandler2.dll to build PropHandler2.dll.
	  In the Make Project dialog, make a note of the DLL file name and directory
	  where the DLL is saved, then choose OK.
	
	4. Create a new Visual Basic 5.0 ActiveX Control project. UserControl1 is
	  created by default.
	
	5. The reference to the DLL built in step 3 now needs to be added to the ActiveX
	  Control project. From the Project menu, choose References, and then add the
	  reference to PropHandler2.dll. To do this, scroll down the list of available
	  references to find PropHandler2 and check its checkbox. Then choose OK.
	
	  NOTE: If PropHandler2 is not found, click on Browse and go to the directory in
	  which PropHandler2.dll was built. Enter PropHandler2.dll as the File name,
	  then choose Open.
	
	6. From the UserControl1(Code) window, enter the following code:
	
	        Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	           Dim obj As New Class1
	           obj.Test PropBag
	        End Sub
	
	7. Close the control's design window. To do this, from the Project window,
	  double-click UserControl1 to bring its designer to the front, then press
	  CTRL+F4 to close the window. Closing the designer's window puts the
	  UserControl1 control in run mode. As soon as the control is in run mode, its
	  icon (the default toolbox icon for a user control) is enabled in the Toolbox.
	
	8. From the File menu, choose Add Project. Add a new Standard EXE project named
	  Project2. Form1 is created by default.
	
	9. From the Toolbox, place the UserControl on Form1.
	
	10. From the File menu, choose Save Project2. At the Save File As dialog, choose
	  Save. Note that the above compile error will be received.
	
	Additional query words: kbDSupport kbCtrl kbVBp kbVBp600 kbdss kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
