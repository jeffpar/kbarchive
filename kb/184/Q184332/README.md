---
layout: page
title: "Q184332: FIX: UserControl in VB4 or VC++ 5.0 Container Causes IPF on Exit"
permalink: kb/184/Q184332/
---

## Q184332: FIX: UserControl in VB4 or VC++ 5.0 Container Causes IPF on Exit

	Article: Q184332
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbCtrlCreate kbVBp kbVBp400bug kbVBp500bug kbVC500bug kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application compiled in Visual Basic 4.0 or Visual C++ 5.0 generates an
	"Invalid Page Fault in MSVBVM50.DLL" error when the application is closed.
	
	CAUSE
	=====
	
	This error can occur in the following situation:
	
	- The Visual Basic 4.0 or Visual C++ 5.0 application contains a UserControl
	  created in Visual Basic 5.0.
	
	  -and-
	
	- The UserControl contains a Class that creates a reference to the UserControl.
	
	  -and-
	
	- You are running Windows 95 or Windows 98.
	
	RESOLUTION
	==========
	
	To work around this problem, use the ObjPtr function in combination with the
	CopyMemory API call to create the UserControl reference in the Class Module. The
	steps to complete the workaround are listed in the MORE INFORMATION section of
	this article.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This problem was corrected in Windows 2000.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	Steps to Reproduce Behavior
	
	1. Start a new ActiveX Control project in Visual Basic 5.0.
	
	2. Name the project "passcontrol."
	
	3. Add a Class Module to the project.
	
	4. Add the following code to Class1:
	
	        Private mycontrol As passcontrol.UserControl1
	
	        Friend Sub passSelf(obj As passcontrol.UserControl1)
	          Set mycontrol = obj
	          mycontrol.SayHello
	
	        End Sub
	
	        Private Sub Class_Terminate()
	          Set mycontrol = Nothing
	        End Sub
	
	5. Add the following code to UserControl1:
	
	        Private myclass As New passcontrol.Class1
	
	        Private Sub UserControl_Initialize()
	          myclass.passSelf Me
	        End Sub
	
	        Friend Sub SayHello()
	          MsgBox "Hello!"
	        End Sub
	
	6. On the File menu, click "Make Passcontrol.ocx" to build the control.
	
	7. Create a new project in Visual Basic 4.0 (32-bit) or Visual C++ 5.0.
	
	8. Add Passcontrol.ocx to your project's form.
	
	9. Compile (or build) the Visual Basic or Visual C++ application.
	
	10. Run the application on a computer running Windows 95, Windows 98, or Windows
	  Me.
	
	11. Exit the application. You should receive the error "<application>
	  caused an Invalid Page Fault in Module MSVBVM50.DLL."
	
	WARNING: If you reproduce this problem, it is advisable to restart the computer
	you are testing on after you receive the error. Passcontrol.ocx is locked by the
	system, and any attempt to manipulate this file causes your computer to freeze.
	
	Workaround
	
	In the Class Module, substitute the following code:
	
	     Private Declare Sub CopyMemory _
	           Lib "kernel32" Alias "RtlMoveMemory" _
	              (pDest As Any, _
	              pSrc As Any, _
	              ByVal ByteLen As Long)
	
	     Private mycontrol As passcontrol.UserControl1
	     Friend Sub passSelf(ByVal ptrobj As Long)
	        CopyMemory mycontrol, ptrobj, 4
	        mycontrol.SayHello
	     End Sub
	
	     Private Sub Class_Terminate()
	        Set mycontrol = Nothing
	     End Sub
	
	In the UserControl, substitute the following code:
	
	     Private myclass As New passcontrol.Class1
	     Private Sub UserControl_Initialize()
	        myclass.passSelf ObjPtr(Me)
	     End Sub
	
	     Friend Sub SayHello()
	        MsgBox "Hello!"
	     End Sub
	
	Additional query words: VC++ C++ user control activex ocx
	
	======================================================================
	Keywords          : kbCRT kbCtrlCreate kbVBp kbVBp400bug kbVBp500bug kbVC500bug kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
