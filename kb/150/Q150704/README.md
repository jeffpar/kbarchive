---
layout: page
title: "Q150704: FIX: Toolbar Button Count Is Wrong if Image Index is Invalid"
permalink: /kb/150/Q150704/
---

## Q150704: FIX: Toolbar Button Count Is Wrong if Image Index is Invalid

{% raw %}

	Article: Q150704
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Count property value of the Toolbar Buttons collection is not correct when a
	button without an image is shown on the Toolbar control.
	
	CAUSE
	=====
	
	This behavior occurs if an Invalid image parameter is used with the Add method
	on an ImageList control. The ImageList control supplies the images for the
	buttons on the Toolbar control.
	
	RESOLUTION
	==========
	
	Use a valid Image index number.
	
	-or-
	
	If you want a button to show without an image, trap the error and leave out the
	Image parameter in the Add method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 32-bit edition of Visual Basic 4.0. If it is already running, from
	  the File menu, select New Project.
	
	2. Add a Toolbar control, an Image List control, and a Command button to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Dim i As Integer
	           Dim ImgX As ListImage
	           Dim tbButton As Button
	
	           Set ImgX = ImageList1.ListImages.Add(, , _
	                   LoadPicture("C:\Visual Basic\Icons\Industry\bicycle.ico"))
	           ' Modify the argument for the LoadPicture function to point to
	           ' directory containing an icon.
	
	           On Error Resume Next
	           Form1.Toolbar1.ImageList = ImageList1
	
	           ' Comment the next line to workaround problem.
	           Set tbButton = Form1.Toolbar1.Buttons.Add(1, , "Node1", , 2)
	
	           ' Uncomment one of the following lines to workaround problem.
	           ' Uncomment this line if you want the image to appear on the
	           ' button.
	           ' Set tbButton = Form1.Toolbar1.Buttons.Add(1, , "Node1", , 1)
	
	           ' Uncomment this line if you want a blank button
	           ' Set tbButton = Form1.Toolbar1.Buttons.Add(1, , "Node1")
	           MsgBox "Number of Buttons according to Count Property: " & _
	                   Toolbar1.Buttons.Count
	
	        End Sub
	
	4. On the Run menu, select Start, or press the F5 key. Click the Command button.
	  A button appears on the Toolbar but the message box indicates no buttons on
	  the Toolbar.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
