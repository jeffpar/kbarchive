---
layout: page
title: "Q192305: PRB: Separate Instance of HTML Help Used With Certain Objects"
permalink: /kb/192/Q192305/
---

## Q192305: PRB: Separate Instance of HTML Help Used With Certain Objects

	Article: Q192305
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing help on an object (such as an ActiveX control) after another HTML help
	window is already open, opens a second instance of a HTML help window instead of
	using the current instance of the HTML help window. Both windows appear
	together, one behind the other, and you may have difficulty switching between
	them using the Taskbar or the Task Manager.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you access help on a Visual FoxPro object and leave that HTML help window
	open, accessing help on another Visual FoxPro object uses the same HTML window.
	This behavior is correct. When opening an HTML help window from Visual FoxPro
	and then opening help on another object that is not native to Visual FoxPro, a
	separate HTML help window opens. This behavior is also correct.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place an ActiveX control on the form.
	
	2. Press the F1 key to open the help window for the ActiveX control.
	
	3. Switch back to Visual FoxPro, click the open form and then press the F1 key.
	
	4. Note that both HTML help windows open, one behind the other, and that
	  accessing them from the Taskbar or through the Task Manager is not possible.
	
	Additional query words: kbVFp600 kbDocs
	
	======================================================================
	Keywords          : kbHTMLHelp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
