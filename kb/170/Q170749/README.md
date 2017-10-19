---
layout: page
title: "Q170749: INFO: What Window Position Values in Some INI Variables Mean"
permalink: /kb/170/Q170749/
---

## Q170749: INFO: What Window Position Values in Some INI Variables Mean

	Article: Q170749
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some variables in the initialization files require window position values. The
	meaning of these values are undocumented and, therefore, described in this
	article.
	
	MORE INFORMATION
	================
	
	You may see some of these variables in your ss.ini file:
	
	  Visual_Merge_Rect
	  Position_Toolbar
	  Hist_Rect
	  Visual_Diff_Rect
	
	For example:
	
	  Visual_Merge_Rect (PC) = 139, 172, 876, 654, 1024, 768.
	  Hist_Rect (PC) = 233, 206, 766, 542, 1024, 768
	
	The values of the variables, represented in pixels, are translated as follows:
	
	  .ini File Setting = LEFT, TOP, WIDTH, HEIGHT, SCREEN RESOLUTION WIDTH,
	  SCREEN RESOLUTION HEIGHT
	
	Reference coordinates are measured from the top-left corner of the computer
	screen.
	
	REFERENCES
	==========
	
	For more information on .ini variables, refer to the User's guide and Online
	Help. Additionally, see the following article in the Microsoft Knowledge Base:
	
	  Q140316 INFO: All Variable Settings for Visual SourceSafe .INI File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
