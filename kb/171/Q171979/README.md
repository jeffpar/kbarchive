---
layout: page
title: "Q171979: PRB: Accessing Property in Initialize Event Causes Infinite Loop"
permalink: /kb/171/Q171979/
---

## Q171979: PRB: Accessing Property in Initialize Event Causes Infinite Loop

	Article: Q171979
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a property of an object is referred to in its own Initialize event, then
	Visual Basic will fire the Initialize event for that object so that it can be
	instantiated. An infinite recursion will result until stack space runs out and
	you receive the following error:
	
	  Run-time error '28':
	  Out of stack space
	
	This will occur for "built-in" objects, such as Forms, and objects created using
	Visual Basic classes.
	
	CAUSE
	=====
	
	Before a property of an object can be accessed, the object must be initialized.
	This is, in fact, the whole point of the Initialize event; it allows the
	developer to place the object in a satisfactory state by initializing private
	data before the properties and methods of an object are invoked. The properties
	and methods may have to rely on the internal data of the object being in a
	stable state.
	
	Consequently, the Initialize event must be completed before a property or method
	of an object can be accessed, and therefore it is not unexpected that the
	Initialize event is fired again when a property is referred to in the Initialize
	event.
	
	RESOLUTION
	==========
	
	If you are trying to set a property of a Visual Basic built-in object, then it
	may be possible to refer to the property in an event that occurs later than the
	Initialize event. For example, rather than setting the Caption of a Form in the
	Initialize event, set it in the Load event or the Activate event.
	
	An alternative to referring directly to Form1, which is a global object pointer,
	is to use the Me keyword. When referring directly to Form1 in the Initialize
	event of the Form, the global object Form1 has not been created so Visual Basic
	tries to instantiate it. This process causes the infinite recursion. Use the Me
	Keyword to avoid this recursion.
	
	If you are trying to set a property for an object created with class modules in
	Visual Basic, it may be appropriate to create a Method for initializing data or
	setting initial values for properties, for which the client program would be
	responsible for calling after instantiating an object. (Perhaps a good analogous
	example of this is the OLE API function OLEInitialize, which client programs
	written in C must explicitly call before using OLE services).
	
	Another way to accomplish this is to set the private data on which a property
	relies in the Initialize event. For example, if a Visual Basic property of a
	class uses a private data member like so:
	
	     Private lPrivProp1 As Long
	
	     Public Property Get lProp1() As Long
	     lProp1 = lPrivProp1
	     End Property
	
	     Public Property Let lProp1(vNewValue As Long)
	     lPrivProp1 = vNewValue
	     End Property
	
	then in the Initialize event of the class module in which this property is
	contained, it is not appropriate to try and set the public property of the
	class, but rather to set the private data member to a value.
	
	STATUS
	======
	
	This is by design.
	
	NOTE: The behavior with Visual Basic versions 5.0 and 6.0 has changed. You no
	longer receive the run-time error when accessing the property of an object in
	the Initialize event of a form. However, it is still recommended that you
	continue to use the Load or Activate events of a Form to access properties of
	objects instead of the Initialize event.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the Initialize event of Form1, add the following line of code:
	
	        Form1.Caption = "Hello world"
	
	3. Run the project by pressing the F5 key. Eventually Visual Basic will run out
	  of stack space.
	
	Steps to Work Around the Problem
	--------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the Initialize event, place the following line of code:
	
	        Me.Caption = "Hello world"
	
	3. Run the project by pressing the F5 key. The Form should appear with a "Hello
	  World" caption.
	
	Additional query words: hang kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
