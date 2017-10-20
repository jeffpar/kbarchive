---
layout: page
title: "Q176631: DOCFIX: FlexGrid Constants Incorrect in Help and Books Online"
permalink: /kb/176/Q176631/
---

## Q176631: DOCFIX: FlexGrid Constants Incorrect in Help and Books Online

{% raw %}

	Article: Q176631
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Microsoft FlexGrid Control lists several constants for
	use with the ColAlignment property. These constants include:
	
	  flexAlignLeft
	  flexAlignRight
	  flexAlignCenter
	
	These constants are incorrectly documented. These constants are not defined
	within the Microsoft FlexGrid control and either have no effect when used or
	produce a compile error if "Option Explicit" is specified.
	
	MORE INFORMATION
	================
	
	To control the alignment within a column using the ColAlignment property, use
	the constants defined for the CellAlignment property. These constants include:
	
	  flexAlignLeftTop
	  flexAlignLeftCenter
	  flexAlignLeftBottom
	  flexAlignCenterTop
	  flexAlignCenterCenter
	  flexAlignCenterBottom
	  flexAlignRightTop
	  flexAlignRightCenter
	  flexAlignRightBottom
	  flexAlignGeneral
	
	STATUS
	======
	
	The documentation has been updated in Visual Basic 6.0.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	
	=============================================================================
	

{% endraw %}
