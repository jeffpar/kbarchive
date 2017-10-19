---
layout: page
title: "Q229752: BUG: IDE Uses All Resources When Breakpoint is Hit in Debug Mode"
permalink: /kb/229/Q229752/
---

## Q229752: BUG: IDE Uses All Resources When Breakpoint is Hit in Debug Mode

	Article: Q229752
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbResource kbVBp600bug kbIDEProject kbGrpDSVB
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use two instances of the Visual Basic 6.0 IDE to debug your client
	server applications with one running the client and the other running the
	server, you might see behavior under Windows 95, Windows 98, or Windows Me where
	the amount of free system resources diminishes until locking the machine. This
	behavior can happen when you reach a breakpoint in the instance running the
	server.
	
	RESOLUTION
	==========
	
	The recommended workaround is to debug client and server separately. Compile the
	client and debug the server in the IDE. Once you have the server reasonably
	debugged, compile it and debug the client in the IDE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX EXE project. Class1 is created by default.
	
	2. From the Projects menu, choose Properties and name this LeakMemory.
	
	3. Add this method to Class1:
	
	  Public Function GetLong() as Long
	  	GetLong = 5
	  End Function
	
	4. From the File menu, save the project.
	
	5. Place the cursor on the GetLong = 5 line and press the F9 key to set a
	  breakpoint.
	
	6. Run the project.
	
	7. Open a new instance of Visual Basic 6.0.
	
	8. Start a new Standard EXE project. Form1 is created by default.
	
	9. From the Project menu, choose References, check the running server
	  (LeakMemory), and click OK.
	
	10. Place a CommandButton on the form and, in the Click event, place the
	  following code:
	
	  Dim MyObj as New LeakMemory.Class1
	  Dim k as long
	  K=MyObj.GetLong()
	
	11. Run the project and click the button. You should reach the breakpoint in the
	  server.
	
	12. On the Visual Basic instance running the server, select About from the Help
	  menu, and click the SystemInfo button.
	
	13. From the View menu, select the Refresh option several times, at 20- or
	  30-second intervals, and you should see the available memory decreasing
	  every time you refresh the window. This continues until the machine locks
	  up.
	
	14. If you press the F5 key for Visual Basic to continue past the breakpoint,
	  the resources are released.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbResource kbVBp600bug kbIDEProject kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
