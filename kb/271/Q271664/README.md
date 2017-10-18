---
layout: page
title: "Q271664: BUG: Events with Names Containing Underscore Not Received in VB"
permalink: kb/271/Q271664/
---

## Q271664: BUG: Events with Names Containing Underscore Not Received in VB

	Article: Q271664
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbActivexEvents kbCOMt kbide kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A custom event containing an underscore character ( _ ) as part of the event's
	name is not received in a Visual Basic event handler. The Visual Basic
	integrated development environment (IDE) generates code for the event handler in
	the general section of the IDE and not for the object.
	
	CAUSE
	=====
	
	This is due to a limitation in the Visual Basic event processing code.
	
	RESOLUTION
	==========
	
	Do not use the underscore character as part of the name of a custom event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbActivexEvents kbCOMt kbide kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
