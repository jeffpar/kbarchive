---
layout: page
title: "Q129906: PRB: Listbox Not Properly Redrawn in Design Mode"
permalink: /kb/129/Q129906/
---

## Q129906: PRB: Listbox Not Properly Redrawn in Design Mode

	Article: Q129906
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a list box is resized in Design Mode, black boxes that correspond to the
	handles are left on the Form. This occurs when the list is resized in a program
	(for example, when you are coding a Builder). The list is properly refreshed
	when you resize it in the Form Designer.
	
	CAUSE
	=====
	
	When modifying the size of an object outside the Form Designer, Visual FoxPro
	does not automatically manage the position of the handles in the corners.
	However a new function, SYS(104), has been included in the product. It switches
	the handles ON and OFF at design time.
	
	STATUS
	======
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	If you are developing a builder or a wizard that accesses objects outside of the
	Form Designer at design time, use the SYS(104) function to toggle the grippers
	on and off. For example, type the following when you are ready to move the
	control:
	
	     ? SYS(104)
	
	Use the SYS(104) function in the same fashion when you are ready to redraw the
	handles after the control has been repositioned.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form.
	
	2. Place a list box on the form. Leave the focus on the list box.
	
	3. From the Command window, type the following code:
	
	     nSelect=ASELECT(atest) && Places list object reference into an array.
	     ?SYS(104)              && Handles are toggled off.
	     Atest(1).Top=Atest(1).top+45 && moves the list 45 pixels down
	     ? SYS(104)             && Handles are toggled on.
	     Atest(1).Top=Atest(1).Top+45  &&List is moved and leaves black marks.
	
	
	Additional query words: vFoxwin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
