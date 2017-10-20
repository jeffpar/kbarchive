---
layout: page
title: "Q190177: BUG: Stop Statement in ActiveX Server Causes VB to Fail"
permalink: /kb/190/Q190177/
---

## Q190177: BUG: Stop Statement in ActiveX Server Causes VB to Fail

{% raw %}

	Article: Q190177
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Stop statement is used in an ActiveX DLL and the DLL is referenced from
	a Standard EXE project, Microsoft Visual Basic fails upon restarting the
	execution after the Stop statement.
	
	The following error messages will be displayed:
	
	  Stop statement encountered
	
	followed by:
	
	  Run-time error '440';
	  Application-defined or object-defined error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Microsoft Visual Basic. Class1 is created
	  by default.
	
	2. On the Project menu, select Project1 Properties.
	
	3. In the Project name box, enter "MyDLL" (without the quotes) and click OK.
	
	4. Enter the following code to Class1 of MyDLL:
	
	        Public Sub Test()
	           Stop
	        End Sub
	
	5. On the File menu, click Make MyDLL.dll.
	
	6. Create a new Standard EXE project in Microsoft Visual Basic. Form1 is created
	  by default.
	
	  NOTE: If desired, you can save the MyDLL project.
	
	7. On the Project menu, click References.
	
	8. In the Available References list, click to select a reference to MyDLL, and
	  then click OK.
	
	9. Add a CommandButton to Form1, and add the following code to the code window
	  of Form1:
	
	        Public Sub Command1_Click()
	           Dim x as New Class1
	           x.Test
	        End Sub
	
	10. Press the F5 key to run the project, and click on the CommandButton.
	
	At this point, the following error occurs:
	
	  Stop statement encountered
	
	Once you click OK to continue past this dialog, a second error dialog is
	displayed:
	
	  Run-time error '440';
	  Application-defined or object-defined error
	
	Click Debug on this dialog to debug the Standard EXE. If you press the F5 key
	again to run the code, Visual Basic will fail. If you choose End at this dialog,
	Visual Basic will end the debug session correctly.
	
	For an ActiveX EXE (server) project under the same condition, after step 8 Visual
	Basic generates the following run-time error instead of the crash:
	
	  Run-time error 440: Automation error
	
	If Debug is chosen, connections to the server are lost and the application stop
	responding until it is closed.
	
	Additional query words: kbDSupport kbdss kbVBp600bug kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
