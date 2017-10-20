---
layout: page
title: "Q315922: MSScript.ocx Leaks Event Handles in Certain Applications"
permalink: /kb/315/Q315922/
---

## Q315922: MSScript.ocx Leaks Event Handles in Certain Applications

{% raw %}

	Article: Q315922
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Script control (MSScript.ocx) in an environment that
	repeatedly creates and destroys threads, MSScript.ocx leaks event handles. For
	each thread that is created and destroyed, an event handle is leaked if one or
	more objects of the Script control are created on that thread.
	
	WORKAROUND
	==========
	
	Do not repeatedly create and destroy threads; use a thread pool instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	more information here in the Microsoft Knowledge Base when it becomes
	available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create an ActiveX EXE project named Repro. A default class
	  named Class1 is created by default.
	
	2. Add a form to the project. Keep the default name Form1.
	
	3. Add Microsoft Script Control 1.0 to the toolbox, and then add an instance of
	  the control to Form1.
	
	4. Add the following code to Class1:
	
	  Dim f As New Form1
	  Private Sub Class_Initialize()
	      f.Visible = True
	  End Sub
	  Private Sub Class_Terminate()
	      Unload f
	  End Sub
	
	5. Change the threading model of the project to "Thread per Object", and then
	  build the project.
	
	6. In Visual Basic, create a Standard EXE project. Keep the default name
	  Project1. Form1 is created by default.
	
	7. Add a command button to Form1, and then add the following code to Form1:
	
	  Dim server As Object
	  Private Sub Command1_Click()
	      Dim o As Object
	      Set o = CreateObject("repro.class1")
	      Set o = Nothing
	  End Sub
	
	  Private Sub Form_Load()
	      Set server = CreateObject("repro.class1")
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	      Set server = Nothing
	  End Sub
	
	8. Build and run Project1. Notice that two processes, Project1.exe and
	  Repro.exe, are started.
	
	9. Use Performance Monitor or Task Manager to monitor the handle count for
	  Repro.exe.
	
	10. Repeatedly click the command button on Form1 of Project1, and then observe
	  the handle count for the Repro.exe process. Notice that each time you click
	  the button, an instance of the control is created and destroyed, and the
	  handle count for Repro.exe increases by 1.
	
	Additional query words: msscript
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
