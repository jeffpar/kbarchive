---
layout: page
title: "Q253677: BUG: VBCE Application Terminates When Replacing ImageList Image"
permalink: /kb/253/Q253677/
---

## Q253677: BUG: VBCE Application Terminates When Replacing ImageList Image

{% raw %}

	Article: Q253677
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Replace method of the ImageList control, a Windows CE Toolkit for
	Visual Basic (VBCE) application may unexpectedly terminate. No errors are raised
	when the termination occurs. This problem only occurs when the application is
	run on the remote device.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior only occurs in the Windows CE Platform.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components, and then add the Microsoft CE
	  ImageList Control 6.0 to the project.
	
	3. Add an ImageList control to Form1.
	
	4. Add the following code behind Form1:
	
	  Private Sub Form_Click()
	      Dim i as Integer
	      ImageList1.Add "\windows\pyramid.bmp"
	      For i = 1 To 100
	          ImageList1.Replace 0, "\windows\tiles.bmp"
	      Next i
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. Click on Form1. Notice that Form1 disappears.
	
	Additional query words: wince vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
