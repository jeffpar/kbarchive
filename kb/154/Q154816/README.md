---
layout: page
title: "Q154816: HOWTO: Determine if DBCombo MatchEntry Property is Read-only"
permalink: /kb/154/Q154816/
---

## Q154816: HOWTO: Determine if DBCombo MatchEntry Property is Read-only

	Article: Q154816
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to determine whether the MatchEntry property of the
	DBCombo is read-only. When setting the MatchEntry property of a DBCombo control
	to "1 - Extended Matching"(at run time or design time), Visual Basic may report
	that the "Property is read-only."
	
	MORE INFORMATION
	================
	
	Extended Matching may be used only when the DBCombo control has the Style
	property set to "2 - Dropdown List." This restriction is not documented.
	
	Additionally, there is a bug in the Custom Properties dialog of the 32-bit
	DBCombo control. The Custom Properties dialog reports "Property is read only" if
	both the style is changed to "2 - Dropdown List," the MatchEntry property is
	changed to "1 - Extended Matching," and then the changes are applied. This error
	is not reported if the style is changed and applied first followed by changing
	and applying the MatchEntry property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
