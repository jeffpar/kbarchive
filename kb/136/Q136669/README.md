---
layout: page
title: "Q136669: BUG: Grid Activation Causes Form to Move If Form Title Hidden"
permalink: /kb/136/Q136669/
---

## Q136669: BUG: Grid Activation Causes Form to Move If Form Title Hidden

{% raw %}

	Article: Q136669
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbui kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Many people set the Top property of a form to a negative number so they can hide
	the form's title bar. However, if you have a grid on a form and the Top property
	of the form is set to a negative number, the grid gets the focus and the Top
	property is reset to zero. This causes the form to move, which is not desired
	behavior.
	
	WORKAROUND
	==========
	
	Instead of using a negative Top property to hide the title bar, set the
	following form properties, which will hide the title bar without using a
	negative Top property setting.
	
	     Caption=        && Leave it empty
	     ControlBox=.F.
	     Closable=.F.
	     MaxButton=.F.
	     MinButton=.F.
	     Movable=.F.
	     Top=0           && Or anything more than 0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following command in the Command window:
	
	        CREATE FORM test
	
	2. Add any table to the data environment.
	
	3. Add a text box to the form.
	
	4. Drag the title bar of the table onto the form so that you create a grid.
	
	5. Set the Top property of the Form to -20.
	
	6. Run the form. As long as the text box is the active control, the form title
	  bar remains off screen. However, if you press TAB to move to the grid, the
	  form moves to Top=0, and you can see the title bar.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbui kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
