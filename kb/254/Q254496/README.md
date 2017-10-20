---
layout: page
title: "Q254496: HOWTO: Change Printer Settings for Kodak Image Edit Control"
permalink: /kb/254/Q254496/
---

## Q254496: HOWTO: Change Printer Settings for Kodak Image Edit Control

{% raw %}

	Article: Q254496
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbCtrl kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PrintImage method of the Image Edit control simply uses the system default
	printer, and does not provide an option to change printers or to change
	settings. This article describes how to make these changes by using the
	ImageAdmin control.
	
	MORE INFORMATION
	================
	
	The Wang (Kodak) controls, including ImageEdit and ImageAdmin, do not ship with
	Visual Basic, but are included with some versions of Microsoft Windows. The
	later versions of the Wang controls are renamed as the Kodak controls.
	
	Step by Step Example
	--------------------
	
	Please note that you need to change the .Image property below to a file that is
	available on your computer.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, check either the Wang Image Edit
	  control or the Kodak Image Edit control, and then click OK.
	
	3. From the Project menu, select Components, check either the Wang Image Admin
	  control or the Kodak Image Admin control, and then click OK.
	
	4. Add an instance of the Wang (Kodak) Image Edit control to Form1.
	
	5. Add an instance of the Wang (Kodak) Image Admin control to Form1.
	
	6. Add a CommandButton to the form.
	
	7. Add the following code to the form:
	
	  Private Sub Command1_Click()
	      With ImgEdit1
	          ' change <myfile> to a file on your system
	          .Image = "<myfile>"
	          .Display
	          ImgAdmin1.Image = .Image
	          ImgAdmin1.ShowPrintDialog Form1.hWnd
	          .PrintImage 1, 1, 0
	      End With
	  End Sub
	
	8. Run the project and click Command1. You should see the printer dialog, and
	  the image should print with the options and printer you selected.
	
	REFERENCES
	==========
	
	For additional information on using the Wang (Kodak) ImageEdit control, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q230489 HOWTO: Annotate Image with Text Using ImageEdit Control
	
	  Q197129 INFO: Wang Image Control Limited to 18k Pixels in Ea. Dimension
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbCtrl kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
