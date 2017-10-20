---
layout: page
title: "Q230489: HOWTO: Annotate Image with Text Using ImageEdit Control"
permalink: /kb/230/Q230489/
---

## Q230489: HOWTO: Annotate Image with Text Using ImageEdit Control

{% raw %}

	Article: Q230489
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When displaying an image in the Wang (Kodak) ImageEdit control, you might want
	to add text to the image. This article illustrates how this can be accomplished.
	
	MORE INFORMATION
	================
	
	The Wang (Kodak) controls, including ImageEdit, do not ship with Visual Basic,
	but are included with some versions of Windows. The later versions of the Wang
	controls are renamed as the Kodak controls. See the REFERENCES section below for
	more information.
	
	The following code example demonstrates how to accomplish this using the
	Annotation features of the control. Please note that you will need to change the
	.Image property to a file that resides on your computer.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, select either the Wang Image Edit
	  Control or the Kodak Image Edit Control and click OK.
	
	3. Add an instance of the Wang (Kodak) ImageEdit control to Form1.
	
	4. Add the following code to Form1:
	
	     With ImgEdit1 
	
	        ' select a path to an image on your system
	        .Image = "E:\tiffWANG\Simplicity1024.tif"
	        .Display
	        .AnnotationType = wiTextStamp
	        .AnnotationFontColor = vbGreen
	        .AnnotationStampText = "KILROY WAS HERE!"
	        .Draw 10, 10
	        .AnnotationType = wiNone
	     End With
	
	REFERENCES
	==========
	
	For additional information about the Wang (Kodak) ImageEdit control, please see
	the following article in the Microsoft Knowledge Base:
	
	Q197129 INFO: Wang Image Control Limited to 18k Pixels in Ea. Dimension
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
