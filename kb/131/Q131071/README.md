---
layout: page
title: "Q131071: Virtual Functions &amp; Multiple Inheritance in Visual FoxPro"
permalink: /kb/131/Q131071/
---

## Q131071: Virtual Functions &amp; Multiple Inheritance in Visual FoxPro

	Article: Q131071
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
	
	Multiple inheritance or the ability to create a single subclass from several
	base classes at once is not supported in Visual FoxPro version 3.0.
	
	Each subclass can have only one, single immmediate ancestor. However derived
	subclasses can be used as base classes themselves for subsequent derived
	classes, which may override or add methods and properties
	
	MORE INFORMATION
	================
	
	C++ programmers use virtual functions to create abstract classes. In C++, member
	functions are bound at compile time unless specifically classified as virtual by
	using the key word 'virtual' in the declaration of the function. Virtual
	functions often do not have any code associated with them and are present only
	to provide type compatibility with variable assignment.
	
	For example, an array may be declared as an array of pointers to a base class
	type with a virtual function. It is then possible to assign each element a
	pointer for a given subclass of the base class without generating a compiler
	error. Derived classes from the base class define code that is to be used for
	the particular object. The reason virtual functions are needed in C++ and not in
	Visual FoxPro is because C++ is a strongly typed language and Visual FoxPro is
	not. With Visual FoxPro, you can have an array hold references to different
	object types in its elements.
	
	REFERENCES
	==========
	
	"Data abstraction and structures using C++" Mark R. Headington and David D.
	Riley, D.C. Heath and Company 1994 ISBN 92-75664
	
	"C++ and the OOP Paradigm" Bindu R. Rao, McGraw-Hill Inc. 1992 ISBN 0-0-051140
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
