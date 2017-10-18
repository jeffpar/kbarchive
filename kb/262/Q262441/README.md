---
layout: page
title: "Q262441: PRB: Run-Tme Error Message '400' : Form already displayed....&quot;"
permalink: kb/262/Q262441/
---

## Q262441: PRB: Run-Tme Error Message '400' : Form already displayed....&quot;

	Article: Q262441
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCmnCtrls kbCtrl kbSDKWin32 kbTabCtrl kbVBp kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to display a modal dialog box window in the Click event of a
	TabStrip control from Microsoft Windows Common Controls 6.0 Service Pack 3
	(SP3), you receive the following error message:
	
	  Run-time error '400' :
	  Form already displayed ; can't show modally.
	
	This message appears only with the service pack 3 version of Mscomctl.ocx.
	
	
	CAUSE
	=====
	
	This behavior occurs because the mouse capture is not released, so all of the
	mouse inputs still go to the TabStrip control window instead of the modal
	window.
	
	RESOLUTION
	==========
	
	Make a call to the ReleaseCapture API function before displaying the modal form.
	This releases the mouse capture from the TabStrip control window and restores
	normal mouse input processing.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is added by default.
	
	2. From the Project menu, add another form, Form2, to the project.
	
	3. On the Project menu, click Components, click to select Microsoft Windows
	  Common Controls 6.0 (SP3) on the Components dialog box, and then click OK.
	
	4. Add a TabStrip control to Form1 from the Toolbox.
	
	5. In the General Declarations section for Form1, paste the following code:
	
	  Private Sub TabStrip1_Click()
	      Form2.Top = Form1.Top + Form1.Height
	      Form2.Show vbModal
	  End Sub
	
	6. Run the project and click the TabStrip control to display Form2.
	
	7. Click the TabStrip control again and note that the error described in the
	  "Symptoms" section is displayed.
	
	Workaround 
	----------
	
	1. To work around the problem, paste the following API declaration in the
	  general Declaration Section for Form1:
	
	  Private Declare Function ReleaseCapture Lib "user32" Alias _
	    "ReleaseCapture" () As Long
	
	2. Modify the TabStrip1_Click event on Form1 as follows:
	
	  Private Sub TabStrip1_Click()
	     ReleaseCapture
	     Form2.Show vbModal
	  End Sub
	
	3. Run the test again and note that the error does not appear.
	
	Additional query words: 400
	
	======================================================================
	Keywords          : kbAPI kbCmnCtrls kbCtrl kbSDKWin32 kbTabCtrl kbVBp kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
