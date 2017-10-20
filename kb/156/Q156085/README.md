---
layout: page
title: "Q156085: HOWTO: Have a Multiple-Line Caption on a Command Button"
permalink: /kb/156/Q156085/
---

## Q156085: HOWTO: Have a Multiple-Line Caption on a Command Button

{% raw %}

	Article: Q156085
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.0 has a new WordWrap property for command buttons that allows
	you to create command buttons with multiple-line captions.
	
	MORE INFORMATION
	================
	
	Use the following steps to create multiple-line captions for your command
	buttons:
	
	1. Drop a command button on a form. Do not adjust its size.
	
	2. Set the caption to the following string:
	
	  This is a real long caption to see if this works
	
	3. Set the WordWrap property of the command button to .T.
	
	4. Set the AutoSize property to .T.
	
	Visual FoxPro adjusts the command button's size vertically to accommodate the
	caption text. If you adjust the width of the button manually, the vertical size
	adjusts. You cannot manually adjust the vertical size of the button. In some
	cases it may appear that there is a blank line at the top and bottom of the
	button. Set the AutoSize property to false to adjust the size of the button
	vertically. Now you can remove the extra line.
	
	Additional query words: word wrap
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
