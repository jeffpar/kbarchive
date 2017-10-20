---
layout: page
title: "Q195835: PRB: Images Are Not Exported From the Report Writer"
permalink: /kb/195/Q195835/
---

## Q195835: PRB: Images Are Not Exported From the Report Writer

{% raw %}

	Article: Q195835
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbReportWriter kbVBp600 kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When exporting a report with the Report Writer that contains an Image control,
	special characters or symbols are exported in place of the image.
	
	This problem also occurs with Shape controls.
	
	CAUSE
	=====
	
	The Report Writer is not designed to export images and/or shape controls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a DataEnvironment to the project:
	
	  1. Set the connection property to a DSN that connects to the NWIND database.
	
	  2. Add a command object that connects to the Categories table.
	
	3. Add a DataReport to the Project.
	
	4. Put an RptImage control on the report.
	
	5. Set the picture property of the control to Image located on your system.
	
	6. Drag the command1 object created in the DataEnvironment onto the report.
	
	7. Add the following code to Form1:
	
	         Private Sub Form_Load()
	           Set DataReport1.DataSource=DataEnvironment1
	           DataReport1.DataMember="command1"
	           DataReport1.Show
	         End Sub
	
	8. Press the F5 key to run the program.
	
	9. Press the Export button on the Report Designer.
	
	10. When prompted for a filename, give a name for the HTML file and click Save.
	
	11. Open the HTML file created above from Internet Explorer. Note that image is
	  not included in the HTML page, but rather replaced with special character or
	  symbols.
	
	Additional query words: kbDSupport kbdse
	
	======================================================================
	Keywords          : kbCtrl kbReportWriter kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
