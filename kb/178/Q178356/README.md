---
layout: page
title: "Q178356: Mail Merge May Affect Existing Toolbars"
permalink: kb/178/Q178356/
---

## Q178356: Mail Merge May Affect Existing Toolbars

	Article: Q178356
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When performing a mail merge in Word 97, toolbars and custom icons may either be
	moved from their normal location or may fail to display in the current
	document.
	
	Case 1
	------
	
	When performing a mail merge, Word 97 will try to automatically dock the Mail
	Merge toolbar in the third position, below the Standard and Formatting toolbars
	(if only one of these toolbars is displayed, the Mail Merge toolbar will be
	docked in the second position).
	
	All other docked toolbars may either be moved to the right of or below the Mail
	Merge toolbar. When the mail merge is complete, Word may not automatically
	restore the moved toolbars to their previous locations.
	
	Case 2
	------
	
	When creating a mail merge document based on a custom template that contains a
	custom toolbar, the custom toolbar may not be displayed in the new merge
	document (for example, this problem will occur with Form Letter 1). This problem
	will not occur if the custom toolbar is saved in the Normal template.
	
	In both of these cases, this is new behavior from the previous version of Word,
	which inserts the Mail Merge toolbar below all existing toolbars and displays
	all custom toolbars.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
