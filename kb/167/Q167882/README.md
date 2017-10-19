---
layout: page
title: "Q167882: WD97: Pleading Wizard Stops If Visual Basic Editor Window Open"
permalink: /kb/167/Q167882/
---

## Q167882: WD97: Pleading Wizard Stops If Visual Basic Editor Window Open

	Article: Q167882
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a new document based on the Pleading Wizard, the
	following error message appears:
	
	  The Wizard cannot use the active document. To run the wizard, choose New from
	  the File menu, and select Legal Pleading Wizard.
	
	If you click OK, the wizard stops.
	
	CAUSE
	=====
	
	The Wizard stops because the Visual Basic for Applications Editor window is
	open.
	
	WORKAROUND
	==========
	
	To work around this problem, close the Visual Basic for Applications Editor
	window before you create a new document based on the Pleading Wizard, using
	these steps:
	
	1. Switch to the Visual Basic for Applications Editor by pressing ALT+F11.
	
	2. On the File menu, click "Close and Return to Microsoft Word."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 97 word8 word97 8.0
	
	======================================================================
	Keywords          : kberrmsg kbtool kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
