---
layout: page
title: "Q130499: How to Copy Visual Classes to Other Libraries"
permalink: /kb/130/Q130499/
---

## Q130499: How to Copy Visual Classes to Other Libraries

	Article: Q130499
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes three ways to copy a visual class from one class library
	(.VCX file) to another.
	
	MORE INFORMATION
	================
	
	It is sometimes necessary to copy a class from one library to another. You can
	copy a class using one of the following three methods.
	
	Method One: Use the ADD CLASS Command
	-------------------------------------
	
	The ADD CLASS command adds a class to a class library. The OF clause of the ADD
	CLASS command allows you to add a class from another class library. For example,
	if you have a class called Class1 in a library called Mylib and want to copy the
	class to another library, you can use this command:
	
	     ADD CLASS class1 OF mylib1 TO mylib2
	
	Method Two: Use the Project Manager
	-----------------------------------
	
	You can drag and drop a class from a class library to another one in a project.
	
	1. Open a project, and add two classes to it.
	
	2. Select the Class Library tab, and drill down the class library to see all of
	  the classes contained in the .VCX file.
	
	3. Click a class in the source class library, and drag it to the destination
	  library.
	
	The class is copied from one library to the other. You can also open two
	different projects and drag a class from one project to the other.
	
	Method Three: Use the Class Browser
	-----------------------------------
	
	You can drag a class between two instances of the Class Browser.
	
	1. Choose Class Browser from the Tools menu.
	
	2. Open a class library, and select the class you want to copy.
	
	3. Open a second instance of the Class Browser.
	
	4. Drag the class you want to copy from one instance of the Class Browser to the
	  second instance. To do this, drag the class icon below the Type combo box
	  from the source library to the class icon picture in the second instance of
	  the Class Browser.
	
	Copying a class from one class library to another class library adds a record to
	the .VCX file. If a class is subclassed, a reference to the initial location of
	the parent class exists, and it is not changed when you copy the class to a
	different .VCX file. If you want to maintain inheritance without providing the
	two .VCX files, you need to edit the class to modify this reference, and you
	need to copy the parent class to the new library. You can use the Class Browser
	to achieve this.
	
	1. Start an instance of the Class Browser, and select the class you just copied.
	
	2. Select the Redefine button to change the reference to the parent class. In
	  the 'As' textbox, type the name of the parent class, and in the 'Of' textbox,
	  select the name of the new class library.
	
	REFERENCES
	==========
	
	For more information about copying and redefining classes, search for "Browsing
	Classes" and then "Managing Classes with the Class Browser" in the Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
