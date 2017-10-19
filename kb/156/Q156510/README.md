---
layout: page
title: "Q156510: PRB: ComboBox ReadOnly Property Applies Only to Dropdown Combo"
permalink: /kb/156/Q156510/
---

## Q156510: PRB: ComboBox ReadOnly Property Applies Only to Dropdown Combo

	Article: Q156510
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, the ComboBox control now has a ReadOnly property. The
	ReadOnly property can only be set to .T. if the ComboBox Style property is set
	to 0 - Dropdown Combo--not if the ComboBox Style property is set to 2 - Dropdown
	List. This is documented in the Visual FoxPro 5.0 Help.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The ReadOnly property has been added to the ComboBox control for Visual FoxPro
	5.0. As with other controls (such as TextBox or EditBox), it applies only to the
	region of the control that accepts text input. The ComboBox has such a region
	only if the Style property is set to 0 - Dropdown Combo, so the ReadOnly
	property can be set only to .T. for ComboBoxes of this Style.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command window to create a new form and open it in
	  the Form Designer:
	
	        CREATE FORM combotst
	
	2. In the Form Designer, add a ComboBox to the form.
	
	3. In the Property window, set the Style property for the ComboBox control to "2
	  - Dropdown list."
	
	4. When you try to change the ComboBox ReadOnly property, notice it cannot be
	  changed from .F.
	
	
	NOTE: If the Style property of a combo box with its ReadOnly property set to .T.
	is changed from 0 - Dropdown Combo to 2 - Dropdown List, the ReadOnly property
	changes to .F. This occurs at both design-time and run- time.
	
	Additional query words: kbdse Vfoxwin combo box
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
