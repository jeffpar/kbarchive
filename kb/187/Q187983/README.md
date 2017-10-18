---
layout: page
title: "Q187983: BUG: IDE Crash with Compiled GlobalMultiUse"
permalink: kb/187/Q187983/
---

## Q187983: BUG: IDE Crash with Compiled GlobalMultiUse

	Article: Q187983
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Terminate event of a GlobalMultiUse class calls a procedure in another
	DLL, and if the same GlobalMultiUse class had previously called the same DLL,
	then you receive an error and the IDE may crash.
	
	With Visual Basic 5.0, you may receive one of the following errors:
	
	  Exception: privileged instruction (0xc0000096), Address: 0x00186a3a
	
	  -or-
	
	  VB5 caused an invalid page fault (or general page fault)
	
	With Visual Basic 6.0, the IDE does not crash, but you may receive the following
	error:
	
	  Run-time error '-2147418105 (80010007)':
	  Automation error
	
	This error translates to:
	
	  "The callee (server [not server application]) is not available and
	  disappeared; all connections are invalid. The call may have executed."
	
	CAUSE
	=====
	
	This problem can occur when the ActiveX components are not shut down in the
	necessary order when your client application ends. For example, suppose your
	client application uses two ActiveX DLLs (DLL1 and DLL2). If the Terminate event
	of a class in DLL2 calls a procedure in DLL1, but DLL1 has been shut down before
	DLL2, you can experience this problem because the procedure in DLL1 is
	unavailable. The "Steps to Reproduce Behavior" section of this article
	demonstrates this scenario and shows how to work around the problem by
	controlling the order in which the two DLLs shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project and name the project P_DLL1.
	
	2. Name its default module C_DLL1Globals and change its Instancing property to
	  GlobalMultiUse.
	
	3. Add the following code to C_DLL1Globals:
	
	        Public Function DLL1_Function() As String
	           DLL1_Function = "Func1"
	        End Function
	
	4. Add a second new ActiveX DLL project and name the project P_DLL2.
	
	5. Name its default module C_DLL2Globals and change it's Instancing property to
	  GlobalMultiUse.
	
	6. Add the following code to C_DLL2Globals:
	
	        Public Sub DLL2_FunctionWhichCallsDLL1_Function()
	           Dim s As String
	           s = DLL1_Function
	
	        End Sub
	
	        Public Property Get PublicObject() As C_PublicObject
	           Set PublicObject = M_Globals.PublicObject
	        End Property
	
	7. Add a second Class Module to P_DLL2. Change the name to C_PublicObject and
	  change its Instancing property to PublicNotCreatable.
	
	8. Add the following code to C_PublicObject:
	
	       Private m_Something As Integer
	
	       Private Sub Class_Terminate()
	          Dim s As String
	          s = DLL1_Function
	       End Sub
	
	       Public Property Let Something(ByVal vData As Integer)
	          m_Something = vData
	       End Property
	
	9. Add a Standard Module to P_DLL2 and name it M_Globals.
	
	10. To create a reference to P_DLL1, click References on the Project menu and
	  check P_DLL1.
	
	11. Add the following code to M_Globals:
	
	       Private m_PublicObject As C_PublicObject
	
	       Public Property Get PublicObject() As C_PublicObject
	          If m_PublicObject Is Nothing Then
	             Set m_PublicObject = New C_PublicObject
	          End If
	          Set PublicObject = m_PublicObject
	       End Property
	
	12. Add a Standard EXE project, and name the project GroupExe.
	
	13. Name the default form frmGroupExe, and add a CommandButton to it.
	
	14. Add the following code to frmGroupExe:
	
	        Private Sub Command1_Click()
	           DLL2_FunctionWhichCallsDLL1_Function
	        End Sub
	
	        Private Sub Form_Load()
	           PublicObject.Something = 1
	        End Sub
	
	15. Save the project files.
	
	16. Compile P_DLL1.dll and remove the P_DLL1 project from the project group by
	  choosing Remove Project from the File menu.
	
	17. Compile P_DLL2.dll and remove the P_DLL2 project from the project group by
	  choosing Remove Project from the File menu.
	
	18. In GroupExe, create a reference to P_DLL2.
	
	19. Save your work.
	
	  NOTE: The next step will crash the IDE and you may lose your work if you do
	  not save it at this time.
	
	20. Run GroupExe, click the CommandButton, and then exit GroupExe. Note that the
	  IDE crashes with one of the errors mentioned previously.
	
	This problem occurs during the shut down process. If you were to trace the order
	in which the classes in the two DLLs shut down, you would see the following
	order of events:
	
	C_DLL2Globals Terminate
	C_DLL1Globals Terminate
	C_PublicObject Terminate
	
	The problem occurs when the Terminate event of C_PublicObject tries to call the
	DLL1_Function, which is in the C_DLL1Globals object. Because the C_DLL1Globals
	object has closed, the DLL1_Function cannot be called.
	
	To work around this problem, make sure the C_PublicObject Terminate event occurs
	while the C_DLL1Globals object is still available. To accomplish this task, put
	code in the Terminate event of C_DLL2Globals that causes the C_PublicObject to
	terminate. This will force the C_PublicObject Terminate event to fire before the
	C_DLL1Globals object is closed. Here's the code modifications for the
	workaround:
	
	Put the following procedure in the M_Globals module of P_DLL2:
	
	     Public Sub ClosePublicObject
	        Set m_PublicObject = Nothing
	     End Sub
	
	Next, add the following code to the C_DLL2Globals class:
	
	     Private Sub Class_Terminate()
	        ClosePublicObject
	     End Sub
	
	Now, when C_DLL2Globals terminates, the ClosePublicObject procedure is run that
	causes the C_PublicObject object to terminate. The new order of events during
	shutdown is:
	
	C_DLL2Globals Terminate
	C_PublicObject Terminate
	C_DLL1Globals Terminate
	
	REFERENCES
	==========
	
	For more information about ActiveX component shutdown guidelines, please refer
	to Appendix B: ActiveX Component Standards and Guidelines in the Visual Basic
	Components Tools Guide
	
	Additional query words: kbDSupport kbDSD gpf ipf kernel32.dll 0137:bff858c0 kbVBp500bug kbActiveX 
	kbClientServer kbVBp600bug kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
