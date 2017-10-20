---
layout: page
title: "Q104248: HOW TO: Use #pragma init_seg to Control Static Construction"
permalink: /kb/104/Q104248/
---

## Q104248: HOW TO: Use #pragma init_seg to Control Static Construction

{% raw %}

	Article: Q104248
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft C++ Compiler, it is possible to control when your static
	objects, declared at file scope, are constructed and destructed by using the
	#pragama init_seg preprocessor directive.
	
	MORE INFORMATION
	----------------
	
	There are four options for the init_seg preprocessor directive: compiler, lib,
	user, and "user_defined_segment_name." In source code, this directive would have
	the form:
	
	  #pragma init_seg(compiler)
	  #pragma init_seg(lib)
	  #pragma init_seg(user)
	  #pragma init_seg("user_defined_segment_name")
	
	NOTE: Only one init_seg directive can appear in a single source file. Otherwise,
	the compiler generates "error C2356: initialization segment must not change
	during translation unit."
	
	The purpose of this directive is to give the developer the ability to group the
	constructors in an application. This would be useful if some objects relied upon
	the existence of other objects to function correctly. Objects that are grouped
	together using #pragma init_seg(compiler) are constructed before all other
	objects and destroyed after all other objects in the application. This is used
	for objects in the run-time libraries. For example, because cin and cout may or
	may not be constructed yet, using these objects in your constructor or
	destructor that uses the init_seg(compiler) #pragma would be unwise.
	
	Objects that are grouped together using #pragma init_seg(lib) are constructed
	after and destructed before objects that are in modules compiled with #pragma
	init_seg(compiler), but before all other objects in the application. Objects
	that are grouped together using #pragma init_seg(user) are constructed after and
	destructed before objects that are in modules compiled with #pragma
	init_seg(compiler) and #pragma init_seg(lib). In other words, objects that are
	grouped together using #pragma init_seg(user) are constructed and destructed at
	the same time as all other static objects that were not grouped using #pragma
	init_seg.
	
	The documentation isn't totally clear on this point. It states that objects in
	the user group are constructed last. This means that these objects are
	constructed after and destructed before the compiler and lib groups. One way
	that you can control the order of construction and destruction within each group
	is to change the order of linking. Modules that appear earlier in the link line
	will be constructed after and destructed before modules that appear later in the
	link line that are in the same init_seg group. Constructors are called in
	reverse order of their appearance in the segments.
	
	It is important to note that the C++ language does not guarantee any order of
	construction for nonderived objects; the C++ language guarantees that those
	objects will be constructed, and that base classes will be constructed before
	classes that derive from them.
	
	The #pragma init_seg("user_defined_segment_name") preprocessor directive puts the
	addresses of the constructors into the logical segment
	"user_defined_segment_name". This option is useful only if you modify the
	startup code to call these constructors.
	
	The following code sample (four source files) demonstrates the above ideas. After
	compiling all source files, link them in the two ways shown below and run the
	resultant executables. The output from each will show which init_seg options are
	dependent on link order and which are not.
	
	With Visual C++ 32-bit Edition versions, use:
	
	  link file1 file2 file3 file4 /out:demo1.exe
	  link file4 file3 file2 file1 /out:demo2.exe
	
	With Visual C++ 16-bit versions, use:
	
	  link file1 file2 file3 file4, demo1;
	  link file4 file3 file2 file1, demo2;
	
	Sample Code
	-----------
	
	  // file1.cpp
	  // command line: cl /c file1.cpp
	  #pragma init_seg(compiler)
	  #include<stdio.h>
	  class MyCompClass
	  {
	  public:
	        MyCompClass(){ printf("In the ctor of MyCompClass\n");}
	        ~MyCompClass(){ printf("In the dtor of MyCompClass\n");}
	  } MyComp;
	
	  // file2.cpp
	  // command line: cl /c file2.cpp
	  #pragma init_seg(lib)
	  #include<iostream.h>
	  class MyLibClass
	  {
	  public:
	        MyLibClass(){cout<<"In the ctor of MyLibClass"<<endl;}
	        ~MyLibClass(){cout<<"In the dtor of MyLibClass"<<endl;}
	  } MyLib;
	
	  // file3.cpp
	  // command line: cl /c file3.cpp
	  #pragma init_seg(user)
	  #include<iostream.h>
	  class MyUserClass
	  {
	  public:
	        MyUserClass(){cout<<"In the ctor of MyUserClass"<<endl;}
	        ~MyUserClass(){cout<<"In the dtor of MyUserClass"<<endl;}
	  } MyUser;
	
	  // file4.cpp
	  // command line: cl /c file4.cpp
	  #include<iostream.h>
	  class MyRegularClass
	  {
	  public:
	        MyRegularClass(){cout<<"In the ctor of MyRegularClass"<<endl;}
	        ~MyRegularClass(){cout<<"In the dtor of MyRegularClass"<<endl;}
	  } MyRegular;
	
	  void main(){}
	
	Additional query words: 7.00 7.00a 8.00
	
	======================================================================
	Keywords          : kbcode kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
