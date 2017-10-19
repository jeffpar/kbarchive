---
layout: page
title: "Q161667: WD97: Tab Spacing Incorrect in Online Layout View"
permalink: /kb/161/Q161667/
---

## Q161667: WD97: Tab Spacing Incorrect in Online Layout View

	Article: Q161667
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Tab spacing appears incorrect when you view your document in online layout view.
	Tab spacing is displayed correctly in all other views.
	
	CAUSE
	=====
	
	The "Enlarge fonts less than" option, located on the View tab (click Options on
	the Tools menu), is set to a point size that is larger than the point size used
	in the document. The default setting for "Enlarge fonts less than" is 12
	points.
	
	Online layout view optimizes the document layout to make online reading easier.
	Text will appear larger and wrap to fit the window, rather than the way it will
	actually print. To switch to online layout view, click Online Layout on the View
	menu.
	
	RESOLUTION
	==========
	
	Method 1: Change the document formatting
	----------------------------------------
	
	NOTE: This method is preferred if you are creating a document for online
	viewing.
	
	Format your document using a font size larger than 12 points (the default setting
	for the "Enlarge fonts less than" option).
	
	Method 2: Change the "Enlarge fonts less than" value
	----------------------------------------------------
	
	1. On the View menu, click Online Layout.
	
	2. On the Tools menu, click Options, and then click the View tab.
	
	3. Under Window, change the "Enlarge fonts less than" option to a value equal to
	  or less than the smallest font used in the document. Click OK.
	
	NOTE: This setting does not change the document and it is not stored with the
	document. It only affects how the document displays in online layout view on
	your computer. Other users who view your document need to adjust this setting on
	their computers if the document does not display correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
