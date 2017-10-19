---
layout: page
title: "Q153308: HOWTO: Easily Set Up the Tab Sequence of a Form"
permalink: /kb/153/Q153308/
---

## Q153308: HOWTO: Easily Set Up the Tab Sequence of a Form

	Article: Q153308
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TAB key is often used to navigate sequentially through multiple controls on
	a form. The order in which you move through the controls depends on their
	TabIndex value, not their position on the form. This article provides you with a
	simple method you can use to set up a required tab sequence.
	
	MORE INFORMATION
	================
	
	By default, the TabIndex property is set when you place a control on a form
	relative to the other controls on the form. To set up a required tab sequence,
	in the design environment, select the control you wish to be last in the tab
	sequence. Set its TabIndex to Zero. Select each control in the opposite
	direction from that which the user will use to navigate through the form, and
	set each control's TabIndex to Zero.
	
	Each time you set the TabIndex for a control, all the other controls have their
	TabIndex recalculated so as you set them to Zero all the other controls are
	incremented by one.
	
	REFERENCES
	==========
	
	  Q142816 How to Make ENTER Key Move Focus Like TAB Key for VB Controls
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
