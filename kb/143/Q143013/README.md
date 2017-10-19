---
layout: page
title: "Q143013: PPT7: After Build Step Fails in Slide Show"
permalink: /kb/143/Q143013/
---

## Q143013: PPT7: After Build Step Fails in Slide Show

	Article: Q143013
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run your presentation in slide show view, some of the objects in your
	presentation (text boxes, pictures, drawing objects) may be built incorrectly.
	
	CAUSE
	=====
	
	This problem may occur when the animation settings for the object includes the
	following:
	
	- The "Start When Previous Build Ends" check box is selected (under "Build
	  Options"
	
	- A setting is selected in the "After Build Step" drop-down box
	
	If you use these two options with the same object, the After Build Step will
	fail.
	
	RESOLUTION
	==========
	
	Use one or the other of these options. That is, if you want to use the the
	"After Build Step" option, clear the "Start When Previous Build Ends" check box
	(under Build Options).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PowerPoint version 7.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 7.00 ppt powerpt powerpnt dim change color
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
