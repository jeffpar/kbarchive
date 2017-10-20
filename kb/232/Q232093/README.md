---
layout: page
title: "Q232093: BUG: Objects Disappear After Being Assigned to Custom Properties"
permalink: /kb/232/Q232093/
---

## Q232093: BUG: Objects Disappear After Being Assigned to Custom Properties

{% raw %}

	Article: Q232093
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp600bug kbGrpDSFox
	Last Modified: 20-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Assign method, when creating an object and the following code is
	fired three or more times, the object that is being assigned to the property
	disappears from memory:
	
	     propertyname = THIS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	After assigning an object to a property using the THIS reference, the property
	will then share the same properties, methods, and events as the object. After
	assigning the THIS reference to the property three or more times, the object is
	removed from memory and the value of the property returns to a null value. If
	the Assign method is not used when the property is created, an object can be
	assigned to the property repeatedly without being removed from memory.
	
	WORKAROUND
	----------
	
	By assigning the property back to null before assigning the value of the object
	to it, the object will not disappear. For example:
	
	   propertyname = NULL
	   propertyname = THIS
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a New property named MyProp to the form. Next, select
	  the Assign method check box.
	
	2. Add a command button and place the following code in Click event of the
	  command button:
	
	     ThisForm.MyProp = THIS
	
	3. Run the form and click the command button numerous times. Note that the
	  command button disappears from the form.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp600bug kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
