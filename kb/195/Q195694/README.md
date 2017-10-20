---
layout: page
title: "Q195694: PRB: Method Code Not Returned Using Object Reference with GETPEM"
permalink: /kb/195/Q195694/
---

## Q195694: PRB: Method Code Not Returned Using Object Reference with GETPEM

{% raw %}

	Article: Q195694
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GETPEM() function can be used to return the property values and event or
	method program code for a given object at design-time. Although not documented
	as being supported at run-time, this function does return property values and
	event or method code at run-time.
	
	However, when passing an object reference as the first parameter to the GETPEM()
	function, an empty string is returned when querying for event or method program
	code at run-time.
	
	RESOLUTION
	==========
	
	In order to retrieve the event or method code at run-time using the GETPEM()
	function, the first parameter must specify the class name rather than a
	reference to the object. If the class name is not known, the object's Class
	property can be passed as follows:
	
	     GETPEM(oObject.Class, "Init")
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In this context, run-time refers to a compiled Visual FoxPro executable running
	with VFP6R.DLL, and design-time means running in the Interactive Development
	Environment (IDE) using VFP6.exe.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     oObject = NEWOBJECT("_form",HOME()+"ffc\_base.vcx")
	     cMethodCode = GETPEM(oObject,"Release") && Object Ref = Empty String
	     ?LEN(cMethodCode)  && Zero
	
	Note that zero is returned. If the first parameter passed to the GETPEM()
	function is changed to oObject.Class, a value greater than zero is returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
