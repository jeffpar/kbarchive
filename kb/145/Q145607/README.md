---
layout: page
title: "Q145607: BUG: Cannot Customize the Form Controls Toolbar"
permalink: /kb/145/Q145607/
---

## Q145607: BUG: Cannot Customize the Form Controls Toolbar

{% raw %}

	Article: Q145607
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro allows you to Customize the different toolbars that come with the
	product. The Help for the Customize Toolbar dialog box states, "To add the
	button, drag it to the desired toolbar." When you try this with the Forms
	Controls Toolbar, it creates a new toolbar with the button that you tried to add
	to the Forms Control Toolbar instead of adding it on to the Form Controls
	toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the View menu, click ToolBars
	
	2. In the Toolbars dialog box, select the Form Controls check box, and then
	  click the Customize button.
	
	3. From the Customize Toolbar dialog box, drag the Run button to the Form
	  Controls Toolbar.
	
	Instead of adding it to the Form Controls Toolbar, Visual FoxPro creates a new
	toolbar with the Run button on it. If you repeat the steps using the Report
	Controls Toolbar, Visual FoxPro adds the button to the Report Controls Toolbar
	as expected.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
