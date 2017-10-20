---
layout: page
title: "Q94579: INFO: Creating a Function Pointer to a C++ Member Function"
permalink: /kb/094/Q94579/
---

## Q94579: INFO: Creating a Function Pointer to a C++ Member Function

{% raw %}

	Article: Q94579
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The text below describes generating a function pointer to a class member
	function in code compiled with Microsoft C/C++ version 7.0 or later. The
	declaration of a pointer to a class member function must include the class name.
	However, the class name is omitted from the declaration of a pointer to a static
	member function.
	
	MORE INFORMATION
	================
	
	In the C and C++ languages, an application can define a variable that contains
	the address of a function. You can call the function using this variable instead
	of through the function name. In C++, a pointer to a nonstatic member function
	contains the address of the function in the class, not in the object. To call
	the function, use the appropriate member selection operator (. or ->), the
	indirection operator (*), and the name of an object of the class.
	
	In most cases in the C language, function pointer declarations take the following
	form:
	
	  int (*ptr)();
	
	This code declares a pointer to a function that returns an integer. The function
	accepts an unknown number of augments. To create a pointer to a C++ class member
	function, specify the class name in the function pointer declaration, as
	follows:
	
	  int (Sample::*ptr)();
	
	This code declares a pointer to a member function in the Sample class that
	returns an integer. This function does not accept any arguments.
	
	The different ways to interpret the empty parentheses in function declarations is
	a major difference between the C and C++ languages. In C, a function pointer
	declaration that has no arguments is syntactically identical to the following:
	
	  int (*ptr)(...);
	
	However, a C++ prototype declared without arguments is syntactically identical to
	the following:
	
	  int (Sample::*ptr)(void);
	
	In C++, if the function accepts arguments, the types of the arguments must also
	be listed, as in the following:
	
	  int (Sample::*ptr2)(int, int);
	
	In C, the types of the arguments may be listed in the same manner. A pointer to a
	static member function is declared in the same manner as a pointer to a C
	function. However, because the declaration is part of a C++ program, the
	declaration must list any arguments and their associated types.
	
	To determine the procedure address to assign to a pointer variable, use the class
	name and the scope resolution operator (::). This syntax provides flexibility
	because a declared variable can contain the address of any object of the class.
	The object name in the function call determines the copy of the function used.
	
	The sample code below demonstrates declaring and using pointers to a class member
	function and to a static member function. Note that when the arguments in the
	function pointer declaration do not match the arguments of the function assigned
	to the pointer, the compiler generates errors C2440 and C2564. For example, if
	the "int" declaration is omitted from the argument list declaration for the
	function pointer, the compiler generates the following error messages:
	
	16-bit
	------
	
	  error C2440: 'initializing' : cannot convert from 'void (__far __pascal
	  Data::*)(int )__near ' to 'void (__far __pascal Data::*)(void )__near'
	
	  error C2564: formal/actual parameters mismatch in call through pointer to
	  function
	
	32-bit
	------
	
	  error C2440: 'initializing' : cannot convert from 'void (Data::*)(int) to
	  'void (Data::*)(void)"
	
	  error C2197: 'void (Data::*)(void)' : too many actual parameters
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: None
	   */ 
	
	  #include <iostream.h>
	
	  class Data
	  {
	  private:
	     int y;
	     static int x;
	
	  public:
	     void SetData(int value) {y = value; return;};
	     int GetData() {return y;};
	     static void SSetData(int value) {x = value; return;};
	     static int SGetData() {return x;};
	  };
	
	  int Data::x = 0;
	
	  void main(void)
	  {
	     Data mydata, mydata2;
	
	     // Initialize pointer.
	     void (Data::*pmfnP)(int) = &Data::SetData; // mydata.SetData;
	
	     // Initialize static pointer.
	     void (*psfnP)(int) = &Data::SSetData;
	
	     mydata.SetData(5); // Set initial value for private data.
	     cout << "mydata.data = " << mydata.GetData() << endl;
	
	     (mydata.*pmfnP)(20); // Call member function through pointer.
	     cout << "mydata.data = " << mydata.GetData() << endl;
	
	     (mydata2.*pmfnP)(10) ; // Call member function through pointer.
	     cout << "mydata2.data = " << mydata2.GetData() << endl;
	
	     (*psfnP)(30) ; // Call static member function through pointer.
	     cout << "static data = " << Data::SGetData() << endl ;
	  }
	
	For more information about parameter lists in function declarations and how these
	are handled by C and C++, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q79845 INFO: Old Style (K&R) Declarations Are Not Supported in C++
	
	Additional query words: C2040
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
