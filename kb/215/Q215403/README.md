---
layout: page
title: "Q215403: BUG: VBCE Design Time HelpContextID Not Persisted at Run Time"
permalink: kb/215/Q215403/
---

## Q215403: BUG: VBCE Design Time HelpContextID Not Persisted at Run Time

	Article: Q215403
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the HelpContextID property at design time on controls that ship
	with the ActiveX Control Pack, the property returns 0 when read at run time.
	This behavior occurs when the application is run on the remote device and in the
	emulator.
	
	RESOLUTION
	==========
	
	If the HelpContextID property is set at run time, it returns the correct value
	when it is read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior only occurs in the Windows CE Platform. The following controls
	exhibit this behavior: Grid, ListView, PictureBox, TabStrip, and TreeView.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components, and then add the Microsoft CE
	  PictureBox Control 6.0 to the project.
	
	3. Add a PictureBox control to Form1.
	
	4. In the Properties window, set the HelpContextID property of PictureBox1 to 1.
	
	5. Add the following code behind Form1:
	
	  Private Sub Form_Activate()
	      ' Uncommenting the following line of code will allow the
	      ' HelpContextID property to return the expected value
	      ' PictureBox1.HelpContextID = 1
	      MsgBox "Expected = 1" & vbCrLf & "Actual = " & PictureBox1.HelpContextID
	  End Sub
	
	6. Press the F5 key to run the program. Note that the expected and actual values
	  differ.
	
	After uncommenting the line of code in the preceding sample that sets the
	HelpContextID property and running the application again, the expected and
	actual values are identical.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q192459 INFO: VBCE Unsupported Controls, Properties, Methods, and Events
	
	Additional query words: vbce vbce6 helpcontext
	
	======================================================================
	Keywords          : kbfile kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
