---
layout: page
title: "Q133022: FIX: Spinner Doesn't Inherit Color Props from .vcx Definition"
permalink: /kb/133/Q133022/
---

## Q133022: FIX: Spinner Doesn't Inherit Color Props from .vcx Definition

{% raw %}

	Article: Q133022
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A spinner definition created in a visual class library will not display the
	inherit color definitions (Forecolor, Backcolor, DisabledForecolor, and so on)
	when instances are created on a form. This occurs whether the Form Designer or
	the AddObject method is used to create the instances even though the color
	definitions are in the Properties Sheet. When the form is run, the spinner
	reverts to a display of the standard color property definitions for a spinner.
	
	WORKAROUND
	==========
	
	Add the following code to the Init method of the spinner definition in the
	visual class library (VCX):
	
	      WITH This
	          .ForeColor = .ForeColor
	          .BackColor = .BackColor
	          .DisabledForeColor = .DisabledForeColor
	          .DisabledBackColor = .DisabledBackColor
	          .SelectedForeColor = .SelectedForeColor
	          .SelectedBackColor = .SelectedBackColor
	      ENDWITH
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a new project, and add a new visual class library definition for a
	  spinner.
	
	2. Change the Forecolor and Backcolor properties from the default to any colors
	  desired. Save the definition as Myspinner.
	
	3. Open a new form, and place the Myspinner object from the visual class library
	  onto the form. The spinner object appears with the default colors for a
	  spinner, not those of the class definition, though the correct colors display
	  in the properties list.
	
	You can edit the colors and reset them to the defaults by clicking the right
	mouse button while editing the form, but when the form is run, the colors revert
	to the default colors for a spinner.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
