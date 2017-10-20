---
layout: page
title: "Q129635: INFO: User-Defined Collections Are 1-Based Not 0-Based"
permalink: /kb/129/Q129635/
---

## Q129635: INFO: User-Defined Collections Are 1-Based Not 0-Based

{% raw %}

	Article: Q129635
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Predefined collections such as fields and forms are 0-based. User-defined
	collections declared as New Collection are 1-based. It is not possible to use an
	Option Base statement to set the default base to 0 or any other number because a
	collection is not an array. This behavior is by design.
	
	MORE INFORMATION
	================
	
	A collection is an object that contains a set of related objects called members
	of the collection. A member object's position in the collection can change
	whenever a change occurs in the collection. Therefore, the position of any
	specific object in the collection may vary. It is recommended not to use
	collection indices for iteration because they are not guaranteed to be
	contiguous.
	
	If you use the For Each construct to iterate through the members of the
	collection, the base of the collection doesn't matter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
