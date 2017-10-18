---
layout: page
title: "Q183164: FIX: For..Each Loop in ActiveX Component Causes Errors"
permalink: kb/183/Q183164/
---

## Q183164: FIX: For..Each Loop in ActiveX Component Causes Errors

	Article: Q183164
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVBp500bug kbVBp600fix kbVS97sp2bug kbVS97sp3bug kbGrpDSVB
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an ActiveX DLL created in Visual Basic, you may receive one of the
	following errors if the ActiveX component contains a For..Each loop that
	iterates through a Visual Basic collection:
	
	  Run-time error '48':
	  Error in loading DLL
	
	  -or-
	
	  Run-time error '-2147319765 (8002802b)':
	  Automation Error
	
	This problem occurs when a For..Each loop is executed in an ActiveX DLL.
	For..Each loops elsewhere do not exhibit this problem.
	
	CAUSE
	=====
	
	This problem typically occurs after calling the DLL at least twice. The first
	call into the DLL does not execute code that uses a For..Each loop but the
	second call does. The error occurs during the second call. See the "Steps to
	Reproduce Behavior" section below for more information.
	
	RESOLUTION
	==========
	
	- Use a For..Next loop in place of the For..Each loop.
	
	  -or-
	
	- Create your own collection class, an example of which can be found in the
	  Visual Basic Books Online. Refer to the topic "Creating Your Own Collection
	  Classes."
	
	  -or-
	
	- If your DLL is running in a multithreaded environment like Internet
	  Information Server (IIS) or Microsoft Transaction Server (MTS), please see
	  the following article here in the Microsoft Knowledge Base:
	
	  Q186273 BUG: AV Running VB-Built Component in Multi-Threaded Environment
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem has been corrected in
	Microsoft Visual Basic 6.0.
	
	NOTE: If your DLL is running in a multi-threaded environment, you must still
	complete the steps provided in the following article in the Microsoft Knowledge
	Base:
	
	  Q186273 BUG: AV Running VB-Built Component in Multi-Threaded Environment
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic.
	
	2. Click Project1 Properties from the Project menu and set the Project Name to
	  "AutoErr1."
	
	3. Copy the following code to the Class1 module:
	
	        Public Sub Method1()
	           Dim col As New Collection
	           Dim obj As Object
	           For Each obj In col
	           Next obj
	        End Sub
	
	4. Click "Make AutoErr1.dll" from the File menu to create the DLL file.
	
	5. Quit Visual Basic. You may optionally save the project files.
	
	6. Start Microsoft Excel 97 and create a new workbook. Press the ALT+F11 keys to
	  start the Visual Basic editor.
	
	7. Click Module from the Insert menu to add a standard module. Add the following
	  code to the new module:
	
	        Private Sub Test48()
	           ' First call into dll
	           Dim o as Object
	           Set o = CreateObject("AutoErr1.Class1")
	           Set o = Nothing
	           ' Second call into dll
	           Set o = CreateObject("AutoErr1.Class1")
	           o.Method1 ' calls method that uses For..Each loop
	           set o = Nothing
	        End Sub
	
	8. Press the F8 key to step through the Sub's code and note that the following
	  error occurs when calling Method1:
	
	  Run-time error '48':
	  Error in loading DLL
	
	The following steps demonstrate how to reproduce the Automation error using
	Visual Basic as the client. Note that these steps may not reproduce the error on
	some machines.
	
	
	1. Follow steps 1 through 5 above to create the AutoErr1.dll.
	
	2. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Place 2 CommandButtons (Command1 and Command2) on Form1.
	
	4. Copy the following code to the Form1 module:
	
	        Private Sub Command1_Click()
	           ' First call into dll
	           Dim o As Object
	           Set o = CreateObject("AutoErr1.Class1")
	           Set o = Nothing
	        End Sub
	
	        Private Sub Command2_Click()
	           ' Second call into dll
	           Dim o As Object
	           Set o = CreateObject("AutoErr1.Class1")
	           o.Method1
	           Set o = Nothing
	        End Sub
	
	5. Press the CTRL+F5 keys to run the project.
	
	6. Click Command1.
	
	7. Click Command2. Note that the following error may occur when calling
	  Method1:
	
	  Runtime-error '-2147319765 (8002802b)':
	  Automation Error
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178777 : PRB: ASP Returns "Error in Loading DLL" with VB Component
	
	
	Additional query words: element not found
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVBp500bug kbVBp600fix kbVS97sp2bug kbVS97sp3bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
