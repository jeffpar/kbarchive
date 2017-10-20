---
layout: page
title: "Q138537: HOWTO: Print the Contents of an ImageList Control to a Form"
permalink: /kb/138/Q138537/
---

## Q138537: HOWTO: Print the Contents of an ImageList Control to a Form

{% raw %}

	Article: Q138537
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 introduces a new control called the ImageList control that
	holds an array of pictures or icons. Although this control is primarily used by
	other controls, such as the TreeView and Toolbar control, that require an image
	list control, it can be used to simply store pictures for your graphics methods.
	PaintPicture can be used with the image list control to paint a picture onto a
	picture box or form. The example in this article demonstrates how to use the
	image list control as a stand-alone image repository.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	To create a new application that prints all of the pictures in an image list
	control to the form, follow these steps:
	
	1. Place a command button and image list control on a form.
	
	2. Load the image list control with several images.
	
	3. Add the following code to the Click event of the command button:
	
	     Private Sub Command1_Click()
	         Dim i As Integer
	         AutoRedraw = True
	         ScaleMode = vbPixels
	         With ImageList1
	             For i = 1 To .ListImages.Count
	                 PaintPicture .ListImages(i).Picture, 0, i * .ImageHeight
	             Next i
	         End With
	     End Sub
	
	4. Run the project, and click the command button.
	
	Additional query words: kbVBp400 imagelist paintpicture listimages kbCtrl kbVBp kbDSupport kbdsd
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
