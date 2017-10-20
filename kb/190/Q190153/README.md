---
layout: page
title: "Q190153: INFO: Remove Information About Unused ActiveX Controls"
permalink: /kb/190/Q190153/
---

## Q190153: INFO: Remove Information About Unused ActiveX Controls

{% raw %}

	Article: Q190153
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 6.0 offers a new option for projects:
	
	  "Remove information about unused ActiveX Controls."
	
	This article discusses how to use this option.
	
	MORE INFORMATION
	================
	
	The Make tab under the Project Properties menu has the following option:
	
	  "Remove information about unused ActiveX Controls"
	
	If this option is selected, any ActiveX controls that have been referenced but
	not sited within the project will not have their license information included in
	the final compiled executable.
	
	Visual Basic allows ActiveX controls to be dynamically loaded at run-time. This
	feature raises concerns about being able to load/use controls which a program
	legally should not be able to use.
	
	Visual Basic has two ways of using an ActiveX control legally:
	
	- Include the ActiveX control license within the compiled executable.
	
	- Load the license for an ActiveX control during run-time before loading the
	  actual control.
	
	Both ways ensure that the license for the control is checked (either during
	development or during run-time) prior to the control being used.
	
	A license that is included in a compiled executable will be part of the Licenses
	collection object.
	
	In order to add controls dynamically without concern about the License collection
	object, make sure that the "Remove information about unused ActiveX Controls"
	option is deselected.
	
	Adding an ActiveX Control During Run-time That Requires a License
	-----------------------------------------------------------------
	
	The following sample shows how to reference a control in Visual Basic and add it
	dynamically during run-time without having to use the Licenses collection
	object:
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu and select "Microsoft Hierarchical
	  FlexGrid Control 6.0 (OLEDB)."
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	
	           Dim ctlTest As VBControlExtender
	
	           ' add a control dynamically to this form
	           Set ctlTest = Form1.Controls.Add _
	           ("MSHierarchicalFlexGridLib.MSHFlexgrid","ctlTestControl")
	
	           ' position and show the form
	           ctlTest.Move 100, (Command1.Top + Command1.Height) + 100
	           ctlTest.Visible = True
	
	        End Sub
	
	        Private Sub Form_Load()
	
	           ' move the command1 button to the corner for appearance.
	           Command1.Move 100, 100
	
	        End Sub
	
	5. Compile the Project (Project1.Exe).
	
	6. Run the compiled Project.
	
	7. Click the "Command1" button. The following error will appear:
	
	  Run-time Error "731"
	
	  "In order to use "MSHierarchicalFlexGridLib.MSHFlexgrid", you must specify a
	  license string for the control. Use Licenses.Add to add the license string to
	  the Licenses collection."
	
	  Although "Microsoft Hierarchical Flexgrid Control 6.0 (OLEDB)" is referenced
	  within the project, the License information for the controls were removed
	  because none of the controls were sited on any forms. Running within the IDE
	  would result in run-time error "50153."
	
	8. In the design environment, select Project1 Properties from the Project menu,
	  then the "Make" tab on the Project1 Properties dialog.
	
	9. Make sure that the "remove information about unused ActiveX controls" option
	  is not selected.
	
	10. Make the project again.
	
	11. Run the compiled project.
	
	12. Click the "Command1" button. This time the Hierarchical Flexgrid Control
	  will be instantiated and will be sited on the form.
	
	REFERENCES
	==========
	
	For additional information about the Licenses Collection Object, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q188577 : HOWTO: What Is the Licenses Collection Used For?
	
	Additional query words: kbVBp600 kbControl kbVBp kbdsd kbDSupport kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
