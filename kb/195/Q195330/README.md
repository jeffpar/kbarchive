---
layout: page
title: "Q195330: WD97: How to Change Default Tabs Stops Globally"
permalink: kb/195/Q195330/
---

## Q195330: WD97: How to Change Default Tabs Stops Globally

	Article: Q195330
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to change the default tab stops so that every new
	document you create that is based on the Normal template will have the same
	default tab stop settings.
	
	MORE INFORMATION
	================
	
	When you change the Default Tab Stops option in the Tabs dialog box, Word sets
	the default tabs stops for the current document only. New documents will not
	reflect the change.
	
	When you create a new document based on the Normal template, the default tab stop
	settings occur every 0.5 inch. Therefore, to make certain all new documents have
	the same default tab settings, you must open the Normal.dot file and make the
	change to the template. Use the following instructions to modify your Normal
	template:
	
	1. On the File menu, click Open. Open Normal.dot.
	
	  NOTE: To determine the location of Normal.dot, click Options on the Tools
	  menu, click the File Locations tab, and note the path in the User Templates
	  setting.
	
	2. On the Format menu, click Tabs.
	
	3. Change Default Tab Stops to the value you want.
	
	4. Click OK.
	
	5. On the File menu, click Save.
	
	6. Close the template.
	
	Now when you create a new document (based on the Normal template), the default
	tab stops will be based on the change just made to the Normal template.
	
	NOTE: You can set the default tab stops in any template, following the above
	procedure, but instead of opening the Normal template, open the template you
	want and make the same changes in steps 2-5.
	
	Additional query words: set setting changing changes stop global globally defaulting defaults howto
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
