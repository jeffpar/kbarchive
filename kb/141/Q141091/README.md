---
layout: page
title: "Q141091: BUG: SSCommand Control Generates Application Error"
permalink: /kb/141/Q141091/
---

## Q141091: BUG: SSCommand Control Generates Application Error

{% raw %}

	Article: Q141091
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error or general protection (GP) fault ending the Visual Basic
	design environment occurs when the Picture property of a SSCommand (3D command
	button) control is set to the default property of a PictureBox control located
	on another form, and the running application is stopped using only the End
	button on the Toolbar.
	
	The bug occurs if you have a Visual Basic application containing one form with a
	SSCommand control and another form with a PictureBox control. The Picture
	property of the SSCommand control is set to the default property of the
	PictureBox control. The PictureBox control's default property is its Picture
	property.
	
	When you run the application in the Visual Basic design environment and you click
	the End button on the Toolbar to stop the application, an error message displays
	and Visual Basic ends. Note that the Close button on the form with the SSCommand
	control is not clicked.
	
	RESOLUTION
	==========
	
	The workaround is to set the Picture property of the SSCommand control by
	explicitly specifying the Picture property of the PictureBox control. Do NOT use
	the default property of the PictureBox control to set the Picture property of
	the SSCommand control. An example of this is shown below in the code in the More
	Information section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following shows you how to reproduce the bug:
	
	Steps to Reproduce Bug
	----------------------
	
	1. Start Visual Basic 4.0, or if it is already running, click New Project on the
	  File menu.
	
	2. Click Custom Controls on the Tools menu. Click the Sheridan 3D Controls check
	  box in the Custom Controls dialog box. Click OK to close the dialog box.
	
	3. Add a SSCommand control to the Form1 form.
	
	4. Add the following code to the Form1 code window:
	
	     Private Sub SSCommand1_Click()
	
	        'Set the SSCommand button's Picture property to the PictureBox
	        'control's default property as below:
	        SSCommand1.Picture = Form2.Picture1
	
	        'The workaround is to explicitly specify the PictureBox control's
	        'Picture property. Use the following code instead:
	        'SSCommand1.Picture = Form2.Picture1.Picture
	
	     End Sub
	
	5. Add a second form to your project by clicking Form in the Insert menu.
	
	6. Add a PictureBox control to Form2 form.
	
	7. Set the PictureBox control's Picture property to any bitmap or icon file
	  stored on your computer as follows:
	
	  a. In the PictureBox control's Properties Window, click the button with an
	     ellipsis (...) to display the Load Picture dialog box.
	
	  b. Double-click any listed bitmap (.bmp) or icon (.ico) file.
	
	8. Press the F5 key or click Start on the Run menu to start the Visual Basic
	  program. Click the Command1 button. The caption changes to bitmap graphic you
	  selected. Click the End button in the toolbar to stop the project. An
	  application error occurs with one of the following messages displayed and
	  Visual Basic ends:
	
	
	  Windows 2000
	
	     32-bit: No Errors, appreas to work okay.
	
	     16-bit: VB caused a General Protection Fault in module VB.Exe at
	             0023:39FF.
	
	  Windows NT 3.51:
	
	     32-bit: An application error has occurred and an application error
	             log is being generated. VB32.Exe Exception: access violation
	             (oxc0000005), Address: 0x0046e951.
	
	     16-bit: VB caused a General Protection Fault in module VB.Exe at
	             0023:39FF.
	
	  Windows 95:
	
	     32-bit: VB32 caused an invalid page fault in module VB32.Exe at
	             0137:0046e951.
	     16-bit: VB caused a general protection fault in module VB.Exe at
	             0023:000039ff.
	
	  Windows 98:
	
	     32-bit: VB32.EXE caused an invalid page fault in module VB32.Exe at
	             015f:0046e951.
	     Or:
	             VB32.EXE caused an invalid page fault in module KERNEL32.DLL
	             at 015f:bff7b9e3.
	
	     16-bit: Same as Windows 95.
	
	  Windows (and Windows for Workgroups) 3.11:
	
	     VB caused a General Protection Fault in module VB.Exe at 0023:39FF.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
