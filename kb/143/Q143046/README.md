---
layout: page
title: "Q143046: FIX: Error When Closing a Program Through the Control Box"
permalink: /kb/143/Q143046/
---

## Q143046: FIX: Error When Closing a Program Through the Control Box

	Article: Q143046
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error occurs when you close a Visual Basic program through the
	control box if the Visual Basic program executes a command after an object
	created from a class module is set to nothing. This problem occurs only in the
	32-bit edition of Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	The workaround to this issue is execute all the code in the event before setting
	the object to nothing. The statement to set the object to nothing should be the
	last line in the event procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Issue
	------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0 or if it is already running,
	  click New Project on the File menu.
	
	2. Use the following steps to create a class module.
	
	  a. Click Class Module on the Insert Menu. The code window for the class
	     module appears.
	
	  b. In the Properties window of the Class1 class module, set the Instancing
	     Property to 2-Createable MultiUse, and the Public property to True.
	
	  c. Add the following code to the Class1 code window:
	
	        Option Explicit
	        Public Name As String
	
	        Private Sub Class_Terminate()
	           Form1.Print Name
	        End Sub
	     
	
	3. Add the following code to the Form1 code window.
	
	        Option Explicit
	        Public A As New Class1
	
	        Private Sub Form_Load()
	           Show
	           Set A = New Class1
	           A.Name = "A"
	
	           'To workaround this bug, cut the next line
	           Set A = Nothing
	
	           Print "A Is " & IIf(A Is Nothing, "Nothing", "Something")
	           'And uncomment this next line.
	           'Set A = Nothing
	        End Sub
	
	4. Press the F5 key or click Start on the Run menu to run the program.
	
	5. Click Close from the Control Bar menu on the form. One of the following
	  application error displays and Visual Basic ends:
	
	
	Window 2000:
	
	  The instruction at "0x00214c5f" referenced memory at "0xffffffff". The memory
	  could not be "written".
	
	Windows NT 32-bit:
	
	  An application error has occurred and an application error log is being
	  generated, VB32.exe Exception: access violation (0xc0000005), Address:
	  0x001d02d7.
	
	-or-
	
	  VB32.EXE-Application Error dialog box. The instruction at "0x001aaff8"
	  referenced memory at "0x007dbd6b". The memory could not be "written".
	
	Windows 95 or Windows 98 32-bit:
	
	  VB32 caused an invalid page fault in module <unknown> at 0000:a0000001.
	
	Additional query words: kbCtrl
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
