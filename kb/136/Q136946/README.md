---
layout: page
title: "Q136946: FIX: No RightClick Event For ToolBars, Containers, or Controls"
permalink: /kb/136/Q136946/
---

## Q136946: FIX: No RightClick Event For ToolBars, Containers, or Controls

{% raw %}

	Article: Q136946
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ToolBar, Container, and Control objects do not expose a RighClick event.
	These objects should have a RightClick event. Objects that support Click and
	DblClick should also have RightClick.
	
	WORKAROUND
	==========
	
	You can capture a right mouse click by using the MouseDown event. It occurs when
	the user presses any mouse button. The MouseDown event accepts a parameter that
	specifies which button was pressed to trigger the event.
	
	For more information about MouseDown, please search for "MouseDown" in the Visual
	FoxPro Help file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
