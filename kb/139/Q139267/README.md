---
layout: page
title: "Q139267: PRB: Unable to Change Tab Order of Objects in Form"
permalink: /kb/139/Q139267/
---

## Q139267: PRB: Unable to Change Tab Order of Objects in Form

{% raw %}

	Article: Q139267
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
	
	When working in the Form Designer, you are unable to change the tab order for
	some objects.
	
	CAUSE
	=====
	
	You have objects that are part of one or more container classes, such as
	pageframes or formsets, and you are not editing those container classes.
	
	RESOLUTION
	==========
	
	To change the tab order for objects that are participating in a container class,
	you must drill down through the object hierarchy to gain access to the objects.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To be consistent with the Visual FoxPro design methodology, you must gain access
	to the objects through their hierarchy. If you want to change the tab order for
	objects contained on a page in a pageframe, for example, you must edit the
	pageframe, and choose the page where you want to make the changes. This is true
	whether the tab order is changed interactively or through the list object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place two or three text boxes on the form.
	
	3. Add a pageframe to the form.
	
	4. Edit the pageframe, and on page 1, place two or three check boxes.
	
	5. Click the form so that it is the currently-selected object.
	
	6. On the View menu, click Tab Order to change the tab order of the objects.
	
	If on the tools menu, you clicked Options, and then you clicked the Interactive
	option on the Form tab, you will be able to change only those objects that are
	physically on the form at the highest level. The same will be true if you chose
	the List method for changing tab orders.
	
	To change the tab order of the objects on the pageframe's page, you must first
	edit the pageframe and select page 1. Then you should have access to the objects
	contained within the pageframe.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
