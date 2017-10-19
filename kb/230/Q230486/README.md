---
layout: page
title: "Q230486: PRB: Cannot Have Secondary Y Axis with MSChart XY Scatterchart"
permalink: /kb/230/Q230486/
---

## Q230486: PRB: Cannot Have Secondary Y Axis with MSChart XY Scatterchart

	Article: Q230486
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an XY scatterchart using MSChart and then attempt to specify a
	secondary Y axis, you are unable to do so.
	
	CAUSE
	=====
	
	This is a limitation of the MSChart control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps demonstrate that no option is available for a secondary Y
	axis for an XY scatterchart.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Properties menu, choose Components, then select either "Microsoft
	  Chart Control (OLEDB)" or "Microsoft Chart Control" and then click OK.
	
	3. Place an instance of the MSChart control on Form1.
	
	4. Right-click the Chart control and choose Properties from the short-cut menu.
	
	5. Select the Series tab.
	
	6. Note that the check box labeled: "Plot on 2nd Y axis" is available at this
	  point.
	
	7. Select the Chart tab.
	
	8. In the Chart Type list, select "X Y (Scatter)."
	
	9. Select the Series tab.
	
	Notice the "Plot on 2nd Y axis" check box is now unavailable. It is dimmed
	because you have chosen an XY chart type. You are not allowed to specify a
	secondary axis for an XY chart - either manually or programmatically. There is
	no workaround for this limitation. If you must have a secondary Y axis with the
	MSChart control, you cannot use an XY chart. You must use a Line chart type.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
