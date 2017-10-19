---
layout: page
title: "Q158800: PRB: Duplicate Entries While Browsing in Class Browser"
permalink: /kb/158/Q158800/
---

## Q158800: PRB: Duplicate Entries While Browsing in Class Browser

	Article: Q158800
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp500
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Browse Vfp.exe with an Object or Class Browser. Scroll down the list of objects
	and note that there are many duplicates, for example, Visible, Caption, and so
	forth.
	
	STATUS
	======
	
	This behavior is by design. If the property is read/write, there is one entry
	for read and one for write.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Class Browser.
	
	2. Open Vfp.exe.
	
	  The FoxServer list appears on the right side.
	
	3. Expand the lApplication branch.
	
	4. Scroll down and watch the list of objects--there are many duplicates.
	
	Additional query words: VFoxWin Public kbdse
	
	======================================================================
	Keywords          : kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
