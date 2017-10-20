---
layout: page
title: "Q257730: FIX: PrintForm Method of Form Containing UserControl Causes IPF"
permalink: /kb/257/Q257730/
---

## Q257730: FIX: PrintForm Method of Form Containing UserControl Causes IPF

{% raw %}

	Article: Q257730
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbCtrl kbPrinting kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbDSupport kbVS600sp4fi
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project crashes with an Invalid Page Fault (IPF) when you try to
	call the PrintForm method in a form containing a UserControl. This behavior
	occurs when trying to print to a postscript printer from Microsoft Windows 95 or
	Microsoft Windows 98. The error message is similar to the following:
	
	  This program has performed an illegal operation and will be shutdown.
	
	Clicking on Details may reveal text similar to the following:
	
	  VB6 caused a general protection fault in module PSCRIPT.DRV at 0004:00000020.
	
	This problem does not occur on non-postscript printers.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton control to Form1.
	
	3. From the File menu, select Add Project to add a new ActiveX Control project
	  to the project group.
	
	4. Add a PictureBox control to UserControl1 and make sure that the AutoRedraw
	  property of PictureBox1 is set to True.
	
	5. Paste the following code into the code window of Usercontrol1:
	
	  Private Sub UserControl_Initialize()
	      Picture1.Line (0, 0)-(2000, 2000)
	  End Sub
	
	6. Close the design window of the UserControl and add a UserControl1 to Form1 in
	  Project1.
	
	7. Paste the following code into Form1's code window:
	
	  Private Sub Command1_Click()
	      Me.PrintForm
	  End Sub
	
	8. Run the project and click the CommandButton. Note that the Invalid Page Fault
	  occurs.
	
	Additional query words: sp4 GPF
	
	======================================================================
	Keywords          : kbprint kbCtrl kbPrinting kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
