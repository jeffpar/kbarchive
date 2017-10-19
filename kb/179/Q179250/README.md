---
layout: page
title: "Q179250: BUG: Line and Shape Controls Not Visible on UserControl"
permalink: /kb/179/Q179250/
---

## Q179250: BUG: Line and Shape Controls Not Visible on UserControl

	Article: Q179250
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbgraphic kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl kbO
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Line or Shape controls are placed on a UserControl whose Backstyle property
	is set to Transparent, the controls do not appear. This problem occurs only on
	machines running Windows 95, Windows 98, or Windows Me.
	
	RESOLUTION
	==========
	
	Setting the BorderWidth property to a value greater than the default setting of
	1 allows the Line control to be drawn properly. This workaround applies only to
	the Line control. There is no workaround for the Shape Control at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project on a computer running Windows 95 or
	  Windows 98.
	
	2. Add a line control to UserControl1.
	
	3. Add a shape control (rectangle) to UserControl1.
	
	4. Set the Backstyle property of UserControl1 to "Transparent."
	
	5. Set the Backstyle property of the Shape Control to "Transparent."
	
	6. Close UserControl1's window.
	
	7. Add a Standard EXE project (select "Add Project" from the "File" menu).
	
	8. Place the UserControl on Form1 and note that Neither the Line nor the Shape
	  Control are visible.
	
	9. Run the project and note that the line and Shape Control are still not
	  visible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
