---
layout: page
title: "Q129790: Base Classes Available in Visual FoxPro"
permalink: /kb/129/Q129790/
---

## Q129790: Base Classes Available in Visual FoxPro

{% raw %}

	Article: Q129790
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All Visual FoxPro base classes recognize a minimum set of events and properties.
	You can create objects or derive subclasses from most of the Visual FoxPro base
	classes, but not all.
	
	This article lists the Visual FoxPro base classes, indicates whether or not each
	class can be subclassed, lists the minimum event set for Visual FoxPro base
	classes, and lists the minimum property set for Visual FoxPro base classes.
	
	MORE INFORMATION
	================
	
	Visual FoxPro Base Classes That Can Be Subclassed
	-------------------------------------------------
	
	The following Visual FoxPro Classes are not an integral part of a parent
	container, so they can be subclassed in the Class Designer:
	
	 check box        EditBox        list box              Shape
	 Column (1)       Form           OLEBoundControl       Spinner
	 CommandButton    FormSet        OLEContainerControl   text box
	 CommandGroup     Grid           Timer                 ComboBox
	 OptionGroup      ToolBar        Container             Image Control
	 Label            PageFrame      Custom                Line
	
	Visual FoxPro Base Classes That Cannot Be Subclassed
	----------------------------------------------------
	
	The following Visual FoxPro Classes are an integral part of a parent container,
	so they cannot be subclassed in the Class Designer:
	
	 Header
	 OptionButton
	 Page
	 Separator
	
	Base Class Minimum Event Set
	----------------------------
	
	All Visual FoxPro base classes recognize the following minimum set of events:
	
	 Event   - Description
	-----------------------
	 Init    - Invoked when the object is created.
	 Destroy - Invoked when the object is released from memory.
	 Error   - Invoked when an error occurs in event or method procedures
	           of the class.
	
	Base Class Minimum Property Set
	-------------------------------
	
	All Visual FoxPro base classes have the following minimum set of properties:
	
	 Property     -  Description
	
	 Class        -  What type of class it is.
	
	 BaseClass    -  The base class it was derived from, such as Form,
	                 Commandbutton, Custom, and so on.
	
	 ClassLibrary -  The class library the class belongs to.
	
	 ParentClass  -  The class the object was derived from. If the class was
	                 derived directly from a Visual FoxPro base class, the
	                 ParentClass property is the same as the BaseClass
	                 property.
	
	NOTE: Most of the information in this article is available under many different
	topics in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
