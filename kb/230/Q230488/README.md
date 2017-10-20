---
layout: page
title: "Q230488: HOWTO: Print the Contents of the Wang (Kodak) ImageEdit Control"
permalink: /kb/230/Q230488/
---

## Q230488: HOWTO: Print the Contents of the Wang (Kodak) ImageEdit Control

{% raw %}

	Article: Q230488
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbCtrl kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to print the image displayed in the Wang (Kodak)
	ImageEdit control.
	
	MORE INFORMATION
	================
	
	The Wang (Kodak) controls, including ImageEdit, do not ship with Visual Basic,
	but are included with some versions of Windows. The later versions of the Wang
	controls are renamed as the Kodak controls. See the REFERENCES section below for
	more information.
	
	The following code example demonstrates the basics of printing from this control.
	Please note that you will need to change the .Image property below to a file
	that is available on your computer.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, select either the Wang Image Edit
	  control or the Kodak Image Edit control, and click OK.
	
	3. Add an instance of the Wang (Kodak) ImageEdit control to Form1.
	
	4. Add the following code to Form1:
	
	  With ImgEdit1
	     .Image = "E:\tiffWANG\Simplicity1024.tif"
	     .Display
	     .PrintImage 1, 1, 0
	  End With
	
	There are a number of other printing features available with this control. It
	provides the ability to clip, rotate, zoom, size to page, and more. The best way
	to find more information is to access the Help file that comes with the control.
	The Help file can be accessed from the Visual Basic object browser, or by
	pressing the F1 key after selecting the control.
	
	REFERENCES
	==========
	
	For additional information about the Wang (Kodak) ImageEdit control, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q197129 INFO: Wang Image Control Limited to 18k Pixels in Ea. Dimension
	
	  Q230489 HOWTO: Annotate an Image with Text Using the Wang (Kodak) ImageEdit
	  Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbCtrl kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
