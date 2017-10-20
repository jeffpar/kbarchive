---
layout: page
title: "Q128076: How to Reference a Class in Class Hierarchy Generically"
permalink: /kb/128/Q128076/
---

## Q128076: How to Reference a Class in Class Hierarchy Generically

{% raw %}

	Article: Q128076
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can call methods and properties of a class from a derived class with the
	scope resolution operator (::). This article demonstrates a generic method you
	can use to refer to a class that is one level higher in the class hierarchy
	tree.
	
	MORE INFORMATION
	================
	
	When a class is defined, it inherits the properties, events, and methods
	associated with the class from which it is derived -- the parent class.
	
	However, writing any code in a method of a class overrides the code that was
	defined in the parent class. There might be cases where the method of a class
	has to be an extension of the method in the parent class and include the tasks
	defined in the parent class. The method in the parent class can be called with
	the scope resolution operator (::).
	
	You can generically refer to a parent class by evaluating the parent class
	property. The following example demonstrates how to call a parent class from a
	class generically. It uses the EVALUATE() function.
	
	
	Code Sample
	-----------
	
	In this example, a Building class is defined as a custom class. The House class
	is derived from the Building class. An instance of the House class is created,
	and the RingtheBell method is called. When you run this sample code, a WAIT
	WINDOW should be displayed. This is the code defined in the Building class. Once
	the WAIT WINDOW is cleared off the screen, the bell should ring. This is the
	code defined in the House class.
	
	     oNewObject= CREATEOBJECT ("House")
	     oNewObject.RingThebell()
	
	     * Class definition
	     DEFINE CLASS building AS CUSTOM
	        Value="Building"
	
	        PROCEDURE RingtheBell
	           WAIT WINDOW "This is a " + this.value
	        ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS House AS Building
	        Value ="House"
	
	        PROCEDURE RingtheBell
	           =EVALUATE(this.parent.class+'::RingtheBell()')
	           && Generically calls the method in the parent class
	           ?CHR(7)
	        ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
