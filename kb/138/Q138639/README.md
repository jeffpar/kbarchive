---
layout: page
title: "Q138639: &quot;Slides From Outline&quot; Command Causes &quot;Currently In Use&quot; Error"
permalink: kb/138/Q138639/
---

## Q138639: &quot;Slides From Outline&quot; Command Causes &quot;Currently In Use&quot; Error

	Article: Q138639
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In PowerPoint, when you attempt to create a slide from a Word outline by
	clicking Slides From Outline on the Insert menu, you may receive the following
	error message:
	
	  The file <file name> is currently in use. PowerPoint cannot modify it
	  at this time.
	
	CAUSE
	=====
	
	You will receive this error message if the Microsoft Word document outline is
	open in Microsoft Word.
	
	RESOLUTION
	==========
	
	To correct this problem, do either of the following:
	
	- Close the file in Microsoft Word.
	
	  -or-
	
	- Save the file with the Rich Text Format (.rtf) format, and then insert the
	  .rtf file into the PowerPoint presentation.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 7.00 text w_powerpt powerpnt import
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbusage 
	Technology        : kbWordSearch kbPowerPtSearch kbWord700Search kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbWord700
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	
