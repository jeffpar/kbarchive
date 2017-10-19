---
layout: page
title: "Q199385: PRB: Active OLE Control Prevents Logging Off or Shutting Down"
permalink: /kb/199/Q199385/
---

## Q199385: PRB: Active OLE Control Prevents Logging Off or Shutting Down

	Article: Q199385
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbOLEApp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an OLE control with an embedded OCX control is active, the application
	prevents logging off or shutting down a machine. OLE cancels shutdown before
	your Visual Basic application gets a Query Unload event.
	
	CAUSE
	=====
	
	To prevent data loss, OLE prevents exiting an application while an OLE provider
	is active for editing.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Place a CommandButton (Command1) on to UserControl1.
	
	3. Paste the following code into the code module for UserControl1:
	
	  Private Sub UserControl_Resize()
	     Command1.Move 0, 0, ScaleWidth, ScaleHeight
	  End Sub
	
	4. From the File menu, select Make Project1.ocx to compile Project1.
	
	5. Create a new Standard EXE project (save the changes to the ActiveX Control
	  project, if desired), add a reference to the just-created OCX by selecting it
	  from the Components window. Note that you need to change the project name in
	  order to add the Project1 control.
	
	6. Place an instance of the OLE control onto Form1. The control is given the
	  name OLE1 by default. Leave the OLE control empty.
	
	7. Paste the following code into the code module for Form1:
	
	  Private Sub Form_Load()
	     OLE1.CreateEmbed "", "Project1.UserControl1"
	     OLE1.DoVerb vbOLEShow
	  End Sub
	
	8. Run the application, and click on OLE1 to activate the control.
	
	9. Log off or shut down the system.
	
	Note that you cannot log off or shut the machine down because the ActiveX control
	is active for editing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbOLEApp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
