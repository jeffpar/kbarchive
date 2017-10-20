---
layout: page
title: "Q223108: FIX: Setting MSChart's AxisScale Type to Logarithmic Hangs VB"
permalink: /kb/223/Q223108/
---

## Q223108: FIX: Setting MSChart's AxisScale Type to Logarithmic Hangs VB

{% raw %}

	Article: Q223108
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Plot.Axis(1).AxisScale.Type property of the MSChart control to
	Logarithmic causes Visual Basic 6.0 to hang.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic 6.0 Standard EXE project. Form1 is created by
	  default.
	
	2. On the Project Menu, click Components. Select Microsoft Chart 6.0 Control
	  (OLEDB) and click OK.
	
	3. Add an MSChart control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Click()
	     MSChart1.Plot.Axis(1).AxisScale.Type = VtChScaleTypeLogarithmic
	  End Sub
	
	5. Run the project. Click on Form1 and note that the project hangs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
