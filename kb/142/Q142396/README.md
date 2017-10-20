---
layout: page
title: "Q142396: PRB: Alignment Tool Mis-Aligns Check Boxes"
permalink: /kb/142/Q142396/
---

## Q142396: PRB: Alignment Tool Mis-Aligns Check Boxes

{% raw %}

	Article: Q142396
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the alignment tools from the Layout toolbar mis-aligns check boxes when
	the check box Alignment property is set to Right.
	
	WORKAROUND
	==========
	
	To save the proper alignment of right-aligned check boxes, use the 'Align Right
	Sides' button from the Layout toolbar instead.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Check boxes can be created with an Alignment property set to Right. This places
	the Caption text to the left of the actual check box. If the Alignment buttons
	are used to align these check boxes, they line up visually on the screen, but
	are saved improperly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place two check boxes on the form. Change the Caption
	  property for the two check boxes to two different length strings. Change the
	  Alignment property of both check boxes to Right.
	
	2. Right-click any toolbar, and select the Layout toolbar.
	
	3. Select the two check boxes by clicking one and holding down the SHIFT key as
	  you click the other.
	
	4. Click the 'Align Left Sides' button from the Layout toolbar; this is the top
	  button. Note that the check boxes line up properly.
	
	5. Save the form.
	
	6. Edit the form you just saved. Note that the check boxes are no longer aligned
	  properly.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
