---
layout: page
title: "Q169368: PRB: 3D Frame Control Causes Modal Form to Become Invisible"
permalink: /kb/169/Q169368/
---

## Q169368: PRB: 3D Frame Control Causes Modal Form to Become Invisible

{% raw %}

	Article: Q169368
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0 or 5.0a, adding a Threed(3D) Frame ActiveX control to a
	modal Form causes the modal form to disappear when you run the form.
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem:
	
	- Change the WindowType property of the form to 0-modeless.
	
	-or-
	
	- Assuming the WindowType property is set to 1-modal, change the Visible
	  property of the 3D Frame ActiveX control to false (.F.) at design-time then
	  set the Visible property of the 3D Frame control to .T. in the Activate event
	  of the form.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Set the WindowType property of the form to 1 - modal.
	
	3. Add a Threed Frame control to the form.
	
	4. Save and run the form. Note that the form disappears and remains invisible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
