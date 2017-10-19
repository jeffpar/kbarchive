---
layout: page
title: "Q94185: FIX: VB MCITEST CD Player Sample Displays Incorrect Track"
permalink: /kb/094/Q94185/
---

## Q94185: FIX: VB MCITEST CD Player Sample Displays Incorrect Track

	Article: Q94185
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CD Player component of the MCITEST.MAK sample program incorrectly displays
	random numbers in the field labeled "Track."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the MCITEST sample application
	supplied with the Professional Edition of Microsoft Visual Basic for Windows,
	version 2.0. This problem was corrected in Microsoft Visual Basic version 3.0
	for Windows.
	
	MORE INFORMATION
	================
	
	To correct the above problem, add the following code to module GLOBAL.BAS:
	
	      Global Const MCI_FORMAT_TMSF = 10
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Visual Basic.
	
	2. From the File menu, select Open Project (press ALT, F, O). Select MCITEST.MAK
	  from the directory VB\SAMPLES\MCI, where "VB" is subdirectory where Visual
	  Basic is located.
	
	3. From the Run menu, select Start.
	
	4. From the Devices menu, select CDAudio, click the Load button, and click the
	  Play button. The track number starts at 1, then incorrectly displays random
	  numbers.
	
	Additional query words: buglist2.00 fixlist3.00 2.00 3.00 multimedia
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
