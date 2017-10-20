---
layout: page
title: "Q131408: Object Variables Return &quot;(Object)&quot; in Debug Window"
permalink: /kb/131/Q131408/
---

## Q131408: Object Variables Return &quot;(Object)&quot; in Debug Window

{% raw %}

	Article: Q131408
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the debug window, an entry may have the value of "(Object)."
	
	MORE INFORMATION
	================
	
	An entry in the debug window will have a value of "(Object)" if it refers to an
	object, not a property of an object. For example, if you enter the following in
	the debug window, the value will be (Object), because it references the Form
	object not a property of that form:
	
	   _SCREEN.ACTIVEFORM
	
	On the other hand, if you place _SCREEN.ACTIVEFORM.NAME in the debug window, the
	value will be the name of the form.
	
	Run a form and place _SCREEN.ACTIVEFORM and _SCREEN.ACTIVEFORM.NAME in the debug
	window to see the difference.
	
	For more information about debugging forms, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129425 Form Debugging Tips
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
