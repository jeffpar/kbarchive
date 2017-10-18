---
layout: page
title: "Q150212: FIX: Wrong Help Topic Context for IntegralHeight Property"
permalink: kb/150/Q150212/
---

## Q150212: FIX: Wrong Help Topic Context for IntegralHeight Property

	Article: Q150212
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Choosing the F1 key when the IntegralHeight property of a list box is selected
	causes a jump to the incorrect Help topic. The Sorted property topic appears
	rather than the IntegralHeight property topic.
	
	RESOLUTION
	==========
	
	From the Help menu, choose Search. Then choose Find and display the
	IntegralHeight property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a list box on Form1.
	
	3. Choose the IntegralHeight property in the Properties window for the list box,
	  and the press F1 key.
	
	Notice that Help is launched for the Sorted property topic instead of the
	IntegralHeight property topic.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
