---
layout: page
title: "Q110174: WD97: Preserving Text When Re-protecting a Form Without Macros"
permalink: /kb/110/Q110174/
---

## Q110174: WD97: Preserving Text When Re-protecting a Form Without Macros

	Article: Q110174
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a form with information entered in the fields is manually unprotected and
	re-protected, the information is lost and the form fields are reset to their
	default settings.
	
	WORKAROUND
	==========
	
	Locking text form fields prior to protecting the form prevents the entered text
	from being lost if the form is unprotected and re- protected. To lock a text
	field, follow these steps:
	
	1. Select the field.
	
	2. Press CTRL+F11.
	
	NOTE: If Help for WordPerfect Users is selected, CTRL+F11 will not function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The information in text fields will not be lost when the document is protected
	again, and the fields will function as usual while the form is being filled out
	in protected mode.
	
	WARNING: This workaround preserves only text fields. Check boxes and drop-down
	list selections are still lost when you unprotect and re- protect the field. A
	calculation field will no longer be updated and will maintain the current value
	until unlocked, even if it is printed or if a macro is run to update it.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181108 WD97: Form Fields Lose Text When Protected for Forms
	
	Additional query words: losing deleting delete field formtext tools lost forms
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
