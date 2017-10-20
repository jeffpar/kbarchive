---
layout: page
title: "Q128633: How Inheritance Affects PROTECTED Methods and Properties"
permalink: /kb/128/Q128633/
---

## Q128633: How Inheritance Affects PROTECTED Methods and Properties

{% raw %}

	Article: Q128633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how protected properties and methods are inherited when a
	class is derived from another class definition. It specifically addresses these
	issues:
	
	- Whether a protected class member is inherited and thus visible to a derived
	  class.
	
	- Whether it is possible to modify the protected status of a member variable.
	
	MORE INFORMATION
	================
	
	Members variables (properties) or procedures (methods) are by default visible
	outside a class definition. Once an object has been instantiated, its properties
	and methods can be accessed by other objects. The PROTECTED keyword prevents
	access to the Object's properties and methods from outside the object's
	definition.
	
	A PROTECTED property or method is visible to the member functions of the class
	that declared these members, and it is visible to the member functions of a
	class derived from this class. In other words, protected properties, objects
	members, and methods are inherited.
	
	
	When PROTECTED members are inherited, they still have a PROTECTED status.
	Although it is possible to redefine the content of properties and methods in a
	derived class, the PROTECTED status of a member variable cannot be overridden.
	If you need to modify this status in a subclass, you can add a member variable
	to the class. The goal of the new property or method that is visible to other
	objects is to access the PROTECTED member variable from within the class
	definition.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
