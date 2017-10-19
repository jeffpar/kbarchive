---
layout: page
title: "Q167880: WD97: Invalid Page Fault Dragging Copied Hyperlink"
permalink: /kb/167/Q167880/
---

## Q167880: WD97: Invalid Page Fault Dragging Copied Hyperlink

	Article: Q167880
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to drag a hyperlink, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at <address>
	
	CAUSE
	=====
	
	This problem occurs when you drag a hyperlink after you click Copy Hyperlink on
	the shortcut menu that appears when you right-click the hyperlink.
	
	RESOLUTION
	==========
	
	Use one of the following methods to copy a hyperlink:
	
	Method 1: Use the Copy Hyperlink command on the shortcut menu
	-------------------------------------------------------------
	
	1. Right-click the hyperlink, point to Hyperlink and then click Copy Hyperlink.
	
	2. Position the insertion point where you want to paste the hyperlink.
	
	3. Right-click and select Paste on the menu that appears.
	
	Method 2: Use the Copy command on the Edit menu
	-----------------------------------------------
	
	1. Select the hyperlink.
	
	2. On the Edit menu, click Copy.
	
	3. Position the insertion point where you want to paste the hyperlink. On the
	  Edit menu, click Paste.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kberrmsg word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
