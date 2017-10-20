---
layout: page
title: "Q196860: WD97: Can't Rename or Delete File in Open Dialog Box (File Menu)"
permalink: /kb/196/Q196860/
---

## Q196860: WD97: Can't Rename or Delete File in Open Dialog Box (File Menu)

{% raw %}

	Article: Q196860
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to rename or delete a file in the Open dialog box (on the File
	menu, click Open) and you are viewing files in preview mode, you may receive the
	following error message:
	
	  Cannot rename [or delete] '<file name>': Access is denied.
	
	  Make sure the disk is not full or write-protected and that the file is not
	  currently in use.
	
	CAUSE
	=====
	
	This error occurs when the file you are trying to rename or delete does not
	contain a preview picture. Because this picture is absent, Word must open the
	file so that you can scroll through it in the Open dialog box. When the file is
	open, Word cannot display the properties.
	
	WORKAROUND
	==========
	
	Before you attempt to rename or delete a file, change the view from Preview to
	any other view (such as List, Details, or Properties) by clicking the
	appropriate button in the Open dialog box.
	
	NOTE: You may have to close and then reopen the Open dialog box before you can
	rename or delete a file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Preview picture allows a snapshot of the first page of the document to appear in
	the Open dialog box. You can save a preview picture of the document by clicking
	Properties on the File menu and clicking the Save Preview Picture check box to
	select it (the check box is in the lower-right corner of the Summary tab).
	
	Additional query words: thumbnail
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
