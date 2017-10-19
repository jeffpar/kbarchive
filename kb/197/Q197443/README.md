---
layout: page
title: "Q197443: WD97: Err Message: &quot;Specified Text Is Not a Valid AutoText Name&quot;"
permalink: /kb/197/Q197443/
---

## Q197443: WD97: Err Message: &quot;Specified Text Is Not a Valid AutoText Name&quot;

	Article: Q197443
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbautotext word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you type the name of an AutoText entry and press F3 or click the Insert
	AutoText button on the toolbar, Word may beep and display the following message
	on the Status Bar:
	
	  The Specified text is not a valid AutoText name. Use Edit AutoText to create
	  AutoText entries.
	
	CAUSE
	=====
	
	This error occurs if you don't separate the AutoText entry name from the
	preceding or succeeding text with a space.
	
	WORKAROUND
	==========
	
	To work around this behavior, type a space before and after the AutoText name
	before pressing F3. For example, consider the AutoText entry named "mine":
	
	  mine|all mine   Pressing F3 with the insertion point in this
	                  position results in an error.
	
	  mine| all mine  Pressing F3 with the insertion point in this
	                  position inserts the AutoText.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbautotext word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
