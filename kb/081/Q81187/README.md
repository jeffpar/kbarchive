---
layout: page
title: "Q81187: BUG: Gauge Custom Control: Valid NeedleWidth Range 1 to 32767"
permalink: kb/081/Q81187/
---

## Q81187: BUG: Gauge Custom Control: Valid NeedleWidth Range 1 to 32767

	Article: Q81187
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Professional Toolkit for Microsoft Visual Basic programming system for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add the Gauge custom control control to a form, the NeedleWidth
	property incorrectly displays a value of 0 in the Settings box on the Properties
	bar. After running the Visual Basic application, the Settings box will display
	the correct default value of 1, unless the property was modified during run
	time.
	
	RESOLUTION
	==========
	
	The valid range for the NeedleWidth property of the Gauge custom control is 1 to
	32,767. Attempting to set the NeedleWidth property to a value outside this range
	resets the value to 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Gauge custom control provided
	with the Microsoft products listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Add the GAUGE.VBX file to your project by choosing Add File (CTRL+F12) from
	  the File menu and selecting GAUGE.VBX from the appropriate directory.
	
	3. Add the Gauge control to Form1.
	
	4. Select the NeedleWidth property from the Properties list box to display the
	  default NeedleWidth value. Note that the value is set to 0, which is outside
	  the valid range of this property.
	
	5. From the Run menu, choose Start (ALT, R, S) to run the program.
	
	6. Double-click the form's Control box to end the application.
	
	7. Again, select the NeedleWidth property from the Properties list box to
	  display the default NeedleWidth Value. Note that the value is now set to 1.
	
	Additional query words: buglist1.00 buglist2.00 buglist3.00 1.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	
