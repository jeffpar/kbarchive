---
layout: page
title: "Q148260: BUG:RDC.Enabled False at Design Time Resets to True at RunTime"
permalink: /kb/148/Q148260/
---

## Q148260: BUG:RDC.Enabled False at Design Time Resets to True at RunTime

	Article: Q148260
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDBkbbuglist
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Remote Data Control Enabled property to false at design time will
	reset to true when running the program. To work around, set the Enabled property
	to False programmatically. For example: MSRDC1. Enabled equals False in the Form
	load event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	In addition to not being able to set the Enabled property to false at design
	time, no matter what the Enabled property is set to, the Remote Data Control
	never appears grayed.
	
	Steps to Reproduce the Error in Visual Basic 4.0 32-Bit
	-------------------------------------------------------
	
	1. Start 32-bit Visual Basic 4.0, or if it is already running, click New Project
	  on the File menu.
	
	2. Place a Remote Data Control on Form1.
	
	3. Set the Enabled property to False.
	
	4. In the form_click event place the following code:
	
	        MsgBox MSRDC1.Enabled
	
	5. Run the program.
	
	6. click on the Form.
	
	7. The Enabled property value prints out as True.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
