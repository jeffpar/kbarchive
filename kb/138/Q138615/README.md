---
layout: page
title: "Q138615: PRB: Formset Forms Don't Switch If Chosen in Properties Window"
permalink: kb/138/Q138615/
---

## Q138615: PRB: Formset Forms Don't Switch If Chosen in Properties Window

	Article: Q138615
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At design time, you may switch between objects in the Form Designer by using the
	Object list located at the top of the Properties window. However, selecting a
	different form in a formset from this list does not make the selected form the
	topmost window in the Form Designer.
	
	WORKAROUND
	==========
	
	- Switch between Forms by using the Form list located in the lower-left corner
	  of the Form Designer.
	
	-or-
	- If a portion of the form is visible in the Form Designer, click the exposed
	  portion to bring it to the front.
	
	-or-
	
	- If you have only one formset open, press CTRL+F6 to cycle through the forms
	  in the Form Designer.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to Microsoft Visual FoxPro and create a formset that consists
	  of two or more forms.
	
	2. Right-click the Form, and open the Properties window.
	
	3. Using the Object list located in the Properties window, attempt to change the
	  focus from one form to another. Note that regardless of the form selected,
	  the topmost form in the Form Designer does not change.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
