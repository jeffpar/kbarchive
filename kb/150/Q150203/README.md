---
layout: page
title: "Q150203: BUG: SizeGrip of Status Bar Paints Incorrectly in Windows NT"
permalink: kb/150/Q150203/
---

## Q150203: BUG: SizeGrip of Status Bar Paints Incorrectly in Windows NT

	Article: Q150203
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbGrpDSVB kbDSupport kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a status bar is placed on a form in Microsoft Visual Basic, and if the height
	of the status bar is made larger than the height of the SizeGrip, the SizeGrip
	incorrectly paints in the upper-right corner of the status bar when it should
	stay in the lower corner of the bar.
	
	This only applies when running under WINDOWS NT 3.5x.
	
	RESOLUTION
	==========
	
	There is no workaround to this problem other than avoiding it by keeping the
	status bar the same height as the SizeGrip.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Microsoft Visual Basic. Form1 is created by default.
	
	2. Draw a Statusbar on the form and make it very high.
	
	Notice that the SizeGrip is painted in the upper right hand corner of the bar.
	This behavior does not change when the project is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 3.5x vb4win vb432
	
	======================================================================
	Keywords          : kbVBp400bug kbGrpDSVB kbDSupport kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
