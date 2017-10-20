---
layout: page
title: "Q156579: PRB: ACTIVATE WINDOW DEBUG Activates Debug Output Window"
permalink: /kb/156/Q156579/
---

## Q156579: PRB: ACTIVATE WINDOW DEBUG Activates Debug Output Window

{% raw %}

	Article: Q156579
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
	
	If the Debug window is already open, then the ACTIVATE WINDOW DEBUG command sets
	the focus to the Debug Output window. On the other hand, if the Debug window is
	not open, the Debug window is opened and the focus is set to the Watch window.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click Options. This opens the Options dialog box.
	
	2. In the Options dialog box, click the Debug tab and make sure that Environment
	  is set to "Debug Frame." Click OK or "Set As Default" to exit the Options
	  dialog box.
	
	3. Open the Debug window by selecting the Debugger option on the Tools menu or
	  by entering the following command in the Command window:
	
	        ACTIVATE WINDOW Debug
	
	4. Note that the Debug window is opened and the focus is on the Watch window.
	
	5. Enter the following command in the Command window:
	
	        ACTIVATE WINDOW Debug
	
	The Debug window is activated and the focus is set to the "Debug Output" window.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
