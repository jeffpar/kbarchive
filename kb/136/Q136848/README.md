---
layout: page
title: "Q136848: PRB: Class Browser: &quot;Unable to Display Class Hierarchy&quot; Error"
permalink: /kb/136/Q136848/
---

## Q136848: PRB: Class Browser: &quot;Unable to Display Class Hierarchy&quot; Error

{% raw %}

	Article: Q136848
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Class library is browsed in the Class Browser and a class that has
	subclasses is removed, the error "Unable to Display Class Hierarchy" is
	displayed when the Class Browser form is refreshed.
	
	CAUSE
	=====
	
	A class contains an explicit reference to its parent in a .vcx file. If the
	parent class is removed, the derived class cannot find its parent, and the class
	hierarchy is incorrect.
	
	RESOLUTION
	==========
	
	Remove the child classes first, and then delete the parent class.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Class Browser (On the Tools menu, click Class Browser).
	
	2. Open a class that has some child classes. For example, open the Tsbase.vcx
	  file located in the Vfp\Mainsamp\Libs directory.
	
	3. Click the Remove button to delete a class that has derived classes. For
	  example, delete TSBASEFORM. The error "Unable to Display class hierarchy" is
	  displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
