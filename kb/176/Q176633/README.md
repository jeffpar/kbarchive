---
layout: page
title: "Q176633: PRB: Axis Text on MSChart Control Appears Illegible"
permalink: /kb/176/Q176633/
---

## Q176633: PRB: Axis Text on MSChart Control Appears Illegible

	Article: Q176633
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text on the axes of a 3D chart on an MS Chart control becomes almost
	illegible even if a True Type font is used with the text.
	
	RESOLUTION
	==========
	
	Experiment with different font sizes and styles to get the best resolution for
	rotated text. Generally, the axis text is more legible with larger fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, you need to reference the MS Chart control in your
	project.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the MS Chart control to your project. The default chart is a 2D bar
	  chart.
	
	3. Change the chartType property of the MS Chart to any 3D chart. Note that the
	  axis text is illegible.
	
	The Microsoft Chart control is based on First Impressions by Visual Components.
	You can obtain a trial or full version of First Impressions at the following web
	site:
	
	- http://www.visualcomp.com/products/fi.htm
	
	First Impressions is manufactured by Visual Components, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: z-axis y-axis x-axis z axis y x graph 
	readable rotate kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
