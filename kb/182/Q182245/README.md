---
layout: page
title: "Q182245: WD97: Word Hangs When Creating New Template from Custom Template"
permalink: kb/182/Q182245/
---

## Q182245: WD97: Word Hangs When Creating New Template from Custom Template

	Article: Q182245
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to create a new template based on a custom template (click New on
	the File menu, select your custom template, click Template under Create New, and
	then click OK), Microsoft Word may stop responding, or you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 014f:300b68e0
	
	CAUSE
	=====
	
	This problem occurs when you add a custom menu to a default toolbar in a custom
	template, and then try to create a new template based on that template.
	
	WORKAROUND
	==========
	
	Instead of adding your custom menu to a default toolbar in your template, add
	your custom menu to a custom toolbar.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q163547 WD97: How to Create Custom Toolbars and Toolbar Buttons
	
	  Q169870 WD: Customizing and Sharing Toolbars In Microsoft Word
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: hang hangs hanging hung crash crashes crashing crashed lock up locks locking locked lockup freeze freezes freezing froze frozen quit quitting quits stop stopping stopped fail fails failing failed auto break won't respond waiting IPF WINWORD EXE
	
	======================================================================
	Keywords          : kberrmsg kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
