---
layout: page
title: "Q190789: PRB: Access Method Fires for Properties that Do Not Exist"
permalink: /kb/190/Q190789/
---

## Q190789: PRB: Access Method Fires for Properties that Do Not Exist

{% raw %}

	Article: Q190789
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing a property that does not exist in a class still fires the Access
	method.
	
	CAUSE
	=====
	
	This behavior permits the design of classes that support the addition of custom
	properties at run-time using the AddProperty method. For example, the following
	class definition adds a new property to the class at run-time when a
	non-existent property is accessed:
	
	     x = NewObject("myclass")
	
	     ?x.NewProp  && New Property will be added to class.
	
	     ?x.NewProp  && Note new property value.
	
	     x.NewProp="Hello"  && Value assigned since property already exists.
	
	     ?x.newprop
	
	     DEFINE Class myclass as Custom
	        PROCEDURE this_access(tcMember)
	           IF ! PEMStatus(this,tcMember,5)
	              this.AddProperty(tcMember)
	           ENDIF
	           RETURN this
	        ENDPROC
	     ENDDEFINE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     x = NewObject('myclass')
	     ?x.BogusProperty
	
	     DEFINE class myclass as custom
	        PROCEDURE this_access(tcMember)
	           WAIT WINDOW tcMember
	           RETURN this
	        ENDPROC
	     ENDDEFINE
	
	The Access method fires before you receive the invalid property error.
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
