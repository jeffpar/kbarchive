---
layout: page
title: "Q130351: PRB: Movable Property in Effect at Design Time"
permalink: /kb/130/Q130351/
---

## Q130351: PRB: Movable Property in Effect at Design Time

{% raw %}

	Article: Q130351
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
	
	When the Movable Property of a form is set to False (.F.) in design mode, the
	form cannot be moved from its current location.
	
	CAUSE
	=====
	
	While you are creating a form with the Form Designer, the form is considered
	"live." This means that visual and behavioral changes are reflected immediately
	in the design mode of the form as well as during run time.
	
	WORKAROUND
	==========
	
	Add all the controls for the form first before setting the properties that will
	control the behavior of the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps illustrate the effects of setting the Movable property for
	the form in design mode.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Set the Movable property to .F..
	
	3. Try to move the form while in design mode.
	
	REFERENCES
	==========
	
	For more information on form properties and behavior, please see the "Form
	Behavior, Defining" topic in the Visual FoxPro Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
