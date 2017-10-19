---
layout: page
title: "Q170172: PRB: Changing Form ScaleMode Does Not Alter Grid Partition Value"
permalink: /kb/170/Q170172/
---

## Q170172: PRB: Changing Form ScaleMode Does Not Alter Grid Partition Value

	Article: Q170172
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the ScaleMode property of a form does not change the numerical value of
	the partition of a grid.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When changing the ScaleMode of a form from pixels to foxels or vice versa, all
	the dimensional properties of the form and controls on the form should reflect
	to the new ScaleMode.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a grid to the form and make its Width property 400.
	
	3. Increase the Partition property of the grid to 200.
	
	4. Change the ScaleMode property of the form from pixels to foxels.
	
	Look at the numerical values that should change when the ScaleMode changes, such
	as width, top, left, or height of the form and the grid. These values change,
	but the partition value of the grid remains the same.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
