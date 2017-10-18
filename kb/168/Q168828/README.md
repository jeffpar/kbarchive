---
layout: page
title: "Q168828: PRB: Gauge Control Fill Area Flickers"
permalink: kb/168/Q168828/
---

## Q168828: PRB: Gauge Control Fill Area Flickers

	Article: Q168828
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Gauge Control with the style property (linear filled) set to 0, Horizontal
	Bar, or 1, Vertical Bar, will appear to flicker.
	
	CAUSE
	=====
	
	The cause of this problem has not been determined.
	
	RESOLUTION
	==========
	
	There is no known workaround at this time.
	
	STATUS
	======
	
	The information in this article is preliminary and has not been confirmed by
	Microsoft. Microsoft is researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Create a new project. Form1 is created by default.
	
	2. Place a gauge control on the form by selecting Tools menu, Custom Controls,
	  and choosing the MicroHelp Gauge Control.
	
	3. Set the Gauge style property to 1, Vertical Bar.
	
	4. Place a Horizontal Scroll Bar on the form.
	
	5. In the change event of the Horizontal Scroll Bar, place the following code.
	
	        Gauge1.value = Hscroll1.value
	
	6. Execute the Program.
	
	7. Click and hold the Horizontal Scroll Bar small change arrow. Note that the
	  gauge control flickers as the fill area grows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
